import { defineSolution, printDebug } from '@/utils';
import setup, { MAS } from './setup';

export default defineSolution((input) => {
  const [rows] = setup(input);
  let sum = 0;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < rows[rowIndex].length; colIndex += 1) {
      const currentCell = rows[rowIndex][colIndex];

      if (currentCell === 'X') {
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
      }
    }
  }

  return sum;
});
