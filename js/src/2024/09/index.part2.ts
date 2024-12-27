import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const { createRepresentation, createChecksum, representationAsString } = setup(input);
  const representation = createRepresentation();

  for (let currentFileIdIndex = representation.length - 1; currentFileIdIndex >= 0; currentFileIdIndex -= 1) {
    const fileId = representation[currentFileIdIndex];

    if (fileId === null) {
      continue;
    }

    const firstFileIdIndex = representation.indexOf(fileId);
    const amountOfFiles = currentFileIdIndex - firstFileIdIndex + 1;
    const emptySpaceIndex = representation.findIndex(
      (item, itemIndex) =>
        item === null && representation.slice(itemIndex, itemIndex + amountOfFiles).every((subItem) => subItem === null)
    );

    if (emptySpaceIndex !== -1 && emptySpaceIndex < firstFileIdIndex) {
      for (let replaceIndex = 0; replaceIndex < amountOfFiles; replaceIndex += 1) {
        [representation[emptySpaceIndex + replaceIndex], representation[firstFileIdIndex + replaceIndex]] = [
          representation[firstFileIdIndex + replaceIndex],
          representation[emptySpaceIndex + replaceIndex],
        ];
      }
    }

    currentFileIdIndex -= amountOfFiles - 1;
  }

  printDebug(`moved all files into the front as far as possible: \n${representationAsString(representation)}`);

  return createChecksum(representation);
});
