import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/1', async () => {
  const [inputInput, examples] = await readTestFiles(2024, 1);

  it('example', () => {
    expect(part1(examples.shared)).toBe(11);
    expect(part2(examples.shared)).toBe(31);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(1660292);
    expect(part2(inputInput)).toBe(22776016);
  });
});
