import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [matrix, validateRow] = setup(input);
  let safeReports = 0;

  for (const row of matrix) {
    const debugText = `row [${row.join(', ')}] is`;

    if (!validateRow(row)) {
      if (row.some((_, cellIndex) => validateRow(row.filter((_, index) => cellIndex !== index)))) {
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
});
