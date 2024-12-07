import { createHash } from 'node:crypto';
import { defineSetup } from '@/utils';

export default defineSetup((input) => {
  const run = (end: string) => {
    let number = 0;
    let output = '';

    do {
      output = createHash('md5').update(`${input}${number}`).digest('hex');

      number += 1;
    } while (!output.startsWith(end));

    return (number - 1).toString();
  };

  return [run];
});
