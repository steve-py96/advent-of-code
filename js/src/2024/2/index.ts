import { printDebug, printResult, readInput, toMatrix } from '@/utils';

type RowStyle = 'asc' | 'desc';

const input = await readInput(2024, 2);
const matrix = toMatrix(input, (cell) => +cell);

const validateRow = (row: Array<number>) => {
  const rowStyle: RowStyle = row[0] - row[1] > 0 ? 'desc' : 'asc';

  for (let index = 1; index < row.length; index += 1) {
    const previousItem = row[index - 1];
    const currentItem = row[index];
    const prevToCurrentDiff = Math.abs(previousItem - currentItem);

    if (
      prevToCurrentDiff > 3 ||
      prevToCurrentDiff === 0 ||
      (rowStyle === 'asc' && currentItem < previousItem) ||
      (rowStyle === 'desc' && currentItem > previousItem)
    ) {
      return false;
    }
  }

  return true;
};

const getSafeReports = (withProblemDampener?: boolean) => {
  let safeReports = 0;

  for (const row of matrix) {
    const debugText = `row [${row.join(', ')}] is`;

    if (!validateRow(row)) {
      if (
        withProblemDampener &&
        row.some((_, cellIndex) => validateRow(row.filter((_, index) => cellIndex !== index)))
      ) {
        safeReports += 1;

        printDebug(`${debugText} safe (after adjusting via problem dampener)`);
        printDebug(`safeReports updated to ${safeReports}`);
      } else {
        printDebug(`${debugText} unsafe`);
      }
    } else {
      safeReports += 1;

      printDebug(`${debugText} safe`);
      printDebug(`safeReports updated to ${safeReports}`);
    }
  }

  return safeReports;
};

printResult(getSafeReports(true));
