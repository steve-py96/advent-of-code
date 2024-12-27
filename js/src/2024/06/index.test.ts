import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/6', async () => {
  const [inputInput, examples] = await readTestFiles(2024, 6);

  it('example', () => {
    expect(part1(examples.shared)).toBe(41);
    expect(part2(examples.shared)).toBe(6);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(4883);
    expect(part2(inputInput)).toBe(1655);
  });
});
