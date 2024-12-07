import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [matrix, validateRow] = setup(input);
  let safeReports = 0;

  for (const row of matrix) {
    const debugText = `row [${row.join(', ')}] is`;

    if (!validateRow(row)) {
      printDebug(`${debugText} unsafe`);
    } else {
      safeReports += 1;

      printDebug(`${debugText} safe`);
      printDebug(`safeReports updated to ${safeReports}`);
    }
  }

  return safeReports;
});
