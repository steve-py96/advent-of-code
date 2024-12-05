import { defineSolution, printDebug, toMatrix } from '@/utils';

export default defineSolution((input, part) => {
  const matrix = toMatrix(input, (cell) => +cell);
  const [leftCol, rightCol] = matrix.reduce(
    (currentCols, [left, right]) => {
      currentCols[0].push(left);
      currentCols[1].push(right);

      return currentCols;
    },
    [[], []] as [left: Array<number>, right: Array<number>]
  );

  leftCol.sort();
  rightCol.sort();

  let distance = 0;

  for (let index = 0; index < leftCol.length; index += 1) {
    const leftVal = leftCol[index];
    const rightVal = rightCol[index];

    if (part === '2') {
      const amount = rightCol.filter((num) => num === leftVal).length;

      distance += leftVal * amount;

      printDebug(`${leftVal} appears ${amount} times in the right column`);
    } else {
      const rowDistance = Math.abs(leftVal - rightVal);

      distance += rowDistance;

      printDebug(`${leftVal} <-> ${rightVal}   = ${rowDistance}`);
    }

    printDebug(`distance updated to ${distance}`);
  }

  return distance;
});
