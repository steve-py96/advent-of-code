import { defineSolution, printDebug, toMatrix } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [matrix] = setup(input);
  let orderedAmount = 0;

  for (const packageDimension of matrix) {
    const [length, width, height] = packageDimension;
    const sortedBySideLength = packageDimension.toSorted((a, b) => a - b);

    orderedAmount += sortedBySideLength[0] * 2 + sortedBySideLength[1] * 2 + length * width * height;

    printDebug(`updated total ribbon-length to ${orderedAmount} feet`);
  }

  return orderedAmount;
});
