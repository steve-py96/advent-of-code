import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/4', async () => {
  const [examplePart1Input, examplePart2Input, inputInput] = await Promise.all([
    readInput(2024, 4, 'example.part1.txt'),
    readInput(2024, 4, 'example.part2.txt'),
    readInput(2024, 4),
  ]);

  it('example', () => {
    expect(func(examplePart1Input)).toBe(18);
    expect(func(examplePart2Input, '2')).toBe(9);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(2517);
    expect(func(inputInput, '2')).toBe(1960);
  });
});
