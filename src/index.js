import { IOBuffer } from 'iobuffer';
import { convert as convertJcamp } from 'jcampconverter';
import JSZip from 'jszip/dist/jszip';

import convertTo3DZ from './convertTo3DZ';
import generateContourLines from './generateContourLines';

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
        let acqu2s = zip.file(name.replace(/pdata\/[0-9]+\//, 'acqu2s'));
        if (acqu2s) {
          promises.push('acqu2s');
          promises.push(acqu2s.async('string'));
        }
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
  //normalizing info
  result.meta.DATE = parseFloat(result.meta.DATE);
  if (result.meta.GRPDLY) {
    result.meta.GRPDLY = parseFloat(result.meta.GRPDLY);
    result.meta.DSPFVS = parseFloat(result.meta.DSPFVS);
    result.meta.DECIM = parseFloat(result.meta.DECIM);
  }

  for (let key in result.meta) {
    if (!Array.isArray(result.meta[key])) continue;
    if (result.meta[key].length === 1) {
      result.meta[key] = result.meta[key][0];
    } else if (
      typeof result.meta[key][0] === 'string' &&
      result.meta[key][0].indexOf('(0..') > -1
    ) {
      result.meta[key] = result.meta[key][0];
    }
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
  if (!Object.keys(result).length) result = temp;

  for (let key in result.meta) {
    result.meta[key] = [result.meta[key]];
  }

  for (let currKey in temp.meta) {
    if (result.meta[currKey] === undefined) {
      result.meta[currKey] = [temp.meta[currKey]];
    }
  }

  if (files['1r'] || files['1i']) {
    if (files['1r']) {
      setXYSpectrumData(files['1r'], result, true);
    }
    if (files['1i']) {
      setXYSpectrumData(files['1i'], result, false);
    }
  } else if (files.fid) {
    setFIDSpectrumData(files.fid, result);
  }

  return result;
}

function convert2D(files, options) {
  let temp, temp2, result;
  if (files.proc2s && files.procs) {
    result = parseData(files.procs, options);
    temp = parseData(files.proc2s, options);
    result = mergeMetadata(result, temp);
  }

  temp = parseData(files.acqus, options);
  temp2 = parseData(files.acqu2s, options);

  temp = mergeMetadata(temp, temp2);

  if (!result) result = temp;
  for (let key in temp.meta) {
    if (result.meta[key] === undefined) {
      result.meta[key] = temp.meta[key];
    }
  }

  for (let key in result.meta) {
    if (!Array.isArray(result.meta[key])) {
      result.meta[key] = [result.meta[key]];
    }
  }

  result.meta.nbSubSpectra = files['2rr']
    ? parseInt(result.meta.SI[1], 10)
    : parseInt(result.meta.TD[1], 10);

  // eslint-disable-next-line camelcase
  if (!result.meta.SW_p) result.meta.SW_p = result.meta.SW_h;
  if (!result.meta.SF) result.meta.SF = result.meta.SFO1;

  let firstY, lastY, xOffset, yOffset;
  if (files['2rr']) {
    let sf = parseFloat(result.meta.SF[1]);
    let swP = parseFloat(result.meta.SW_p[1] || result.meta.SW[1]);
    yOffset = parseFloat(result.meta.OFFSET[1]);
    xOffset = parseFloat(result.meta.OFFSET[0]);
    firstY = yOffset;
    lastY = yOffset - swP / sf;
    result.meta.firstY = firstY;
    result.meta.lastY = lastY;
    setXYSpectrumData(files['2rr'], result, true);
  } else if (files.ser) {
    firstY = 0;
    lastY = result.meta.nbSubSpectra;
    let xWindowSize = parseFloat(result.meta.SW[0]);
    let yWindowSize = parseFloat(result.meta.SW[1]);
    let xTransmitterFrequency = parseFloat(result.meta.SFO1[0]);
    let yTransmitterFrequency = parseFloat(result.meta.SFO1[1]);
    let xTransmitterFrequencyOffset = parseFloat(result.meta.O1[0]);
    let yTransmitterFrequencyOffset = parseFloat(result.meta.O1[1]);
    xOffset =
      xTransmitterFrequencyOffset / xTransmitterFrequency + xWindowSize / 2;
    yOffset =
      yTransmitterFrequencyOffset / yTransmitterFrequency + yWindowSize / 2;
    setFIDSpectrumData(files.ser, result);
  }

  let pageValue = firstY;
  let nbSubSpectra = result.meta.nbSubSpectra;
  let deltaY = (lastY - firstY) / (nbSubSpectra - 1);
  for (let i = 0; i < nbSubSpectra; i++) {
    pageValue += deltaY;
    result.spectra[i].pageValue = pageValue;
  }
  let { NUC1: nuc1, AXNUC: axnuc, SF: sf } = result.meta;
  const nucleus = axnuc ? axnuc : nuc1 ? nuc1 : [];
  result.info['2D_Y_NUCLEUS'] = nucleus[1];
  result.info['2D_X_NUCLEUS'] = nucleus[0];
  result.info['2D_Y_FRECUENCY'] = sf[1];
  result.info['2D_X_FRECUENCY'] = sf[0];
  result.info['2D_Y_OFFSET'] = yOffset;
  result.info['2D_X_OFFSET'] = xOffset;
  result.info.twoD = result.twoD = true;

  return result;
}

function setXYSpectrumData(file, spectra, real) {
  file = ensureIOBuffer(file);
  let td = parseInt(spectra.meta.SI, 10);
  let swP = parseFloat(spectra.meta.SW_p);
  let sf = parseFloat(spectra.meta.SF);
  let bf = sf;
  let offset = spectra.shiftOffsetVal || parseFloat(spectra.meta.OFFSET);

  spectra.meta.observeFrequency = sf;
  spectra.meta.brukerReference = bf;
  spectra.meta.DATATYPE = 'NMR Spectrum';

  let endian = parseInt(spectra.meta.BYTORDP, 10);
  endian = endian ? 0 : 1;

  let nbSubSpectra = spectra.meta.nbSubSpectra ? spectra.meta.nbSubSpectra : 1;

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
      data: new Array(td * 2),
      isXYdata: true,
      observeFrequency: sf,
      title: spectra.meta.TITLE,
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
      for (let k = 0; k < td; ++k) {
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
  let td = parseInt(spectra.meta.TD[0], 10);
  let SW_H = parseFloat(spectra.meta.SW_h[0]);

  let SF = parseFloat(spectra.meta.SFO1[0]);

  spectra.meta.DATATYPE = 'NMR FID';

  let DW = 1 / (2 * SW_H);
  let AQ = td * DW;

  let endian = parseInt(spectra.meta.BYTORDA, 10);
  endian = endian ? 0 : 1;

  if (endian) {
    file.setLittleEndian();
  } else {
    file.setBigEndian();
  }

  let nbSubSpectra = spectra.meta.nbSubSpectra ? spectra.meta.nbSubSpectra : 1;
  spectra.spectra = new Array(nbSubSpectra);

  for (let j = 0; j < nbSubSpectra / 2; j++) {
    let toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(R..R))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.meta.NUC1,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: [new Array(2 * td)], // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: SF,
      title: spectra.meta.TITLE,
      deltaX: DW,
    };
    spectra.spectra[j * 2] = toSave;

    toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(I..I))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.meta.NUC1,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: new Array(2 * td),
      isXYdata: true,
      directFrequency: SF,
      title: spectra.meta.TITLE,
      deltaX: DW,
    };
    spectra.spectra[j * 2 + 1] = toSave;

    let i = 0;
    let x = 0;
    for (; file.available(8) && i < td; i++, x = i * DW) {
      let y = file.readInt32();
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

function mergeMetadata(main, complement) {
  for (let key in complement.meta) {
    if (main.meta[key]) {
      if (!Array.isArray(main.meta[key])) {
        main.meta[key] = [main.meta[key]];
      }
      main.meta[key].push(complement.meta[key]);
    } else if (main.meta[key] === undefined) {
      main.meta[key] = [complement.meta[key]];
    }
  }
  return main;
}
