import JSZip from 'jszip';

export function extractFilePaths(pathSpectrum, options = {}) {
  let { zipFiles } = options;

  const expnoCheck = pathSpectrum.replace(
    /([.*\w+/]*)([0-9]+\/)[pdata|fid|ser]\/*.*/,
    '$1$2',
  );

  const procnoCheck = pathSpectrum.match('pdata')
    ? pathSpectrum.replace(/([.*\w+/]*[0-9]+\/pdata\/[0-9]+\/)*.*/, '$1')
    : null;

  let filePaths = [];
  for (let file in zipFiles) {
    if (
      expnoCheck !== file.replace(/([.*/]*)((?<!pdata\/)[0-9]+\/).*/, '$1$2')
    ) {
      continue;
    }

    if (file.match('pdata')) {
      if (!procnoCheck) {
        if (file.match(/[1|2]+[i|r]+[i|r]*/)) continue;
      } else if (
        procnoCheck !==
        file.replace(
          /([.*\w+/]*)(?<!pdata)([0-9]+\/)[pdata|fid|ser]*\/*.*/,
          '$1$2',
        )
      ) {
        continue;
      }
    }
    if (file.endsWith('/')) continue;
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
