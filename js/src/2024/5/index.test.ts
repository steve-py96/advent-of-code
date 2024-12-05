import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/5', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2024, 5, 'example.txt'), readInput(2024, 5)]);

  it('example', () => {
    expect(func(exampleInput)).toBe(143);
    expect(func(exampleInput, '2')).toBe(123);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(7307);
    expect(func(inputInput, '2')).toBe(4713);
  });
});
