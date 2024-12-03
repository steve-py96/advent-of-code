import { readInput } from '@/utils';

const input = await readInput(2024, 3);

const onlyMul = /mul\((\d+),(\d+)\)/g;
const disablableMul = /(mul\((\d+),(\d+)\))|(do(?:n't)?)\(\)/g;

const getSumOfAllMuls = (regex: RegExp) => {
  let summingEnabled = true;

  return Array.from(input.matchAll(regex)).reduce((result, [, , num1, num2, enabler]) => {
    console.log({ num1, num2, enabler });
    if (!enabler && summingEnabled) {
      return result + +num1 * +num2;
    }

    summingEnabled = enabler === 'do';

    return result;
  }, 0);
};

console.log(getSumOfAllMuls(disablableMul));
