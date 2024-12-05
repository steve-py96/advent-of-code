import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/1', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2024, 1, 'example.txt'), readInput(2024, 1)]);

  it('example', () => {
    expect(func(exampleInput)).toBe(11);
    expect(func(exampleInput, '2')).toBe(31);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(1660292);
    expect(func(inputInput, '2')).toBe(22776016);
  });
});
