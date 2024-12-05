import { defineSolution, printDebug } from '@/utils';

const regex = /(mul\((\d+),(\d+)\))|(do(?:n't)?)\(\)/g;

export default defineSolution((input, part) => {
  const getSumOfAllMuls = (allowEnableOverwrite?: boolean) => {
    const matches = Array.from(input.matchAll(regex));
    let summingEnabled = true;
    let result = 0;

    for (const [, , num1, num2, enabler] of matches) {
      if (!enabler && summingEnabled) {
        result += +num1 * +num2;

        printDebug(`updated mul result to ${result}`);
      } else {
        if (allowEnableOverwrite) {
          summingEnabled = enabler === 'do';

          printDebug(`updated overwrites-enabled to: ${summingEnabled}`);
        }
      }
    }

    return result;
  };

  return getSumOfAllMuls(part === '2');
});
