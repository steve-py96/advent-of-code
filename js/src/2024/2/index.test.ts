import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/1', () => {
  it('example', async () => {
    expect(func(await readInput(2024, 2, 'example.txt'))).toBe(2);
    expect(func(await readInput(2024, 2, 'example.txt'), '2')).toBe(4);
  });

  it('input', async () => {
    expect(func(await readInput(2024, 2))).toBe(218);
    expect(func(await readInput(2024, 2), '2')).toBe(290);
  });
});
