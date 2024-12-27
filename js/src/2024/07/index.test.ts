import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/7', async () => {
  const [inputInput, examples] = await readTestFiles(2024, 7);

  it('example', () => {
    expect(part1(examples.shared)).toBe(3749);
    expect(part2(examples.shared)).toBe(11387);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(1289579105366);
    expect(part2(inputInput)).toBe(92148721834692);
  });
});
