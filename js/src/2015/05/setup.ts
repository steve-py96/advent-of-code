import { defineSetup } from '@/utils';

export default defineSetup((input) => {
  const rows = input.split('\n');

  return [rows];
});
