import { mergeMetadata } from './mergeMetadata';
import { parseData } from './parseData';
import { setFIDSpectrumData } from './setFIDSpectrumData';
import { setXYSpectrumData } from './setXYSpectrumData';

export function convert2D(files, options) {
  let temp, temp2, result;
  if (files.proc2s && files.procs) {
    result = parseData(files.procs, options);
    temp = parseData(files.proc2s, options);
    result = mergeMetadata(result, temp);
  }

  temp = parseData(files.acqus, options);
  temp2 = parseData(files.acqu2s, options);

  temp = mergeMetadata(temp, temp2);

  if (!result) {
    result = temp;
  }
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

  if (!result.meta.SW_p) {
    // eslint-disable-next-line camelcase
    result.meta.SW_p = result.meta.SW_h;
  }
  if (!result.meta.SF) {
    result.meta.SF = result.meta.SFO1;
  }

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
