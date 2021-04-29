import { IOBuffer } from 'iobuffer';

export function ensureIOBuffer(data) {
  if (data instanceof Array || data instanceof Uint8Array) {
    data = new ArrayBuffer(data);
  }
  if (data instanceof ArrayBuffer) {
    return new IOBuffer(data);
  }
  return data;
}
