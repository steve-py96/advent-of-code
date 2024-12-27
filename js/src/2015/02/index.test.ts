import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2015/2', async () => {
  const [inputInput, examples] = await readTestFiles(2015, 2);

  it('example', () => {
    expect(part1(examples.shared)).toBe(58);
    expect(part1('1x1x10')).toBe(43);
    expect(part2('2x3x4')).toBe(34);
    expect(part2('1x1x10')).toBe(14);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(1588178);
    expect(part2(inputInput)).toBe(3783758);
  });
});
