import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2015/3', async () => {
  const [inputInput, examples] = await readTestFiles(2015, 3);

  it('example', () => {
    expect(part1(examples.shared)).toBe(2);
    expect(part1('>')).toBe(2);
    expect(part1('^>v<')).toBe(4);
    expect(part2(examples.shared)).toBe(11);
    expect(part2('^v')).toBe(3);
    expect(part2('^>v<')).toBe(3);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(2565);
    expect(part2(inputInput)).toBe(2639);
  });
});
