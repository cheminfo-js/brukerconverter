import { parseData } from './parseData';
import { setFIDSpectrumData } from './setFIDSpectrumData';
import { setXYSpectrumData } from './setXYSpectrumData';

export function convert1D(files, options) {
  let result = parseData(files.procs || '', options);
  let temp = parseData(files.acqus || '', options);
  if (!Object.keys(result).length) {
    result = temp;
  }

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
