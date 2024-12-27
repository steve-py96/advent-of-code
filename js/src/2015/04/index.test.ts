import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2015/4', async () => {
  const [inputInput, examples] = await readTestFiles(2015, 4);

  it('example', () => {
    expect(part1(examples.shared)).toBe('609043');
    expect(part1('pqrstuv')).toBe('1048970');
  });

  it('input', () => {
    expect(part1(inputInput)).toBe('282749');
    expect(part2(inputInput)).toBe('9962624');
  });
});
