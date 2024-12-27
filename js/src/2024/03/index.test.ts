import { describe, it, expect } from 'vitest';
import { readTestFiles } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('2024/3', async () => {
  const [inputInput, examples] = await readTestFiles(2024, 3);

  it('example', () => {
    expect(part1(examples.part1)).toBe(161);
    expect(part2(examples.part2)).toBe(48);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(183380722);
    expect(part2(inputInput)).toBe(82733683);
  });
});
