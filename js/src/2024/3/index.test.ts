import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/3', async () => {
  const [examplePart1Input, examplePart2Input, inputInput] = await Promise.all([
    readInput(2024, 3, 'example.part1.txt'),
    readInput(2024, 3, 'example.part2.txt'),
    readInput(2024, 3),
  ]);

  it('example', () => {
    expect(part1(examplePart1Input)).toBe(161);
    expect(part2(examplePart2Input)).toBe(48);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(183380722);
    expect(part2(inputInput)).toBe(82733683);
  });
});
