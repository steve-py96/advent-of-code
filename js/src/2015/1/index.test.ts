import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2015/1', () => {
  it('example', async () => {
    expect(func(await readInput(2015, 1, 'example.txt'))).toBe(0);
    expect(func('(((')).toBe(3);
    expect(func('(()(()(')).toBe(3);
    expect(func('))(((((')).toBe(3);
    expect(func('())')).toBe(-1);
    expect(func('))(')).toBe(-1);
    expect(func(')))')).toBe(-3);
    expect(func(')())())')).toBe(-3);
  });

  it('input', async () => {
    expect(func(await readInput(2015, 1))).toBe(280);
    expect(func(await readInput(2015, 1), '2')).toBe(1797);
  });
});
