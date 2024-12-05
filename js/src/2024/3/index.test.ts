import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/3', () => {
  it('example', async () => {
    expect(func(await readInput(2024, 3, 'example.part1.txt'))).toBe(161);
    expect(func(await readInput(2024, 3, 'example.part2.txt'), '2')).toBe(48);
  });

  it('input', async () => {
    expect(func(await readInput(2024, 3))).toBe(183380722);
    expect(func(await readInput(2024, 3), '2')).toBe(82733683);
  });
});
