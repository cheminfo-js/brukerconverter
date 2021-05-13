import JSZip from 'jszip';

import { convertFolder } from './convertFolder';
import { extractSingleSpectrumZip } from './util/extractSingleSpectrumZip';

const BINARY = 1;
const TEXT = 2;

/**
 * Load a zip file using jszip and looking for folders contaning bruker files to parse.
 * @param {*} zipFile - binary or base64 file of the bruker zip file.
 * @param {object} [options={}] - options for jszip and convertFolder functions.
 * @param {boolean} [options.keepOriginal=false] - options to keep a smaller zip file per spectrum.
 * @returns {Promise} - Array of spectrum parsed from fid, ser, 2rr, 1r bruker files.
 */
export function convertZip(zipFile, options = {}) {
  const { keepOriginal = false } = options;
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
      if (keepOriginal) {
        promises.push('file');
        promises.push(
          extractSingleSpectrumZip(folders[i].name, { zipFiles: zip.files }),
        );
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
