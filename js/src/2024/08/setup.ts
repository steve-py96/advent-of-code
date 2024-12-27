import { defineSetup, toMatrix } from '@/utils';

export type { Coordinate };

interface Coordinate {
  x: number;
  y: number;
}

export default defineSetup((input) => {
  const matrix = toMatrix(input, {
    delimiter: '',
  });

  return [matrix] as const;
});
