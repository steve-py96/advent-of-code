import { defineSolution, printDebug } from '@/utils';

export default defineSolution((input, part) => {
  let level = 0;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (char === '(') {
      level += 1;
    } else if (char === ')') {
      level -= 1;
    }

    printDebug(`level updated to ${level}`);

    if (part === '2' && level === -1) {
      return index + 1;
    }
  }

  return level;
});
