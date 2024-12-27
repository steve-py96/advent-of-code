import { defineSetup, toMatrix } from '@/utils';

type RowStyle = 'asc' | 'desc';

export default defineSetup((input) => {
  const matrix = toMatrix(input, {
    transform: (cell) => +cell,
  });

  const validateRow = (row: Array<number>) => {
    const rowStyle: RowStyle = row[0] - row[1] > 0 ? 'desc' : 'asc';

    for (let index = 1; index < row.length; index += 1) {
      const previousItem = row[index - 1];
      const currentItem = row[index];
      const prevToCurrentDiff = Math.abs(previousItem - currentItem);

      if (
        prevToCurrentDiff > 3 ||
        prevToCurrentDiff === 0 ||
        (rowStyle === 'asc' && currentItem < previousItem) ||
        (rowStyle === 'desc' && currentItem > previousItem)
      ) {
        return false;
      }
    }

    return true;
  };

  return [matrix, validateRow] as const;
});
