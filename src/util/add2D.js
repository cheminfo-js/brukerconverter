import convertTo3DZ from './convertTo3DZ';
import generateContourLines from './generateContourLines';

export function add2D(result, options) {
  let zData = convertTo3DZ(result.spectra);
  if (!options.noContours) {
    result.contourLines = generateContourLines(zData);
  }
  result.minMax = zData;
}
