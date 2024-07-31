import { test, expect } from 'vitest';
import { binaryStringToBase64, base64ToBinaryString } from '../base64Conversions.js';

it('correctly converts binary strings to Base64 and back', () => {
    const originalBinaryString = '010000010100001001000011'; // Represents 'ABC' in binary
    const base64String = binaryStringToBase64(originalBinaryString);
    const resultBinaryString = base64ToBinaryString(base64String);

    expect(base64String).toBe('QUJD'); // Expect Base64 of 'ABC'
    expect(resultBinaryString).toBe(originalBinaryString); // Expect binary of 'ABC'
});

it('handles empty binary strings in either direction', () => {
    const originalBinaryString = '';
    const base64String = binaryStringToBase64(originalBinaryString);
    const resultBinaryString = base64ToBinaryString(base64String);

    expect(base64String).toBe(''); // Empty input should result in empty Base64
    expect(resultBinaryString).toBe(originalBinaryString); // Empty Base64 should result in empty binary string
});
