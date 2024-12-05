import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2015/4', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2015, 4, 'example.txt'), readInput(2015, 4)]);

  it('example', () => {
    expect(func(exampleInput)).toBe('609043');
    expect(func('pqrstuv')).toBe('1048970');
  });

  it('input', () => {
    expect(func(inputInput)).toBe('282749');
    expect(func(inputInput, '2')).toBe('9962624');
  });
});
