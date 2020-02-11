const Converter = require('jcampconverter');
const { IOBuffer } = require('iobuffer');
const JSZip = require('jszip');

const BINARY = 1;
const TEXT = 2;

function readZIP(zipFile, options) {
  options = options || {};
  const jsZip = new JSZip();

  return jsZip.loadAsync(zipFile, options).then((zip) => {
    let files = {
      ser: BINARY,
      fid: BINARY,
      acqus: TEXT,
      acqu2s: TEXT,
      procs: TEXT,
      proc2s: TEXT,
      '1r': BINARY,
      '1i': BINARY,
      '2rr': BINARY,
    };
    let folders = zip.filter(function(relativePath) {
      if (relativePath.match('__MACOSX')) return false;
      if (
        relativePath.endsWith('ser') ||
        relativePath.endsWith('fid') ||
        relativePath.endsWith('1r') ||
        relativePath.endsWith('2rr')
      ) {
        return true;
      }
      return false;
    });
    let spectra = new Array(folders.length);

    for (let i = 0; i < folders.length; ++i) {
      let promises = [];
      let name = folders[i].name;
      name = name.substr(0, name.lastIndexOf('/') + 1);
      promises.push(name);
      let currFolder = zip.folder(name);
      let currFiles = currFolder.filter(function(relativePath) {
        return files[relativePath] ? true : false;
      });
      if (name.indexOf('pdata') >= 0) {
        promises.push('acqus');
        promises.push(
          zip.file(name.replace(/pdata\/[0-9]+\//, 'acqus')).async('string'),
        );
      }
      for (let j = 0; j < currFiles.length; ++j) {
        let idx = currFiles[j].name.lastIndexOf('/');
        name = currFiles[j].name.substr(idx + 1);
        promises.push(name);
        if (files[name] === BINARY) {
          promises.push(currFiles[j].async('arraybuffer'));
        } else {
          promises.push(currFiles[j].async('string'));
        }
      }
      spectra[i] = Promise.all(promises).then((result) => {
        let brukerFiles = {};
        for (let k = 1; k < result.length; k += 2) {
          name = result[k];
          brukerFiles[name] = result[k + 1];
        }
        return { filename: result[0], value: convert(brukerFiles, options) };
      });
    }
    return Promise.all(spectra);
  });
}

function convert(brukerFiles, options) {
  options = options || {};
  let start = new Date();
  let result;
  if (brukerFiles.ser || brukerFiles['2rr']) {
    result = convert2D(brukerFiles, options);
  } else if (brukerFiles['1r'] || brukerFiles['1i'] || brukerFiles.fid) {
    result = convert1D(brukerFiles, options);
  } else {
    throw new RangeError('The current files are invalid');
  }

  if (result.twoD && !options.noContours) {
    add2D(result);
    if (result.profiling) {
      result.profiling.push({
        action: 'Finished countour plot calculation',
        time: new Date() - start,
      });
    }
    if (!options.keepSpectra) {
      delete result.spectra;
    }
  }

  let spectra = result.spectra;
  if (options.xy) {
    // the spectraData should not be a oneD array but an object with x and y
    if (spectra.length > 0) {
      for (let i = 0; i < spectra.length; i++) {
        let spectrum = spectra[i];
        if (spectrum.data.length > 0) {
          for (let j = 0; j < spectrum.data.length; j++) {
            let data = spectrum.data[j];
            let newData = {
              x: new Array(data.length / 2),
              y: new Array(data.length / 2),
            };
            for (let k = 0; k < data.length; k = k + 2) {
              newData.x[k / 2] = data[k];
              newData.y[k / 2] = data[k + 1];
            }
            spectrum.data[j] = newData;
          }
        }
      }
    }
  }

  return result;
}

function convert1D(files, options) {
  let result = parseData(files.procs || '', options);
  let temp = parseData(files.acqus || '', options);

  let keys = Object.keys(temp.info);
  for (let i = 0; i < keys.length; i++) {
    let currKey = keys[i];
    if (result.info[currKey] === undefined) {
      result.info[currKey] = temp.info[currKey];
    }
  }

  if (files['1r'] || files['1i']) {
    if (files['1r']) {
      setXYSpectrumData(files['1r'], result, '1r', true);
    }
    if (files['1i']) {
      setXYSpectrumData(files['1i'], result, '1i', false);
    }
  } else if (files.fid) {
    setFIDSpectrumData(files.fid, result);
  }

  return result;
}

function convert2D(files, options) {
  let sf, swP, offset, result, temp;
  if (files['2rr']) {
    result = parseData(files.procs, options);
    temp = parseData(files.acqus, options);

    let keys = Object.keys(temp.info);
    for (let i = 0; i < keys.length; i++) {
      let currKey = keys[i];
      if (result.info[currKey] === undefined) {
        result.info[currKey] = temp.info[currKey];
      }
    }

    temp = parseData(files.proc2s, options);
    result.info.nbSubSpectra = temp.info.$SI = parseInt(temp.info.$SI, 10);
    sf = temp.info.$SF = parseFloat(temp.info.$SF);
    swP = temp.info.$SWP = parseFloat(temp.info.$SWP);
    offset = temp.info.$OFFSET = parseFloat(temp.info.$OFFSET);
  } else if (files.ser) {
    result = parseData(files.acqus, options);
    temp = parseData(files.acqu2s, options);
    result.info.nbSubSpectra = temp.info.$SI = parseInt(temp.info.$TD, 10);
    result.info.$SI = parseInt(result.info.$TD, 10);
    // SW_p = temp.info['$SWH'] = parseFloat(temp.info['$SWH']);

    swP = temp.info.$SW;

    result.info.$SWP = result.info.$SWH;
    result.info.$SF = parseFloat(temp.info.$SFO1);
    result.info.$OFFSET = 0;
    sf = temp.info.$SFO1 = parseFloat(temp.info.$SFO1);
    sf = 1;
    offset = 0;
    result.info.$AXNUC = result.info.$NUC1;
    temp.info.$AXNUC = temp.info.$NUC1;
  }

  result.info.firstY = offset;
  result.info.lastY = offset - swP / sf;
  result.info.$BF2 = sf;
  result.info.$SFO1 = sf;

  let nbSubSpectra = result.info.nbSubSpectra;
  let pageValue = result.info.firstY;
  let deltaY = (result.info.lastY - result.info.firstY) / (nbSubSpectra - 1);

  if (files['2rr']) {
    setXYSpectrumData(files['2rr'], result, '2rr', true);
  } else if (files.ser) {
    setFIDSpectrumData(files.ser, result, 'ser', true);
  }

  for (let i = 0; i < nbSubSpectra; i++) {
    pageValue += deltaY;
    result.spectra[i].pageValue = pageValue;
  }

  // var dataType = files.ser ? 'TYPE_2DNMR_FID' : 'TYPE_2DNMR_SPECTRUM';

  result.info['2D_Y_NUCLEUS'] = temp.info.$AXNUC;
  result.info['2D_X_NUCLEUS'] = result.info.$AXNUC;
  result.info['2D_Y_FRECUENCY'] = sf;
  result.info['2D_Y_OFFSET'] = offset;
  result.info['2D_X_FRECUENCY'] = result.info.$SF;
  result.info['2D_X_OFFSET'] = result.info.$OFFSET;

  result.twoD = true;

  return result;
}

function setXYSpectrumData(file, spectra, store, real) {
  file = ensureIOBuffer(file);
  let td = (spectra.info.$SI = parseInt(spectra.info.$SI, 10));

  let swP = parseFloat(spectra.info.$SWP);
  let sf = parseFloat(spectra.info.$SF);
  let bf = sf;

  // var BF = parseFloat(spectra.info["$BF1"]);
  let offset = spectra.shiftOffsetVal || parseFloat(spectra.info.$OFFSET);

  spectra.info.observeFrequency = sf;
  spectra.info.$BF1 = bf;
  spectra.info.$SFO1 = sf;
  spectra.info.brukerReference = bf;

  let endian = parseInt(spectra.info.$BYTORDP, 10);
  endian = endian ? 0 : 1;

  // number of spectras
  let nbSubSpectra = spectra.info.nbSubSpectra ? spectra.info.nbSubSpectra : 1;

  if (endian) {
    file.setLittleEndian();
  } else {
    file.setBigEndian();
  }

  for (let i = 0; i < nbSubSpectra; i++) {
    let toSave = {
      dataType: 'NMR Spectrum',
      dataTable: '(X++(R..R))',
      nbPoints: td,
      firstX: offset,
      lastX: offset - swP / sf,
      xUnit: 'PPM',
      yUnit: 'Arbitrary',
      data: [new Array(td * 2)], // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: sf,
      title: spectra.info.TITLE,
      deltaX: -(swP / sf) / (td - 1),
    };

    let x = offset;
    let deltaX = toSave.deltaX;

    if (real) {
      for (let k = 0; k < td; ++k) {
        toSave.data[0][2 * k] = x;
        toSave.data[0][2 * k + 1] = file.readInt32();
        if (
          toSave.data[0][2 * k + 1] === null ||
          isNaN(toSave.data[0][2 * k + 1])
        ) {
          toSave.data[0][2 * k + 1] = 0;
        }
        x += deltaX;
      }
    } else {
      for (let k = td - 1; k >= 0; --k) {
        toSave.data[0][2 * k] = x;
        toSave.data[0][2 * k + 1] = file.readInt32();
        if (
          toSave.data[0][2 * k + 1] === null ||
          isNaN(toSave.data[0][2 * k + 1])
        ) {
          toSave.data[0][2 * k + 1] = 0;
        }
        x += deltaX;
      }
    }

    spectra.spectra.push(toSave);
  }
}

function parseData(file, options) {
  let keepRecordsRegExp = /.*/;
  if (options.keepRecordsRegExp) keepRecordsRegExp = options.keepRecordsRegExp;
  return Converter.convert(file, {
    keepRecordsRegExp: keepRecordsRegExp,
  });
}

function setFIDSpectrumData(file, spectra) {
  file = ensureIOBuffer(file);
  let td = (spectra.info.$TD = parseInt(spectra.info.$TD, 10));

  let SW = (spectra.info.$SW = parseFloat(spectra.info.$SW));

  let SF = (spectra.info.$SFO1 = parseFloat(spectra.info.$SFO1));
  let BF = parseFloat(spectra.info.$BF1);
  spectra.info.$BF1 = BF;

  // var DW = 1 / (2 * SW_h);
  // var AQ = td * DW;
  let AQ = SW;
  let DW = AQ / (td - 1);

  let endian = parseInt(spectra.info.$BYTORDP, 10);
  endian = endian ? 0 : 1;

  if (endian) {
    file.setLittleEndian();
  } else {
    file.setBigEndian();
  }

  let nbSubSpectra = spectra.info.nbSubSpectra ? spectra.info.nbSubSpectra : 1;
  spectra.spectra = new Array(nbSubSpectra);

  for (let j = 0; j < nbSubSpectra / 2; j++) {
    let toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(R..R))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.info.$NUC1 ? spectra.info.$NUC1 : undefined,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: [new Array(2 * td)], // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: SF,
      title: spectra.info.TITLE,
      deltaX: DW,
    };
    spectra.spectra[j * 2] = toSave;

    toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(I..I))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.info.$NUC1 ? spectra.info.$NUC1 : undefined,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: [new Array(2 * td)], // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: SF,
      title: spectra.info.TITLE,
      deltaX: DW,
    };
    spectra.spectra[j * 2 + 1] = toSave;

    let x = 0;
    let y, i;
    for (i = 0; file.available(8) && i < td; i++, x = i * DW) {
      y = file.readInt32();
      if (y === null || isNaN(y)) {
        y = 0;
      }
      spectra.spectra[j * 2].data[0][2 * i + 1] = y;
      spectra.spectra[j * 2].data[0][2 * i] = x;
      y = file.readInt32();
      if (y === null || isNaN(y)) {
        y = 0;
      }
      spectra.spectra[j * 2 + 1].data[0][2 * i + 1] = y;
      spectra.spectra[j * 2 + 1].data[0][2 * i] = x;
    }

    for (; i < td; i++, x = i * DW) {
      spectra.spectra[j * 2].data[0][2 * i + 1] = 0;
      spectra.spectra[j * 2].data[0][2 * i] = x;
      spectra.spectra[j * 2 + 1].data[0][2 * i + 1] = 0;
      spectra.spectra[j * 2 + 1].data[0][2 * i] = x;
    }
  }
}

