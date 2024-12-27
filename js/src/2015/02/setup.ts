import { defineSetup, toMatrix } from '@/utils';

export default defineSetup((input) => {
  const matrix = toMatrix(input, {
    delimiter: 'x',
    transform: (cell) => +cell,
  });

  return [matrix] as const;
});
