import { convert as convertJcamp } from 'jcampconverter';

export function parseData(file, options) {
  let keepRecordsRegExp = /.*/;
  if (options.keepRecordsRegExp) {
    keepRecordsRegExp = options.keepRecordsRegExp;
  }
  let result = convertJcamp(file, {
    keepRecordsRegExp: keepRecordsRegExp,
  });
  return result.flatten.length === 0 ? {} : result.flatten[0];
}
