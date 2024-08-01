import { COMPRESSED_LENGTH } from "./layoutEncodingCompression";

const customBase32Chars = "0123456789abcdefghijklmnopqrstuv";
const BITS_PER_CHAR = 5;
const BITSTRING_LENGTH = COMPRESSED_LENGTH; //194 at time of writing
const BASE32_LENGTH = Math.ceil(BITSTRING_LENGTH / BITS_PER_CHAR);

function padBitstring(bitstring, length) {
  return bitstring.padEnd(length, "0");
}

function truncateBitstring(bitstring) {
  return bitstring.slice(0, BITSTRING_LENGTH);
}

export function bitstringToBase32(bitstring) {
  // Enforce bitstring length of exactly 304 bits
  if (bitstring.length !== BITSTRING_LENGTH) {
    throw new Error(`Bitstring must be exactly ${BITSTRING_LENGTH} bits long but it was ${bitstring.length}.`);
  }

  // Pad the bitstring so its length is a multiple of 5
  const paddedBitstring = padBitstring(
    bitstring,
    Math.ceil(bitstring.length / BITS_PER_CHAR) * BITS_PER_CHAR,
  );

  let base32String = "";
  for (let i = 0; i < paddedBitstring.length; i += BITS_PER_CHAR) {
    const fiveBitChunk = paddedBitstring.substr(i, BITS_PER_CHAR);
    const decimalValue = parseInt(fiveBitChunk, 2);
    base32String += customBase32Chars[decimalValue];
  }

  // Enforce Base32 string length
  if (base32String.length !== BASE32_LENGTH) {
    throw new Error(
      `Base32 string must be exactly ${BASE32_LENGTH} characters long but it was ${base32String.length}.`,
    );
  }

  return base32String;
}

export function base32ToBitstring(base32String) {
  // Enforce Base32 string length of exactly BASE32_LENGTH characters
  if (base32String.length !== BASE32_LENGTH) {
    throw new Error(
      `Base32 string must be exactly ${BASE32_LENGTH} characters long but it was ${base32String.length}.`,
    );
  }

  let bitstring = "";
  for (const char of base32String) {
    const index = customBase32Chars.indexOf(char);
    const fiveBitBinary = index.toString(2).padStart(BITS_PER_CHAR, "0");
    bitstring += fiveBitBinary;
  }

  // Truncate the bitstring to the first 304 bits
  return truncateBitstring(bitstring);
}
