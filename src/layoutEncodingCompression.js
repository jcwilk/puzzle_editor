const mask = "0100101000000000100101010100101000000000100101010100101000000000100101010100101000000000100101010100101000000000100101010100101000000000100101010100101000000000100101010100101000000000100101010100101000000000100101010100101000000000100101010100101100000011100101110100111100001111100111110111111101111111";

export const COMPRESSED_LENGTH = mask.split("0").length - 1;

export function collapseEncoding(fullEncoding) {
  let collapsedEncoding = "";
  for (let i = 0; i < 304; i++) {
    if (mask.charAt(i) == '0') {
      collapsedEncoding += fullEncoding.charAt(i);
    }
  }
  return collapsedEncoding;
}

export function expandEncoding(collapsedEncoding) {
  let expandedEncoding = "";
  let padCount = 0;
  for (let i = 0; i < 304; i++) {
    if (mask.charAt(i) == '0') {
      expandedEncoding += collapsedEncoding.charAt(i- padCount);
    } else {
      expandedEncoding += "0";
      padCount ++;
    }
  }
  return expandedEncoding;
}
