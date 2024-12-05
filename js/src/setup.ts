import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'node-html-parser';
import { exists, dateAndPartFromArgs } from '@/utils';

const [[year, day]] = dateAndPartFromArgs();
const url = `https://adventofcode.com/${year}/day/${day}`;
const dir = join(process.cwd(), 'src', year, day);
const index = join(dir, 'index.ts');
const test = join(dir, 'index.test.ts');
const input = join(dir, 'input.txt');
const example = join(dir, 'example.txt');
const text = join(dir, 'text.md');

console.log(`fetching ${year} / ${day}...`);

const inputText = (year: string, day: string) =>
  `
import { defineSolution } from '@/utils';

export default defineSolution((input, part) => {
  // insert solution
});
`.trim();

const testText = (year: string, day: string) =>
  `
import { describe, it, expect } from 'vitest';
import { readInput } from '@/utils';
import func from '.';

describe('2024/1', () => {
  it('example', async () => {
    expect(func(await readInput(${year}, ${day}, 'example.txt'))).toBe('insert result');
  });

  it.skip('input', async () => {
    expect(func(await readInput(${year}, ${day}))).toBe('insert result');
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

if (!(await exists(index))) {
  writeFile(index, inputText(year, day), {
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
