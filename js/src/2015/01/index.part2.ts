import { defineSolution, printDebug } from '@/utils';

export default defineSolution((input) => {
  let level = 0;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (char === '(') {
      level += 1;
    } else if (char === ')') {
      level -= 1;
    }

    printDebug(`level updated to ${level}`);

    if (level === -1) {
      return index + 1;
    }
  }

  throw new Error(`no basement found, ended on level ${level}`);
});
