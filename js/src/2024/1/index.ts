import { defineSolution, printDebug, toMatrix } from '@/utils';

export default defineSolution((input) => {
  const matrix = toMatrix(input, (cell) => +cell);
  const [leftCol, rightCol] = matrix.reduce(
    (currentCols, [leftRaw, rightRaw]) => {
      currentCols[0].push(leftRaw);
      currentCols[1].push(rightRaw);

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
    const rowDistance = Math.abs(leftVal - rightVal);

    distance += rowDistance;

    printDebug(`${leftVal} <-> ${rightVal}   = ${rowDistance}`);
    printDebug(`distance updated to ${distance}`);
  }

  return distance;
});
