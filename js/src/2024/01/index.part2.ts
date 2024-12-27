import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [leftCol, rightCol] = setup(input);
  let distance = 0;

  for (let index = 0; index < leftCol.length; index += 1) {
    const leftVal = leftCol[index];
    const amount = rightCol.filter((num) => num === leftVal).length;

    distance += leftVal * amount;

    printDebug(`${leftVal} appears ${amount} times in the right column`);
    printDebug(`distance updated to ${distance}`);
  }

  return distance;
});
