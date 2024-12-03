import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'node-html-parser';
import { exists, yearAndDayFromArgs } from '@/utils';

const [year, day] = yearAndDayFromArgs();
const url = `https://adventofcode.com/${year}/day/${day}`;
const dir = join(process.cwd(), 'src', year, day);
const index = join(dir, 'index.ts');
const input = join(dir, 'input.txt');
const text = join(dir, 'text.md');

console.log(`fetching ${year} / ${day}...`);

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
  writeFile(index, `import { readInput } from '@/utils';\n\nconst input = await readInput(${year}, ${day});\n`, {
    encoding: 'utf-8',
  });
}

if (!(await exists(input))) {
  writeFile(input, '', { encoding: 'utf-8' });
}

if (!(await exists(text))) {
  writeFile(text, `${url}\n\n${content}`, {
    encoding: 'utf-8',
  });
}
