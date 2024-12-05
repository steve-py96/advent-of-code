import { defineSolution } from '@/utils';
import { createHash } from 'node:crypto';

export default defineSolution((input, part) => {
  const end = '0'.repeat(part === '2' ? 6 : 5);
  let number = 0;
  let output = '';

  do {
    output = createHash('md5').update(`${input}${number}`).digest('hex');

    number += 1;
  } while (!output.startsWith(end));

  return (number - 1).toString();
});
