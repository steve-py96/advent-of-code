import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2015/1', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2015, 1, 'example.txt'), readInput(2015, 1)]);

  it('example', () => {
    expect(func(exampleInput)).toBe(0);
    expect(func('(((')).toBe(3);
    expect(func('(()(()(')).toBe(3);
    expect(func('))(((((')).toBe(3);
    expect(func('())')).toBe(-1);
    expect(func('))(')).toBe(-1);
    expect(func(')))')).toBe(-3);
    expect(func(')())())')).toBe(-3);
    expect(func(')', '2')).toBe(1);
    expect(func('()())', '2')).toBe(5);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(280);
    expect(func(inputInput, '2')).toBe(1797);
  });
});
