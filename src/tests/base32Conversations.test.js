import { test, expect } from 'vitest';
import { bitstringToBase32, base32ToBitstring } from '../base32Conversions.js';

test('correctly converts 194-bit binary strings to base32 and back', () => {
    const originalBitstring = '010000010100001001000011'.padEnd(194, '0'); // Represents 'ABC' in binary, padded to 304 bits
    const base32String = bitstringToBase32(originalBitstring);
    const resultBitstring = base32ToBitstring(base32String);

    // Expected base32 representation for the padded 304-bit 'ABC'
    expect(base32String).toBe('851460000000000000000000000000000000000');
    expect(resultBitstring).toBe(originalBitstring); // Should return the original 304-bit binary string
});

test('throws an error when bitstring is not 194 bits long', () => {
    const invalidBitstring = '010000010100001001000011'; // Less than 304 bits

    expect(() => bitstringToBase32(invalidBitstring)).toThrowError('Bitstring must be exactly 194 bits long but it was 24.');
});

test('throws an error when base32 string is not the correct length', () => {
    const invalidBase32String = '85146'; // Less than the expected Base32 length for a 304-bit string

    expect(() => base32ToBitstring(invalidBase32String)).toThrowError('Base32 string must be exactly 39 characters long but it was 5.');
});

test('correctly handles a full 194-bit string', () => {
    const fullBitstring = '1'.repeat(194); // A bitstring of 304 bits all set to '1'
    const base32String = bitstringToBase32(fullBitstring);
    expect(base32String).toBe('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvu'); // Expected Base32 for all '1' bits

    const resultBitstring = base32ToBitstring(base32String);

    expect(resultBitstring).toBe(fullBitstring); // Should return the original 304-bit binary string
});

test('correctly truncates bitstring to 194 bits when converting from base32', () => {
    const originalBitstring = '1'.repeat(195); // A bitstring of 305 bits
    const truncatedBitstring = originalBitstring.slice(0, 194);
    const base32String = bitstringToBase32(truncatedBitstring);
    const resultBitstring = base32ToBitstring(base32String);

    expect(resultBitstring).toBe(truncatedBitstring); // Should match the truncated 304-bit bitstring
});
