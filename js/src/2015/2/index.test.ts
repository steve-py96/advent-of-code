import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2015/2', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2015, 2, 'example.txt'), readInput(2015, 2)]);

  it('example', () => {
    expect(func(exampleInput)).toBe(58);
    expect(func('1x1x10')).toBe(43);
    expect(func('2x3x4', '2')).toBe(34);
    expect(func('1x1x10', '2')).toBe(14);
  });

  it('input', () => {
    expect(func(inputInput)).toBe(1588178);
    expect(func(inputInput, '2')).toBe(3783758);
  });
});
