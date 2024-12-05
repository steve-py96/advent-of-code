import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2015/3', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2015, 3, 'example.txt'), readInput(2015, 3)]);

  it('example', () => {
    expect(func(exampleInput)).toBe(2);
    expect(func('>')).toBe(2);
    expect(func('^>v<')).toBe(4);
    expect(func(exampleInput, '2')).toBe(11);
    expect(func('^v', '2')).toBe(3);
    expect(func('^>v<', '2')).toBe(3);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(2565);
    expect(func(inputInput, '2')).toBe(2639);
  });
});
