import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const { createRepresentation, createChecksum, representationAsString } = setup(input);
  const representation = createRepresentation();

  for (
    let representationIndex = representation.length - 1;
    representationIndex >= 0 && representation.indexOf(null) < representationIndex;
    representationIndex -= 1
  ) {
    if (representation[representationIndex] === null) {
      continue;
    }

    const firstFreeSpace = representation.indexOf(null);

    if (firstFreeSpace !== -1 && firstFreeSpace < representationIndex) {
      [representation[firstFreeSpace], representation[representationIndex]] = [
        representation[representationIndex],
        representation[firstFreeSpace],
      ];
    } else {
      break;
    }
  }

  printDebug(`moved all files into the front as far as possible: \n${representationAsString(representation)}`);

  return createChecksum(representation);
});
