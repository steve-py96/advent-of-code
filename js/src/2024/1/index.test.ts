import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/1', () => {
  it('example', async () => {
    expect(func(await readInput(2024, 1, 'example.txt'))).toBe(11);
    expect(func(await readInput(2024, 1, 'example.txt'), '2')).toBe(31);
  });

  it('input', async () => {
    expect(func(await readInput(2024, 1))).toBe(1660292);
    expect(func(await readInput(2024, 1), '2')).toBe(22776016);
  });
});