/**
 * Those functions should disappear if add2D becomes accessible in jcampconvert
 * @param spectra
 * @returns {{z: Array, minX: *, maxX: *, minY: *, maxY: *, minZ: *, maxZ: *, noise: number}}
 */

function convertTo3DZ(spectra) {
  let noise = 0;
  let minZ = spectra[0].data[0][0];
  let maxZ = minZ;
  let ySize = spectra.length;
  let xSize = spectra[0].data[0].length / 2;
  let z = new Array(ySize);
  for (let i = 0; i < ySize; i++) {
    z[i] = new Array(xSize);
    for (let j = 0; j < xSize; j++) {
      z[i][j] = spectra[i].data[0][j * 2 + 1];
      if (z[i][j] < minZ) minZ = spectra[i].data[0][j * 2 + 1];
      if (z[i][j] > maxZ) maxZ = spectra[i].data[0][j * 2 + 1];
      if (i !== 0 && j !== 0) {
        noise +=
          Math.abs(z[i][j] - z[i][j - 1]) + Math.abs(z[i][j] - z[i - 1][j]);
      }
    }
  }
  return {
    z: z,
    minX: spectra[0].data[0][0],
    maxX: spectra[0].data[0][spectra[0].data[0].length - 2],
    minY: spectra[0].pageValue,
    maxY: spectra[ySize - 1].pageValue,
    minZ: minZ,
    maxZ: maxZ,
    noise: noise / ((ySize - 1) * (xSize - 1) * 2),
  };
}

