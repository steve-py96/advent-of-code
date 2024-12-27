import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [matrix] = setup(input);
  let orderedAmount = 0;

  for (const packageDimension of matrix) {
    const [length, width, height] = packageDimension;
    const sides = [length * width, width * height, height * length].sort((a, b) => a - b);

    // 2*l*w + 2*w*h + 2*h*l + smallest side
    orderedAmount += sides[0] * 2 + sides[1] * 2 + sides[2] * 2 + sides[0];

    printDebug(`updated total paper-size to ${orderedAmount} square feet`);
  }

  return orderedAmount;
});
