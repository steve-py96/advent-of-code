import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/9', async () => {
  const [inputInput, examples] = await readTestFiles(2024, 9);

  it('example', () => {
    expect(part1(examples.shared)).toBe(1928);
    expect(part2(examples.shared)).toBe(2858);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(6367087064415);
    expect(part2(inputInput)).toBe(6390781891880);
  });
});
