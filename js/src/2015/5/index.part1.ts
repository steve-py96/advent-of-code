import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

const vowels = ['a', 'e', 'i', 'o', 'u'];
const forbiddenCombinations = ['ab', 'cd', 'pq', 'xy'];

export default defineSolution((input) => {
  const [rows] = setup(input);
  let niceTextCount = 0;

  for (const row of rows) {
    let vowelCount = 0;
    let doubledLetterCount = 0;

    for (let charIndex = 0; charIndex < row.length; charIndex += 1) {
      const prevChar = row[charIndex - 1];
      const char = row[charIndex];

      if (vowels.includes(char)) {
        vowelCount += 1;
      }

      if (prevChar === char) {
        doubledLetterCount += 1;
      }
    }

    if (
      vowelCount > 2 &&
      doubledLetterCount > 0 &&
      !forbiddenCombinations.some((forbiddenCombination) => row.includes(forbiddenCombination))
    ) {
      niceTextCount += 1;

      printDebug(`nice text found in ${row}, updated niceTextCount to ${niceTextCount}`);
    }
  }

  return niceTextCount;
});
