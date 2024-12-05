import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/3', async () => {
  const [examplePart1Input, examplePart2Input, inputInput] = await Promise.all([
    readInput(2024, 3, 'example.part1.txt'),
    readInput(2024, 3, 'example.part2.txt'),
    readInput(2024, 3),
  ]);

  it('example', () => {
    expect(func(examplePart1Input)).toBe(161);
    expect(func(examplePart2Input, '2')).toBe(48);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(183380722);
    expect(func(inputInput, '2')).toBe(82733683);
  });
});
