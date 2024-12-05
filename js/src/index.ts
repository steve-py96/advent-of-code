import { printResult, readInput, getArgs, getExampleFiles } from '@/utils';

const { year, day, example, part } = getArgs();
let exampleFile: null | string = null;

console.log(`running src/${year}/${day}/index.ts...`);

if (example) {
  const exampleFiles = await await getExampleFiles(year, day);

  if (exampleFiles.length === 1) {
    exampleFile = exampleFiles[0];
  } else {
    if (part) {
      exampleFile = exampleFiles.find((file) => file.includes(`part${part}`)) ?? null;
    } else {
      exampleFile = exampleFiles.find((file) => file.includes('part1')) ?? null;
    }
  }

  if (exampleFile === null) {
    throw new Error(`failed to load example file from src/${year}/${day}, does a file exist there?`);
  } else {
    console.log(`running against example file src/${year}/${day}/${exampleFile}...\n\n`);
  }
} else {
  console.log(`running against file src/${year}/${day}/input.txt...\n\n`);
}

await Promise.all([
  readInput(year, day, example ? exampleFile : undefined),
  import(`./${year}/${day}`).then(
    (res) => (res as { default: ReturnType<typeof import('@/utils').defineSolution> }).default
  ),
] as const).then(([input, func]) => printResult(func(input, part)));
