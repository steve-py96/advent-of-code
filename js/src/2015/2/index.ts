import { defineSolution, printDebug, toMatrix } from '@/utils';

export default defineSolution((input, part) => {
  const matrix = toMatrix(input, {
    delimiter: 'x',
    transform: (cell) => +cell,
  });

  let orderedAmount = 0;

  for (const packageDimension of matrix) {
    const [length, width, height] = packageDimension;

    if (part === '2') {
      const sortedBySideLength = packageDimension.toSorted((a, b) => a - b);

      orderedAmount += sortedBySideLength[0] * 2 + sortedBySideLength[1] * 2 + length * width * height;

      printDebug(`updated total ribbon-length to ${orderedAmount} feet`);
    } else {
      const sides = [length * width, width * height, height * length].sort((a, b) => a - b);

      // 2*l*w + 2*w*h + 2*h*l + smallest side
      orderedAmount += sides[0] * 2 + sides[1] * 2 + sides[2] * 2 + sides[0];

      printDebug(`updated total paper-size to ${orderedAmount} square feet`);
    }
  }

  return orderedAmount;
});
