import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2015/5', async () => {
  const [examplePart1Input, examplePart2Input, inputInput] = await Promise.all([
    readInput(2015, 5, 'example.part1.txt'),
    readInput(2015, 5, 'example.part2.txt'),
    readInput(2015, 5),
  ]);

  it('example', () => {
    expect(func(examplePart1Input)).toBe(2);
    expect(func(examplePart2Input, '2')).toBe(2);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(258);
    expect(func(inputInput, '2')).toBe(53);
  });
});
