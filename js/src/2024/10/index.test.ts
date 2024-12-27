import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

const examplePart1_1 = `
0123
1234
8765
9876
`.trim();

const examplePart1_2 = `
...0...
...1...
...2...
6543456
7.....7
8.....8
9.....9
`.trim();

const examplePart1_3 = `
..90..9
...1.98
...2..7
6543456
765.987
876....
987....
`.trim();

const examplePart1_4 = `
10..9..
2...8..
3...7..
4567654
...8..3
...9..2
.....01
`.trim();

const examplePart2_1 = `
.....0.
..4321.
..5..2.
..6543.
..7..4.
..8765.
..9....
`.trim();

const examplePart2_2 = `
..90..9
...1.98
...2..7
6543456
765.987
876....
987....
`.trim();

const examplePart2_3 = `
012345
123456
234567
345678
4.6789
56789.
`.trim();

describe('2024/10', async () => {
  const [exampleInput, inputInput] = await Promise.all([readInput(2024, 10, 'example.txt'), readInput(2024, 10)]);

  it('example', () => {
    expect(part1(exampleInput)).toBe(36);
    expect(examplePart1_1).toBe(1);
    expect(examplePart1_2).toBe(2);
    expect(examplePart1_3).toBe(4);
    expect(examplePart1_4).toBe(2);
    expect(part2(examplePart2_1)).toBe(3);
    expect(part2(examplePart2_2)).toBe(13);
    expect(part2(examplePart2_3)).toBe(227);
    expect(part2(exampleInput)).toBe(81);
  });

  it('input', () => {
    expect(part1(inputInput)).toBe(538);
    // expect(part2(inputInput)).toBe('insert result');
  });
});
