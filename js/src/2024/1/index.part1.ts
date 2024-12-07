import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [leftCol, rightCol] = setup(input);
  let distance = 0;

  for (let index = 0; index < leftCol.length; index += 1) {
    const leftVal = leftCol[index];
    const rightVal = rightCol[index];
    const rowDistance = Math.abs(leftVal - rightVal);

    distance += rowDistance;

    printDebug(`${leftVal} <-> ${rightVal}   = ${rowDistance}`);
    printDebug(`distance updated to ${distance}`);
  }

  return distance;
});
