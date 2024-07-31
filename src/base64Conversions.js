export function binaryStringToBase64(binaryString) {
  // Convert binary string to byte array
  let byteArray = [];
  for (let i = 0; i < binaryString.length; i += 8) {
      let byte = binaryString.substr(i, 8);
      byteArray.push(parseInt(byte, 2));
  }

  // Create a Uint8Array from the byte array
  let uint8Array = new Uint8Array(byteArray);

  // Convert the Uint8Array to a binary string
  let binaryStringFromBytes = String.fromCharCode(...uint8Array);

  // Encode the binary string to Base64
  return btoa(binaryStringFromBytes);
}

export function base64ToBinaryString(base64String) {
  // Decode Base64 to a binary string
  let binaryString = atob(base64String);

  // Convert binary string to a string of 1s and 0s
  let result = '';
  for (let i = 0; i < binaryString.length; i++) {
      let byte = binaryString.charCodeAt(i);
      let binary = byte.toString(2);
      // Ensure 8-bit representation
      result += binary.padStart(8, '0');
  }

  return result;
}
