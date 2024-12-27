import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/5', async () => {
  const [inputInput, examples] = await readTestFiles(2024, 5);

  it('example', () => {
    expect(part1(examples.shared)).toBe(143);
    expect(part2(examples.shared)).toBe(123);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(7307);
    expect(part2(inputInput)).toBe(4713);
  });
});
