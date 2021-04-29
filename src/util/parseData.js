import { convert as convertJcamp } from 'jcampconverter';

export function parseData(file, options) {
  let { keepRecordsRegExp = /.*/ } = options;
  let result = convertJcamp(file, {
    keepRecordsRegExp: keepRecordsRegExp,
  });
  return result.flatten.length === 0 ? {} : result.flatten[0];
}
