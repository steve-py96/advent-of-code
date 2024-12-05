import { defineSolution, printDebug } from '@/utils';

const MAS = 'MAS';
const REVERSE_MAS = 'SAM';

export default defineSolution((input, part) => {
  const rows = input.split('\n');
  let sum = 0;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < rows[rowIndex].length; colIndex += 1) {
      const currentCell = rows[rowIndex][colIndex];

      if (currentCell === 'X' && part !== '2') {
        printDebug(`found X at ${rowIndex}/${colIndex}, looking for XMAS in all directions...`);
        let oldSum = sum;

        // top
        if (rows[rowIndex - 1]?.[colIndex] + rows[rowIndex - 2]?.[colIndex] + rows[rowIndex - 3]?.[colIndex] === MAS) {
          sum += 1;
        }

        // right
        if (rows[rowIndex]?.[colIndex - 1] + rows[rowIndex]?.[colIndex - 2] + rows[rowIndex]?.[colIndex - 3] === MAS) {
          sum += 1;
        }

        // bottom
        if (rows[rowIndex + 1]?.[colIndex] + rows[rowIndex + 2]?.[colIndex] + rows[rowIndex + 3]?.[colIndex] === MAS) {
          sum += 1;
        }

        // left
        if (rows[rowIndex]?.[colIndex + 1] + rows[rowIndex]?.[colIndex + 2] + rows[rowIndex]?.[colIndex + 3] === MAS) {
          sum += 1;
        }

        // top-right
        if (
          rows[rowIndex - 1]?.[colIndex + 1] +
            rows[rowIndex - 2]?.[colIndex + 2] +
            rows[rowIndex - 3]?.[colIndex + 3] ===
          MAS
        ) {
          sum += 1;
        }

        // bottom-right
        if (
          rows[rowIndex + 1]?.[colIndex + 1] +
            rows[rowIndex + 2]?.[colIndex + 2] +
            rows[rowIndex + 3]?.[colIndex + 3] ===
          MAS
        ) {
          sum += 1;
        }

        // bottom-left
        if (
          rows[rowIndex + 1]?.[colIndex - 1] +
            rows[rowIndex + 2]?.[colIndex - 2] +
            rows[rowIndex + 3]?.[colIndex - 3] ===
          MAS
        ) {
          sum += 1;
        }

        // top-left
        if (
          rows[rowIndex - 1]?.[colIndex - 1] +
            rows[rowIndex - 2]?.[colIndex - 2] +
            rows[rowIndex - 3]?.[colIndex - 3] ===
          MAS
        ) {
          sum += 1;
        }

        if (oldSum !== sum) {
          printDebug(`found ${sum - oldSum} XMAS, updated sum to ${sum}`);
        }
      } else if (currentCell === 'A' && part === '2') {
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
