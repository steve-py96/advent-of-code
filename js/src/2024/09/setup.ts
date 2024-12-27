import { defineSetup, printDebug } from '@/utils';

export default defineSetup((input) => {
  const chars = input.split('');

  const representationAsString = (representation: Array<number | null>) =>
    representation.map((item) => item ?? '.').join('');

  const createRepresentation = () => {
    const representation: Array<number | null> = [];

    for (let charIndex = 0, fileId = 0; charIndex < chars.length; charIndex += 1) {
      const number = +chars[charIndex];

      if (charIndex % 2 === 0) {
        // file
        const files = Array.from(Array(number), () => fileId);

        representation.push(...files);
        fileId += 1;
      } else {
        // free space
        const freeSpace = Array.from(Array(number), () => null);

        representation.push(...freeSpace);
      }
    }

    printDebug(`created representation of input: \n${representationAsString(representation)}`);

    return representation;
  };

  const createChecksum = (representation: Array<number | null>) => {
    let checksum = 0;

    for (let numberIndex = 0; numberIndex < representation.length; numberIndex += 1) {
      const value = representation[numberIndex];

      if (value !== null) {
        checksum += value * numberIndex;
      }
    }

    return checksum;
  };

  return {
    createRepresentation,
    createChecksum,
    representationAsString,
  };
});
