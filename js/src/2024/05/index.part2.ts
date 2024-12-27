import { defineSolution, printDebug, toMatrix } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [rules, updates] = setup(input);
  let sumOfMiddleNumbers = 0;

  const brokenRuleCount = (update: (typeof updates)[number]): [violations: number, finalUpdate: typeof update] => {
    let count = 0;

    for (const rule of rules) {
      const [prev, next] = rule.map((page) => update.indexOf(page));

      if (prev === -1 || next === -1) {
        printDebug(`${rule.join('|')}  || rule has a page which isn't part of the update`);

        continue;
      }

      if (prev > next) {
        printDebug(`${rule.join('|')}  || ${rule[0]} comes before ${rule[1]}`);

        const [nestedCount, fixedUpdate] = brokenRuleCount(update.toSpliced(prev, 1).toSpliced(next, 0, rule[0]));

        if (nestedCount === 0) {
          printDebug(
            `${update.join(',')} || updated update to ${fixedUpdate.join(',')} which doesn't violate any rules`
          );

          return [0, fixedUpdate] as const;
        }

        count += 1;
      }
    }

    return [count, update] as const;
  };

  for (const update of updates) {
    printDebug(`${update.join(',')} || checking against rules...`);

    const [ruleViolations, finalUpdate] = brokenRuleCount(update);

    if (ruleViolations === 0) {
      printDebug(`${update.join(',')} || update didn't encounter any issues`);

      //  only update when fixes were made
      if (finalUpdate !== update) {
        sumOfMiddleNumbers += +finalUpdate[Math.floor(finalUpdate.length / 2)];
      }
      printDebug(`sum of the middle numbers was updated to ${sumOfMiddleNumbers}`);
    }
  }

  return sumOfMiddleNumbers;
});
