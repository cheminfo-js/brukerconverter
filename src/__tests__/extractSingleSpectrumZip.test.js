import { extractFilePaths } from '../extractSingleSpectrumZip';

const file1 = [
  'cyclosporin_1h/',
  'cyclosporin_1h/1/',
  'cyclosporin_1h/1/acqu',
  'cyclosporin_1h/1/audita.txt',
  'cyclosporin_1h/1/cyclosporina.pdb',
  'cyclosporin_1h/1/fid',
  'cyclosporin_1h/1/format.temp',
  'cyclosporin_1h/1/pdata/',
  'cyclosporin_1h/1/pdata/1/',
  'cyclosporin_1h/1/pdata/1/1i',
  'cyclosporin_1h/1/pdata/1/1r',
  'cyclosporin_1h/1/pdata/1/thumb.png',
  'cyclosporin_1h/1/pdata/1/title',
  'cyclosporin_1h/1/pulseprogram',
  'cyclosporin_1h/1/scon2',
  'cyclosporin_1h/1/uxnmr.par',
];

const file2 = [
  '1/acqu',
  '1/acqus',
  '1/audita.txt',
  '1/fid',
  '1/pdata/',
  '1/pdata/1/',
  '1/pdata/1/curdat2',
  '1/pdata/1/peaklist.xml',
  '1/pdata/1/peakrng',
  '1/pdata/1/proc',
  '1/pdata/1/title',
  '1/pulseprogram',
  '1/scon',
  '1/uxnmr.par',
  '1/',
  '1/pdata/',
  '1/pdata/1/',
  '1/pdata/1/1i',
  '1/pdata/1/1r',
];

describe('extract file paths', () => {
  it('into another folder', () => {
    let zipFiles = {};
    for (let key of file1) {
      zipFiles[key] = null;
    }
    let result1 = extractFilePaths('cyclosporin_1h/1/fid', { zipFiles });
    expect(result1).toStrictEqual([
      'cyclosporin_1h/1/acqu',
      'cyclosporin_1h/1/audita.txt',
      'cyclosporin_1h/1/cyclosporina.pdb',
      'cyclosporin_1h/1/fid',
      'cyclosporin_1h/1/format.temp',
      'cyclosporin_1h/1/pdata/1/thumb.png',
      'cyclosporin_1h/1/pdata/1/title',
      'cyclosporin_1h/1/pulseprogram',
      'cyclosporin_1h/1/scon2',
      'cyclosporin_1h/1/uxnmr.par',
    ]);
    let result2 = extractFilePaths('cyclosporin_1h/1/pdata/1/1r', { zipFiles });
    expect(result2).toStrictEqual([
      'cyclosporin_1h/1/acqu',
      'cyclosporin_1h/1/audita.txt',
      'cyclosporin_1h/1/cyclosporina.pdb',
      'cyclosporin_1h/1/fid',
      'cyclosporin_1h/1/format.temp',
      'cyclosporin_1h/1/pdata/1/1i',
      'cyclosporin_1h/1/pdata/1/1r',
      'cyclosporin_1h/1/pdata/1/thumb.png',
      'cyclosporin_1h/1/pdata/1/title',
      'cyclosporin_1h/1/pulseprogram',
      'cyclosporin_1h/1/scon2',
      'cyclosporin_1h/1/uxnmr.par',
    ]);
  });
  it('directly the expnos folders', () => {
    let zipFiles = {};
    for (let key of file2) {
      zipFiles[key] = null;
    }
    let result1 = extractFilePaths('1/fid', { zipFiles });
    expect(result1).toStrictEqual([
      '1/acqu',
      '1/acqus',
      '1/audita.txt',
      '1/fid',
      '1/pdata/1/curdat2',
      '1/pdata/1/peaklist.xml',
      '1/pdata/1/peakrng',
      '1/pdata/1/proc',
      '1/pdata/1/title',
      '1/pulseprogram',
      '1/scon',
      '1/uxnmr.par',
    ]);
    let result2 = extractFilePaths('1/pdata/1/1r', { zipFiles });
    expect(result2).toStrictEqual([
      '1/acqu',
      '1/acqus',
      '1/audita.txt',
      '1/fid',
      '1/pdata/1/curdat2',
      '1/pdata/1/peaklist.xml',
      '1/pdata/1/peakrng',
      '1/pdata/1/proc',
      '1/pdata/1/title',
      '1/pulseprogram',
      '1/scon',
      '1/uxnmr.par',
      '1/pdata/1/1i',
      '1/pdata/1/1r',
    ]);
  });
});
