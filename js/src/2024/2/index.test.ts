import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/2', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2024, 2, 'example.txt'), readInput(2024, 2)]);

  it('example', () => {
    expect(func(exampleInput)).toBe(2);
    expect(func(exampleInput, '2')).toBe(4);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(218);
    expect(func(inputInput, '2')).toBe(290);
  });
});
