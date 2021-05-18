import JSZip from 'jszip';

export function extractFilePaths(pathSpectrum, options = {}) {
  let { zipFiles } = options;

  const expnoCheck = pathSpectrum.replace(
    /([.*\w+/]*)([0-9]+\/)[pdata|fid|ser]\/*.*/,
    '$1$2',
  );

  const procnoCheck = pathSpectrum.match('pdata')
    ? pathSpectrum.replace(/([.*\w+/]*[0-9]+\/pdata\/[0-9]+\/)*.*/, '$1')
    : false;
  let filePaths = [];
  for (let file in zipFiles) {
    if (file.endsWith('/')) continue;
    let parts = file.split('/');
    let expno =
      parts.indexOf('pdata') > 0
        ? file.slice(0, file.indexOf('pdata'))
        : parts[parts.length - 2].match(/^[0-9]+$/)
        ? file.slice(0, file.lastIndexOf('/') + 1)
        : null;

    if (expnoCheck !== expno) continue;

    if (file.match('pdata')) {
      let procno = file.slice(0, file.lastIndexOf('/') + 1);
      if (!procnoCheck) {
        if (file.match(/[1|2]+[i|r]+[i|r]*/)) continue;
      } else if (procnoCheck !== procno) {
        continue;
      }
    }

    filePaths.push(file);
  }
  return filePaths;
}

export async function extractSingleSpectrumZip(pathSpectrum, options = {}) {
  let { zipFiles } = options;

  const filePaths = extractFilePaths(pathSpectrum, { zipFiles });
  let zipFolder = new JSZip();
  for (let file of filePaths) {
    zipFolder.file(file, await zipFiles[file].async('arraybuffer'));
  }

  return {
    extension: 'zip',
    name: pathSpectrum,
    binary: await zipFolder.generateAsync({
      type: 'uint8array',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 },
    }),
  };
}
