const fs = require('fs');

const IOBuffer = require('iobuffer');

const convert = require('../src/brukerconverter').convertFolder;
const convertZIP = require('../src/brukerconverter').convertZip;

describe('Convert 1D', function () {
  it('Main test', function () {
    var bruker = {};
    bruker.procs = fs.readFileSync('test/1D/pdata/1/procs', 'utf8');

    bruker['1r'] = new IOBuffer(fs.readFileSync('test/1D/pdata/1/1r'));
    bruker['1i'] = new IOBuffer(fs.readFileSync('test/1D/pdata/1/1i'));
    var result = convert(bruker, { xy: true, keepSpectra: true });
    expect(result.spectra[0].data[0].y.length).toEqual(result.info.$SI);
    expect(result.spectra[1].data[0].y.length).toEqual(result.info.$SI);
    ['JCAMPDX', 'ORIGIN', 'OWNER'].forEach((key) =>
      expect(result.info).toHaveProperty(key)
    );
    expect(result.info.JCAMPDX).toEqual('5.0');
    expect(result.spectra[0].data[0].x.length).toBe(32768);
    expect(result.spectra[0].data[0].x.slice(0, 5)).toEqual([
      16.49938,
      16.498749855575984,
      16.49811971115197,
      16.497489566727953,
      16.496859422303938
    ]);
    expect(result.spectra[0].data[0].y.length).toBe(32768);
    expect(result.spectra[0].data[0].y.slice(0, 5)).toEqual([
      74533,
      134247,
      155042,
      138056,
      129602
    ]);
  });

  it('FID spectra', function () {
    var bruker = {};
    bruker.procs = fs.readFileSync('test/1D/pdata/1/procs', 'utf8');
    bruker.acqus = fs.readFileSync('test/1D/acqus', 'utf8');
    bruker.fid = new IOBuffer(fs.readFileSync('test/1D/fid'));

    var result = convert(bruker, { xy: true, keepSpectra: true });
    expect(result.spectra.length).toEqual(2);
    ['JCAMPDX', 'ORIGIN', 'OWNER'].forEach((key) =>
      expect(result.info).toHaveProperty(key)
    );

    var len = result.spectra[0].nbPoints;
    expect(typeof result.spectra[0].data[0].y[len - 1]).toBe('number');
    expect(typeof result.spectra[1].data[0].y[len - 1]).toBe('number');
    [
      'dataType',
      'dataTable',
      'xUnit',
      'yUnit',
      'data',
      'nbPoints',
      'nucleus',
      'firstX',
      'lastX'
    ].forEach((key) => expect(result.spectra[0]).toHaveProperty(key));
    expect(result.spectra[0].data[0].x.length).toBe(65536);
    expect(result.spectra[0].data[0].x.slice(0, 5)).toEqual([
      0,
      0.000315065458655465,
      0.00063013091731093,
      0.0009451963759663951,
      0.00126026183462186
    ]);
    expect(result.spectra[0].data[0].y.length).toBe(65536);
    expect(result.spectra[0].data[0].y.slice(0, 10)).toEqual([
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      16,
      -32,
      32
    ]);
  });
});

describe('Convert 2D', function () {
  var bruker = {};
  it('Test with 2rr', function () {
    bruker.procs = fs.readFileSync('test/2D/procs', 'utf8');
    bruker.proc2s = fs.readFileSync('test/2D/proc2s', 'utf8');
    bruker.acqus = fs.readFileSync('test/2D/acqus', 'utf8');
    bruker.acqu2s = fs.readFileSync('test/2D/acqu2s', 'utf8');
    bruker.ser = new IOBuffer(fs.readFileSync('test/2D/ser'));
    bruker['2rr'] = new IOBuffer(fs.readFileSync('test/2D/2rr'));

    var result = convert(bruker, { xy: true, keepSpectra: true });
    expect(result.spectra).toHaveLength(result.info.nbSubSpectra);
    expect(result.spectra[1023].data[0].y).toHaveLength(result.info.$SI);
    expect(typeof result.spectra[1023].data[0].y[4]).toBe('number');

    ['JCAMPDX', 'ORIGIN', 'OWNER'].forEach((key) =>
      expect(result.info).toHaveProperty(key)
    );

    [
      'dataType',
      'dataTable',
      'xUnit',
      'yUnit',
      'data',
      'firstX',
      'lastX'
    ].forEach((key) => expect(result.spectra[0]).toHaveProperty(key));
  });
});

describe('Test with zip file', function () {
  it('Set of spectra 1', async function () {
    let zip = fs.readFileSync('test/zip/hrva034.zip');
    let result = await convertZIP(zip, {
      xy: true,
      keepSpectra: true,
      noContours: true
    });
    expect(result).toHaveLength(10);
  });

  it('Set of spectra 2', async function () {
    let zip = fs.readFileSync('test/zip/list.zip');
    let result = await convertZIP(zip, { xy: true, keepSpectra: true });
  });

  it('Single spectrum', async function () {
    var zip = fs.readFileSync('test/zip/single.zip');
    var result = await convertZIP(zip, { xy: true, keepSpectra: true });
    expect(result[0].value.spectra[0].dataType).toBe('NMR FID');
    expect(result[1].value.spectra[0].dataType).toBe('NMR Spectrum');
    expect(result[0].value.spectra).toHaveLength(2);
    expect(result[0].value.info.$SPOFFS.length).toBeGreaterThan(10);
    expect(result[0].value.info.$SPOFFS.length).toBeGreaterThan(10);
  });
});

describe('Test with pseudo SER file', async function () {
  it('N spectra', async function () {
    var zip = fs.readFileSync('test/zip/21-BOMA-new.zip');
    var result = await convertZIP(zip, {
      xy: true,
      keepSpectra: true,
      noContours: true
    });
    expect(result).toHaveLength(2);
    expect(result[0].value.spectra[0].dataType).toBe('NMR FID');
    expect(result[1].value.spectra[0].dataType).toBe('NMR FID');

    expect(result[0].value.spectra).toHaveLength(88);
    expect(result[1].value.spectra).toHaveLength(88);

    expect(result[0].value.spectra[0].firstX).toEqual(0);
    expect(result[0].value.spectra[0].lastX).toEqual(15.0232497409271);

    expect(result[1].value.spectra[0].firstX).toEqual(0);
    expect(result[1].value.spectra[0].lastX).toEqual(15.0232497409271);
  });
});
