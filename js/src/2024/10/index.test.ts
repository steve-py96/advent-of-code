import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/10', async () => {
  const [inputInput, examples] = await readTestFiles(2024, 10);

  it('example', () => {
    expect(part1(examples.shared)).toBe(36);
    expect(part1(examples['1_1'])).toBe(1);
    expect(part1(examples['1_2'])).toBe(2);
    expect(part1(examples['1_3'])).toBe(4);
    expect(part1(examples['1_4'])).toBe(3);
    expect(part2(examples['2_1'])).toBe(3);
    expect(part2(examples['2_2'])).toBe(13);
    expect(part2(examples['2_3'])).toBe(227);
    expect(part2(examples.shared)).toBe(81);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(538);
    expect(part2(inputInput)).toBe(1110);
  });
});
