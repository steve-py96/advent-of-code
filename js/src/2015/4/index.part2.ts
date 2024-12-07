import { defineSolution } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [run] = setup(input);

  return run('0'.repeat(6));
});
