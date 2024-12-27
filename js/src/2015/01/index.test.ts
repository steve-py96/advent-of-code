import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2015/1', async () => {
  const [inputInput, examples] = await readTestFiles(2015, 1);

  it('example', () => {
    expect(part1(examples.shared)).toBe(0);
    expect(part1('(((')).toBe(3);
    expect(part1('(()(()(')).toBe(3);
    expect(part1('))(((((')).toBe(3);
    expect(part1('())')).toBe(-1);
    expect(part1('))(')).toBe(-1);
    expect(part1(')))')).toBe(-3);
    expect(part1(')())())')).toBe(-3);
    expect(part2(')')).toBe(1);
    expect(part2('()())')).toBe(5);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(280);
    expect(part2(inputInput)).toBe(1797);
  });
});
