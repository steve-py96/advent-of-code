import { readInput } from '@/utils';

const input = await readInput(2024, 3);

const onlyMul = /mul\((\d+),(\d+)\)/g;
const disablableMul = /(mul\((\d+),(\d+)\))|(do(?:n't)?)\(\)/g;

const getSumOfAllMuls = (regex: RegExp) => {
  const matches = Array.from(input.matchAll(regex));
  let summingEnabled = true;
  let result = 0;

  for (const [, , num1, num2, enabler] of matches) {
    if (!enabler && summingEnabled) {
      result += +num1 * +num2;
    } else {
      summingEnabled = enabler === 'do';
    }
  }

  return result;
};

console.log(getSumOfAllMuls(disablableMul));
