import { defineSolution, printDebug } from '@/utils';
import setup, { OPERATORS } from './setup';

export default defineSolution((input) => {
  const { nextRow } = setup(input);
  let possibleNumbersSum = 0;

  for (const { unverifiedResult, numbers, possibilities } of nextRow()) {
    for (const possibility of possibilities) {
      let result = numbers[0];

      for (let index = 0; index < possibility.length; index += 1) {
        if (possibility[index] === OPERATORS[0]) {
          result *= numbers[index + 1];
        } else {
          result += numbers[index + 1];
        }
      }

      if (result === unverifiedResult) {
        possibleNumbersSum += unverifiedResult;

        printDebug(
          `${numbers.join(' ')}=${unverifiedResult} works works via ${possibility.join(
            ' '
          )}, incrementing sum to ${possibleNumbersSum}`
        );
        break;
      }
    }
  }

  return possibleNumbersSum;
});
