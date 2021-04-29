import { add2D } from './util/add2D';
import { convert1D } from './util/convert1D';
import { convert2D } from './util/convert2D';

/**
 * Extract information and data from bruker files.
 * @param {object} brukerFiles - Needed bruker files to parse raw data.
 * @param {object} [options = {}] - options.
 * @param {boolean} [options.xy] - if true, spectra data is a object with x and y
 * @param {RegExp} [options.keepRecordsRegExp='\/.*\/'] - regular expresion to parse the metadata of the spectrum.
 * @param {boolean} [options.noContours=false] - if true the contour data is not generated.
 * @returns
 */

export function convertFolder(brukerFiles, options = {}) {
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
    if (!Array.isArray(result.meta[key])) {
      continue;
    }
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
    //the spectraData should not be a oneD Array but an object with x and y
    if (spectra.length > 0) {
      for (let i = 0; i < spectra.length; i++) {
        let spectrum = spectra[i];
        if (spectrum.data.length) {
          let data = spectrum.data;
          let newData = {
            x: new Float64Array(data.length / 2),
            y: new Float64Array(data.length / 2),
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
  const { file } = brukerFiles;
  if (file) {
    result.source = { file };
  }

  return result;
}