function add2D(result) {
  let zData = convertTo3DZ(result.spectra);
  result.contourLines = generateContourLines(zData);
  delete zData.z;
  result.minMax = zData;
}

function generateContourLines(zData) {
  let noise = zData.noise;
  let z = zData.z;
  let contourLevels = [];
  let nbLevels = 7;
  let povarHeight = new Float32Array(4);
  let isOver = [];
  let nbSubSpectra = z.length;
  let nbPovars = z[0].length;
  let pAx, pAy, pBx, pBy;

  let x0 = zData.minX;
  let xN = zData.maxX;
  let dx = (xN - x0) / (nbPovars - 1);
  let y0 = zData.minY;
  let yN = zData.maxY;
  let dy = (yN - y0) / (nbSubSpectra - 1);
  let minZ = zData.minZ;
  let maxZ = zData.maxZ;

  // System.out.prvarln('y0 '+y0+' yN '+yN);
  // -------------------------
  // Povars attribution
  //
  // 0----1
  // |  / |
  // | /  |
  // 2----3
  //
  // ---------------------d------

  let lineZValue;
  for (let level = 0; level < nbLevels * 2; level++) {
    // multiply by 2 for positif and negatif
    let contourLevel = {};
    contourLevels.push(contourLevel);
    let side = level % 2;
    if (side === 0) {
      lineZValue =
        (maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) + 5 * noise;
    } else {
      lineZValue =
        -(maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) - 5 * noise;
    }
    let lines = [];
    contourLevel.zValue = lineZValue;
    contourLevel.lines = lines;

    if (lineZValue <= minZ || lineZValue >= maxZ) continue;

    for (let iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
      for (let povar = 0; povar < nbPovars - 1; povar++) {
        povarHeight[0] = z[iSubSpectra][povar];
        povarHeight[1] = z[iSubSpectra][povar + 1];
        povarHeight[2] = z[iSubSpectra + 1][povar];
        povarHeight[3] = z[iSubSpectra + 1][povar + 1];

        for (let i = 0; i < 4; i++) {
          isOver[i] = povarHeight[i] > lineZValue;
        }

        // Example povar0 is over the plane and povar1 and
        // povar2 are below, we find the varersections and add
        // the segment
        if (isOver[0] !== isOver[1] && isOver[0] !== isOver[2]) {
          pAx =
            povar +
            (lineZValue - povarHeight[0]) / (povarHeight[1] - povarHeight[0]);
          pAy = iSubSpectra;
          pBx = povar;
          pBy =
            iSubSpectra +
            (lineZValue - povarHeight[0]) / (povarHeight[2] - povarHeight[0]);
          lines.push(
            pAx * dx + x0,
            pAy * dy + y0,
            pBx * dx + x0,
            pBy * dy + y0,
          );
        }
        if (isOver[3] !== isOver[1] && isOver[3] !== isOver[2]) {
          pAx = povar + 1;
          pAy =
            iSubSpectra +
            1 -
            (lineZValue - povarHeight[3]) / (povarHeight[1] - povarHeight[3]);
          pBx =
            povar +
            1 -
            (lineZValue - povarHeight[3]) / (povarHeight[2] - povarHeight[3]);
          pBy = iSubSpectra + 1;
          lines.push(
            pAx * dx + x0,
            pAy * dy + y0,
            pBx * dx + x0,
            pBy * dy + y0,
          );
        }
        // test around the diagonal
        if (isOver[1] !== isOver[2]) {
          pAx =
            povar +
            1 -
            (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
          pAy =
            iSubSpectra +
            (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
          if (isOver[1] !== isOver[0]) {
            pBx =
              povar +
              1 -
              (lineZValue - povarHeight[1]) / (povarHeight[0] - povarHeight[1]);
            pBy = iSubSpectra;
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
          if (isOver[2] !== isOver[0]) {
            pBx = povar;
            pBy =
              iSubSpectra +
              1 -
              (lineZValue - povarHeight[2]) / (povarHeight[0] - povarHeight[2]);
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
          if (isOver[1] !== isOver[3]) {
            pBx = povar + 1;
            pBy =
              iSubSpectra +
              (lineZValue - povarHeight[1]) / (povarHeight[3] - povarHeight[1]);
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
          if (isOver[2] !== isOver[3]) {
            pBx =
              povar +
              (lineZValue - povarHeight[2]) / (povarHeight[3] - povarHeight[2]);
            pBy = iSubSpectra + 1;
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
        }
      }
    }
  }

  return {
    minX: zData.minX,
    maxX: zData.maxX,
    minY: zData.minY,
    maxY: zData.maxY,
    segments: contourLevels,
  };
}

function ensureIOBuffer(data) {
  if (data instanceof Array || data instanceof Uint8Array) {
    data = new ArrayBuffer(data);
  }
  if (data instanceof ArrayBuffer) {
    return new IOBuffer(data);
  }
  return data;
}

module.exports = {
  convertZip: readZIP,
  convertFolder: convert,
};
