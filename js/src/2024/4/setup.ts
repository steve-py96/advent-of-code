import { defineSetup } from '@/utils';

export { MAS, REVERSE_MAS };

const MAS = 'MAS';
const REVERSE_MAS = 'SAM';

export default defineSetup((input) => {
  const rows = input.split('\n');

  return [rows] as const;
});
