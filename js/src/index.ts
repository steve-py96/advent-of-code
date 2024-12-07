import { printResult, readInput, getArgs, getFiles } from '@/utils';

const { year, day, example, part } = getArgs();

console.log(`running src/${year}/${day}/index.part${part}.ts...`);

const getInput = async (filePart: string) => {
  let filePath: null | string = null;
  const files = await getFiles(year, day, filePart);

  if (files.length === 1) {
    filePath = files[0];
  } else {
    if (part) {
      filePath = files.find((file) => file.includes(`part${part}`)) ?? null;
    } else {
      filePath = files.find((file) => file.includes('part1')) ?? null;
    }
  }

  if (filePath === null) {
    throw new Error(`failed to load file from src/${year}/${day}/${filePath}, does a file exist there?`);
  } else {
    console.log(`running against input from file src/${year}/${day}/${filePath}...\n\n`);
  }

  return filePath;
};

const inputFilePath = await getInput(example ? 'example' : 'input');

await Promise.all([
  readInput(year, day, inputFilePath),
  import(`./${year}/${day}/index.part${part}`).then(
    (res) => (res as { default: ReturnType<typeof import('@/utils').defineSolution> }).default
  ),
] as const).then(([input, func]) => printResult(func(input)));
