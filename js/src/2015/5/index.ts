import { defineSolution, printDebug } from '@/utils';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const forbiddenCombinations = ['ab', 'cd', 'pq', 'xy'];

export default defineSolution((input, part) => {
  const rows = input.split('\n');
  let niceTextCount = 0;

  const part1Check = (row: string) => {
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

    return (
      vowelCount > 2 &&
      doubledLetterCount > 0 &&
      !forbiddenCombinations.some((forbiddenCombination) => row.includes(forbiddenCombination))
    );
  };

  const part2Check = (row: string) => {
    const pairs = new Map<string, number>();
    let wrappingLetterCount = 0;

    for (let charIndex = 0; charIndex < row.length; charIndex += 1) {
      const prevChar = row[charIndex - 1];
      const char = row[charIndex];
      const nextChar = row[charIndex + 1];
      const pair = char + nextChar;

      if (prevChar !== char || prevChar !== nextChar) {
        pairs.set(pair, (pairs.get(pair) ?? 0) + 1);
      }

      if (prevChar === nextChar) {
        wrappingLetterCount += 1;
      }
    }

    return Array.from(pairs.values()).some((element) => element > 1) && wrappingLetterCount > 0;
  };

  for (const row of rows) {
    if ((part === '2' && part2Check(row)) || (part === '1' && part1Check(row))) {
      niceTextCount += 1;

      printDebug(`nice text found in ${row}, updated niceTextCount to ${niceTextCount}`);
    }
  }

  return niceTextCount;
});
