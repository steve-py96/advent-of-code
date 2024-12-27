import { join } from 'node:path';
import { printResult, readInput, getArgs, exists } from '@/utils';

const { year, day, example, part } = getArgs();
const prefixedDay = day.length === 1 ? `0${day}` : day;

console.log(`running src/${year}/${day}/index.part${part}.ts...`);

const inputFilePath = example ? `examples/${example}.txt` : `input.txt`;
const fullInputFilePath = join(process.cwd(), 'src', year, prefixedDay, inputFilePath);

if (!(await exists(fullInputFilePath))) {
  throw new Error(`failed to load file from ${fullInputFilePath}, does a file exist there?`);
} else {
  console.log(`running against input from file ${fullInputFilePath}...\n\n`);
}

await Promise.all([
  readInput(year, prefixedDay, inputFilePath),
  import(`./${year}/${prefixedDay}/index.part${part}`).then(
    (res) => (res as { default: ReturnType<typeof import('@/utils').defineSolution> }).default
  ),
] as const).then(([input, func]) => printResult(func(input)));
