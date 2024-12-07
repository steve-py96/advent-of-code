import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'node-html-parser';
import { exists, getArgs } from '@/utils';

const { year, day } = getArgs();
const url = `https://adventofcode.com/${year}/day/${day}`;
const dir = join(process.cwd(), 'src', year, day);
const indexPart1 = join(dir, 'index.part1.ts');
const indexPart2 = join(dir, 'index.part2.ts');
const setup = join(dir, 'setup.ts');
const test = join(dir, 'index.test.ts');
const input = join(dir, 'input.txt');
const example = join(dir, 'example.txt');
const text = join(dir, 'text.md');

console.log(`fetching ${year} / ${day}...`);

const indexText = `
import { defineSolution } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [] = setup(input)

  throw new Error('not implemented yet')
});
`.trim();

const setupText = `
export default defineSetup((input) => {
  return [] as const
});
`.trim();

const testText = (year: string, day: string) =>
  `
import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import part1 from './index.part1';
import part2 from './index.part2';

describe('${year}/${day}', async () => {
  const [exampleInput, inputInput] = await Promise.all([
    readInput(${year}, ${day}, 'example.txt'),
    readInput(${year}, ${day})
  ])

  it('example', () => {
    expect(part1(exampleInput)).toBe('insert result');
    // expect(part2(exampleInput)).toBe('insert result');
  });

  it.skip('input', () => {
    expect(func(inputInput)).toBe('insert result');
  });
});
`.trim();

const textPage = await fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error(`fetch failed, response code ${res.status}`);
  }

  return res.text();
});

const content = parse(textPage)
  .querySelector('article.day-desc')
  .textContent.replace(/<\/?\w+>/g, '')
  .trim();

if (!(await exists(dir))) {
  await mkdir(dir);
}

if (!(await exists(indexPart1))) {
  writeFile(indexPart1, indexText, {
    encoding: 'utf-8',
  });
}

if (!(await exists(indexPart2))) {
  writeFile(indexPart2, indexText, {
    encoding: 'utf-8',
  });
}

if (!(await exists(setup))) {
  writeFile(setup, setupText, {
    encoding: 'utf-8',
  });
}

if (!(await exists(test))) {
  writeFile(test, testText(year, day), {
    encoding: 'utf-8',
  });
}

if (!(await exists(input))) {
  writeFile(input, '', { encoding: 'utf-8' });
}

if (!(await exists(example))) {
  writeFile(example, '', { encoding: 'utf-8' });
}

if (!(await exists(text))) {
  writeFile(text, `${url}\n\n${content}`, {
    encoding: 'utf-8',
  });
}
