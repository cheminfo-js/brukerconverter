import { ensureIOBuffer } from './ensureIOBuffer';

export function setFIDSpectrumData(file, spectra) {
  file = ensureIOBuffer(file);
  let td = parseInt(spectra.meta.TD[0], 10);
  let SW_H = parseFloat(spectra.meta.SW_h[0]);

  let SF = parseFloat(spectra.meta.SFO1[0]);

  spectra.meta.DATATYPE = 'NMR FID';

  let DW = 1 / (2 * SW_H);
  let AQ = td * DW;

  let endian = parseInt(spectra.meta.BYTORDA, 10);
  endian = endian ? 0 : 1;

  if (endian) {
    file.setLittleEndian();
  } else {
    file.setBigEndian();
  }

  let nbSubSpectra = spectra.meta.nbSubSpectra ? spectra.meta.nbSubSpectra : 1;
  spectra.spectra = new Array(nbSubSpectra);

  for (let j = 0; j < nbSubSpectra / 2; j++) {
    let toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(R..R))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.meta.NUC1,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: [new Float64Array(2 * td)],
      isXYdata: true,
      observeFrequency: SF,
      title: spectra.meta.TITLE,
      deltaX: DW,
    };
    spectra.spectra[j * 2] = toSave;

    toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(I..I))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.meta.NUC1,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: new Float64Array(2 * td),
      isXYdata: true,
      directFrequency: SF,
      title: spectra.meta.TITLE,
      deltaX: DW,
    };
    spectra.spectra[j * 2 + 1] = toSave;

    let i = 0;
    let x = 0;
    for (; file.available(8) && i < td; i++, x = i * DW) {
      let y = file.readInt32();
      if (y === null || isNaN(y)) {
        y = 0;
      }
      spectra.spectra[j * 2].data[2 * i + 1] = y;
      spectra.spectra[j * 2].data[2 * i] = x;
      y = file.readInt32();
      if (y === null || isNaN(y)) {
        y = 0;
      }
      spectra.spectra[j * 2 + 1].data[2 * i + 1] = y;
      spectra.spectra[j * 2 + 1].data[2 * i] = x;
    }

    for (; i < td; i++, x = i * DW) {
      spectra.spectra[j * 2].data[2 * i + 1] = 0;
      spectra.spectra[j * 2].data[2 * i] = x;
      spectra.spectra[j * 2 + 1].data[2 * i + 1] = 0;
      spectra.spectra[j * 2 + 1].data[2 * i] = x;
    }
  }
}
