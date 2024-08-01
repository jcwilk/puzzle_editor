import { test, expect } from 'vitest';
import { compressedEncodingToBitstring, bitstringToCompressedEncoding } from '../layoutEncoding';

it('converts a line down the middle to and from compressed encoding', () => {
  const staightLineBits = ["00000000","00100000","00000000"].join("").repeat(12)+"0".repeat(8 * 2);

  const compressedEncoding = bitstringToCompressedEncoding(staightLineBits);
  expect(compressedEncoding).toBe('040010008002000g0040010008002000g008020');

  const returnedBitstring = compressedEncodingToBitstring(compressedEncoding);
  expect(returnedBitstring).toBe(staightLineBits);
});
