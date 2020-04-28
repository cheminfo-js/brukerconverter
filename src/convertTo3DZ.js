/**
 * Those functions should disappear if add2D becomes accessible in jcampconvert
 * @param spectra
 * @returns {{z: Array, minX: *, maxX: *, minY: *, maxY: *, minZ: *, maxZ: *, noise: number}}
 */

export default function convertTo3DZ(spectra) {
  let noise = 0;
  let minZ = spectra[0].data[0];
  let maxZ = minZ;
  let ySize = spectra.length;
  let xSize = spectra[0].data.length / 2;
  let z = new Array(ySize);
  for (let i = 0; i < ySize; i++) {
    z[i] = new Array(xSize);
    for (let j = 0; j < xSize; j++) {
      z[i][j] = spectra[i].data[j * 2 + 1];
      if (z[i][j] < minZ) minZ = spectra[i].data[j * 2 + 1];
      if (z[i][j] > maxZ) maxZ = spectra[i].data[j * 2 + 1];
      if (i !== 0 && j !== 0) {
        noise +=
          Math.abs(z[i][j] - z[i][j - 1]) + Math.abs(z[i][j] - z[i - 1][j]);
      }
    }
  }
  return {
    z: z,
    minX: spectra[0].data[0],
    maxX: spectra[0].data[spectra[0].data.length - 2],
    minY: spectra[0].pageValue,
    maxY: spectra[ySize - 1].pageValue,
    minZ: minZ,
    maxZ: maxZ,
    noise: noise / ((ySize - 1) * (xSize - 1) * 2),
  };
}
