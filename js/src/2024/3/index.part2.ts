import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [matches] = setup(input);
  let summingEnabled = true;
  let result = 0;

  for (const [, , num1, num2, enabler] of matches) {
    if (!enabler && summingEnabled) {
      result += +num1 * +num2;

      printDebug(`updated mul result to ${result}`);
    } else {
      summingEnabled = enabler === 'do';

      printDebug(`updated overwrites-enabled to: ${summingEnabled}`);
    }
  }

  return result;
});
