import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/5', () => {
  it('example', async () => {
    expect(func(await readInput(2024, 5, 'example.txt'))).toBe(143);
    expect(func(await readInput(2024, 5, 'example.txt'), '2')).toBe(123);
  });

  it('input', async () => {
    expect(func(await readInput(2024, 5))).toBe(7307);
    expect(func(await readInput(2024, 5), '2')).toBe(4713);
  });
});
