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
    z[i] = new Float64Array(xSize);
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
  const firstX = spectra[0].data[0];
  const lastX = spectra[0].data[spectra[0].data.length - 2]; // has to be -2 because it is a 1D array [x,y,x,y,...]
  const firstY = spectra[0].pageValue;
  const lastY = spectra[ySize - 1].pageValue;

  // Because the min / max value are the only information about the matrix if we invert
  // min and max we need to invert the array
  if (firstX > lastX) {
    for (let spectrum of z) {
      spectrum.reverse();
    }
  }
  if (firstY > lastY) {
    z.reverse();
  }

  let minMaxX =
    firstX < lastX
      ? { minX: firstX, maxX: lastX }
      : { minX: lastX, maxX: firstX };
  let minMaxY =
    firstY < lastY
      ? { minY: firstY, maxY: lastY }
      : { minY: lastY, maxY: firstY };

  return {
    z,
    minZ: minZ,
    maxZ: maxZ,
    ...minMaxX,
    ...minMaxY,
    noise: noise / ((ySize - 1) * (xSize - 1) * 2),
  };
}
