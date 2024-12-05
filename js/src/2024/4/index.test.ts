import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/4', () => {
  it('example', async () => {
    expect(func(await readInput(2024, 4, 'example.part1.txt'))).toBe(18);
    expect(func(await readInput(2024, 4, 'example.part2.txt'), '2')).toBe(9);
  });

  it('input', async () => {
    expect(func(await readInput(2024, 4))).toBe(2517);
    expect(func(await readInput(2024, 4), '2')).toBe(1960);
  });
});
