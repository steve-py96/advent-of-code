import { printResult, readInput } from '@/utils';

const input = await readInput(2015, 1);
const chars = input.split('');

const getLevel = (returnIndexOfLevel?: number) => {
  let level = 0;

  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];

    if (char === '(') {
      level += 1;
    } else if (char === ')') {
      level -= 1;
    }

    if (returnIndexOfLevel === level) {
      return index;
    }
  }

  return level;
};

printResult(getLevel(-1));
