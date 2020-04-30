import { IOBuffer } from 'iobuffer';
import { convert as convertJcamp } from 'jcampconverter';
import JSZip from 'jszip/dist/jszip';
import generateContourLines from './generateContourLines';
import convertTo3DZ from './convertTo3DZ';

const BINARY = 1;
const TEXT = 2;

export function convertZip(zipFile, options = {}) {
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
    let folders = zip.filter(function (relativePath) {
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
      let currFiles = currFolder.filter(function (relativePath) {
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
        return {
          filename: result[0],
          value: convertFolder(brukerFiles, options),
        };
      });
    }
    return Promise.all(spectra);
  });
}

export function convertFolder(brukerFiles, options) {
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
  if (result.twoD) {
    add2D(result, options);
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

  if (options.xy && !!spectra) {
    //the spectraData should not be a oneD array but an object with x and y
    if (spectra.length > 0) {
      for (let i = 0; i < spectra.length; i++) {
        let spectrum = spectra[i];
        if (spectrum.data.length) {
          let data = spectrum.data;
          let newData = {
            x: new Array(data.length / 2),
            y: new Array(data.length / 2),
          };
          for (let k = 0; k < data.length; k = k + 2) {
            newData.x[k / 2] = data[k];
            newData.y[k / 2] = data[k + 1];
          }
          spectrum.data = newData;
        }
      }
    }
  }

  return result;
}

function convert1D(files, options) {
  let result = parseData(files.procs || '', options);
  let temp = parseData(files.acqus || '', options);
  let keys = Object.keys(temp.info || {});
  if (!result.info) result = temp;
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
  spectra.info.DATATYPE = 'NMR Spectrum';

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
      data: new Array(td * 2), // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: sf,
      title: spectra.info.TITLE,
      deltaX: -(swP / sf) / (td - 1),
    };

    let x = offset;
    let deltaX = toSave.deltaX;

    if (real) {
      for (let k = 0; k < td; ++k) {
        toSave.data[2 * k] = x;
        toSave.data[2 * k + 1] = file.readInt32();
        if (toSave.data[2 * k + 1] === null || isNaN(toSave.data[2 * k + 1])) {
          toSave.data[2 * k + 1] = 0;
        }
        x += deltaX;
      }
    } else {
      for (let k = td - 1; k >= 0; --k) {
        toSave.data[2 * k] = x;
        toSave.data[2 * k + 1] = file.readInt32();
        if (toSave.data[2 * k + 1] === null || isNaN(toSave.data[2 * k + 1])) {
          toSave.data[2 * k + 1] = 0;
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
  let result = convertJcamp(file, {
    keepRecordsRegExp: keepRecordsRegExp,
  });

  return result.flatten.length === 0 ? {} : result.flatten[0];
}

function setFIDSpectrumData(file, spectra) {
  file = ensureIOBuffer(file);
  let td = (spectra.info.$TD = parseInt(spectra.info.$TD, 10));

  let SW_H = (spectra.info.$SWH = parseFloat(spectra.info.$SWH));

  let SF = (spectra.info.$SFO1 = parseFloat(spectra.info.$SFO1));
  let BF = parseFloat(spectra.info.$BF1);
  spectra.info.$BF1 = BF;
  spectra.info.DATATYPE = 'NMR FID';

  let DW = 1 / (2 * SW_H);
  let AQ = td * DW;

  let endian = parseInt(spectra.info.$BYTORDA, 10);
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
      data: new Array(2 * td), // [{x:new Array(td),y:new Array(td)}],
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
      spectra.spectra[j * 2].data[2 * i + 1] = y;
      spectra.spectra[j * 2].data[2 * i] = x;
      y = file.readInt32();
      if (y === null || isNaN(y)) {
        y = 0;
      }
      spectra.spectra[j * 2 + 1].data[2 * i + 1] = y;
      spectra.spectra[j * 2 + 1].data[2 * i] = x;
    }

    for (; i < td; i++, x = i * DW) {
      spectra.spectra[j * 2].data[2 * i + 1] = 0;
      spectra.spectra[j * 2].data[2 * i] = x;
      spectra.spectra[j * 2 + 1].data[2 * i + 1] = 0;
      spectra.spectra[j * 2 + 1].data[2 * i] = x;
    }
  }
}

function add2D(result, options) {
  let zData = convertTo3DZ(result.spectra);
  if (!options.noContours) {
    result.contourLines = generateContourLines(zData);
  }
  result.minMax = zData;
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
