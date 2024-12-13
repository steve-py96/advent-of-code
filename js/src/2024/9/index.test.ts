import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/9', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2024, 9, 'example.txt'), readInput(2024, 9)]);

  it('example', () => {
    expect(part1(exampleInput)).toBe(1928);
    expect(part2(exampleInput)).toBe(2858);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(6367087064415);
    expect(part2(inputInput)).toBe(6390781891880);
  });
});
