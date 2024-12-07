import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [rows] = setup(input);
  let niceTextCount = 0;

  for (const row of rows) {
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

    if (Array.from(pairs.values()).some((element) => element > 1) && wrappingLetterCount > 0) {
      niceTextCount += 1;

      printDebug(`nice text found in ${row}, updated niceTextCount to ${niceTextCount}`);
    }
  }

  return niceTextCount;
});
