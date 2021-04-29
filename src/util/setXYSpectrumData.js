import { ensureIOBuffer } from './ensureIOBuffer';

export function setXYSpectrumData(file, spectra, real) {
  file = ensureIOBuffer(file);
  let td = parseInt(spectra.meta.SI, 10);
  let swP = parseFloat(spectra.meta.SW_p);
  let sf = parseFloat(spectra.meta.SF);
  let bf = sf;
  let offset = spectra.shiftOffsetVal || parseFloat(spectra.meta.OFFSET);

  spectra.meta.observeFrequency = sf;
  spectra.meta.brukerReference = bf;
  spectra.meta.DATATYPE = 'NMR Spectrum';

  let endian = parseInt(spectra.meta.BYTORDP, 10);
  endian = endian ? 0 : 1;

  let nbSubSpectra = spectra.meta.nbSubSpectra ? spectra.meta.nbSubSpectra : 1;

  if (endian) {
    file.setLittleEndian();
  } else {
    file.setBigEndian();
  }
  for (let i = 0; i < nbSubSpectra; i++) {
    let toSave = {
      dataType: 'NMR Spectrum',
      dataTable: '(X++(R..R))',
      nbPoints: td,
      firstX: offset,
      lastX: offset - swP / sf,
      xUnit: 'PPM',
      yUnit: 'Arbitrary',
      data: new Float64Array(td * 2),
      isXYdata: true,
      observeFrequency: sf,
      title: spectra.meta.TITLE,
      deltaX: -(swP / sf) / (td - 1),
    };

    let x = offset;
    let deltaX = toSave.deltaX;

    if (real) {
      for (let k = 0; k < td; ++k) {
        toSave.data[2 * k] = x;
        toSave.data[2 * k + 1] = file.readInt32();
        if (toSave.data[2 * k + 1] === null || isNaN(toSave.data[2 * k + 1])) {
          toSave.data[2 * k + 1] = 0;
        }
        x += deltaX;
      }
    } else {
      for (let k = 0; k < td; ++k) {
        toSave.data[2 * k] = x;
        toSave.data[2 * k + 1] = file.readInt32();
        if (toSave.data[2 * k + 1] === null || isNaN(toSave.data[2 * k + 1])) {
          toSave.data[2 * k + 1] = 0;
        }
        x += deltaX;
      }
    }

    spectra.spectra.push(toSave);
  }
}
