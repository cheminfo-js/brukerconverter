import { bruker } from 'bruker-data-test';

import { convertZip } from '../index';

describe('Test with zip file', function () {
  it('cyclospirin proton spectrum', async function () {
    let result = await convertZip(bruker['cyclosporin_1h.zip'], {
      xy: true,
      keepSpectra: true,
      base64: true,
    });
    const { meta, spectra } = result[0].value;
    expect(result).toHaveLength(2);
    expect(spectra[0].lastX).toBeCloseTo(5.9637761, 3);
    expect(meta.PULPROG).toBe('<zg30>');
  });

  it('cyclosporin hmbc', async () => {
    let result = await convertZip(bruker['cyclosporin_hmbc.zip'], {
      xy: true,
      keepSpectra: true,
      noContours: true,
      base64: true,
    });
    let minMaxSer = result[1].value.minMax;
    let metadataSer = result[1].value.meta;
    expect(result).toHaveLength(2);
    expect(metadataSer.TD[0]).toBe(4096);
    expect(metadataSer.TD[1]).toBe(128);
    expect(minMaxSer.z).toHaveLength(128);
    expect(minMaxSer.z[0]).toHaveLength(4096);

    let minMaxFt = result[0].value.minMax;
    let metadataFt = result[0].value.meta;
    expect(metadataFt.SI[0]).toBe(1024);
    expect(metadataFt.SI[1]).toBe(1024);
    expect(minMaxFt.z).toHaveLength(1024);
    expect(minMaxFt.z[0]).toHaveLength(1024);
  });
});
