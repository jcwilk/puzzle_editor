import { bitstringToBase32, base32ToBitstring } from './base32Conversions.js';
import { collapseEncoding, expandEncoding } from './layoutEncodingCompression.js';

export function compressedEncodingToBitstring(compressedEncoding) {
  return expandEncoding(base32ToBitstring(compressedEncoding));
}

export function bitstringToCompressedEncoding(bitstring) {
  return bitstringToBase32(collapseEncoding(bitstring));
}
