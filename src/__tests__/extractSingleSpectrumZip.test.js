import { bruker } from 'bruker-data-test';
import Jszip from 'jszip';

import {
  extractFilePaths,
  extractSingleSpectrumZip,
} from '../util/extractSingleSpectrumZip';

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

describe('extract a single spectrum', () => {
  it('extract a single spectrum from a zip', async () => {
    const jszip = new Jszip();
    const zip = await jszip.loadAsync(bruker['cyclosporin_1h.zip'], {
      base64: true,
    });
    let result = await extractSingleSpectrumZip('cyclosporin_1h/1/fid', {
      zipFiles: zip.files,
    });
    const jszip2 = new Jszip();
    let newZip = await jszip2.loadAsync(result.binary, { base64: true });
    let files = Object.keys(newZip.files);
    expect(files).toStrictEqual([
      'cyclosporin_1h/',
      'cyclosporin_1h/1/',
      'cyclosporin_1h/1/acqu',
      'cyclosporin_1h/1/acqus',
      'cyclosporin_1h/1/audita.txt',
      'cyclosporin_1h/1/cyclosporina.pdb',
      'cyclosporin_1h/1/fid',
      'cyclosporin_1h/1/format.temp',
      'cyclosporin_1h/1/pdata/',
      'cyclosporin_1h/1/pdata/1/',
      'cyclosporin_1h/1/pdata/1/auditp.txt',
      'cyclosporin_1h/1/pdata/1/cmcq',
      'cyclosporin_1h/1/pdata/1/outd',
      'cyclosporin_1h/1/pdata/1/proc',
      'cyclosporin_1h/1/pdata/1/procs',
      'cyclosporin_1h/1/pdata/1/thumb.png',
      'cyclosporin_1h/1/pdata/1/title',
      'cyclosporin_1h/1/pulseprogram',
      'cyclosporin_1h/1/scon2',
      'cyclosporin_1h/1/uxnmr.par',
    ]);
  });
});
