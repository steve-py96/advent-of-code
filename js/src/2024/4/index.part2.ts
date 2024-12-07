import { defineSolution, printDebug } from '@/utils';
import setup, { MAS, REVERSE_MAS } from './setup';

export default defineSolution((input) => {
  const [rows] = setup(input);
  let sum = 0;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < rows[rowIndex].length; colIndex += 1) {
      const currentCell = rows[rowIndex][colIndex];

      if (currentCell === 'A') {
        printDebug(`found A at ${rowIndex}/${colIndex}, checking for a X-MAS...`);

        const topLeftToBottomRight =
          rows[rowIndex - 1]?.[colIndex - 1] + currentCell + rows[rowIndex + 1]?.[colIndex + 1];
        const topRightToBottomLeft =
          rows[rowIndex - 1]?.[colIndex + 1] + currentCell + rows[rowIndex + 1]?.[colIndex - 1];

        if (
          (topLeftToBottomRight === MAS || topLeftToBottomRight === REVERSE_MAS) &&
          (topRightToBottomLeft === MAS || topRightToBottomLeft == REVERSE_MAS)
        ) {
          sum += 1;

          printDebug(`found X-MAS, updated sum to ${sum}`);
        }
      }
    }
  }

  return sum;
});
