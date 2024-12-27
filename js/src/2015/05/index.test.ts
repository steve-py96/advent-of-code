import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2015/5', async () => {
  const [inputInput, examples] = await readTestFiles(2015, 5);

  it('example', () => {
    expect(part1(examples.part1)).toBe(2);
    expect(part2(examples.part2)).toBe(2);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(258);
    expect(part2(inputInput)).toBe(53);
  });
});
