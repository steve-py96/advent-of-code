import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/8', async () => {
  const [exampleInputPart1, exampleInputPart2, inputInput] = await Promise.all([
    readInput(2024, 8, 'example.part1.txt'),
    readInput(2024, 8, 'example.part2.txt'),
    readInput(2024, 8),
  ]);

  it('example', () => {
    expect(part1(exampleInputPart1)).toBe(14);
    expect(part2(exampleInputPart1)).toBe(34);
    expect(part2(exampleInputPart2)).toBe(9);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(276);
    expect(part2(inputInput)).toBe(991);
  });
});
