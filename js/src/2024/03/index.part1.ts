import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [matches] = setup(input);
  let result = 0;

  for (const [, , num1, num2] of matches) {
    if (num1 !== undefined && num2 !== undefined) {
      result += +num1 * +num2;

      printDebug(`updated mul result to ${result}`);
    }
  }

  return result;
});
