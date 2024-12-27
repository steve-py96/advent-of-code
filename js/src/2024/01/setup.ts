import { defineSetup, toMatrix } from '@/utils';

export default defineSetup((input) => {
  const matrix = toMatrix(input, {
    transform: (cell) => +cell,
  });
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

  return [leftCol, rightCol] as const;
});
