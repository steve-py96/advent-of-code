import { type PathLike } from 'node:fs';
import { readFile, access, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import type { Coordinate } from '@/types';

export {
  readInput,
  readExamples,
  readTestFiles,
  exists,
  getArgs,
  printResult,
  printDebug,
  toMatrix,
  defineSolution,
  defineSetup,
  coordinateToString,
};

type StringOrNumber = string | number;

const readInput = (year: StringOrNumber, day: StringOrNumber, fileName = 'input.txt') =>
  readFile(
    join(process.cwd(), 'src', year.toString(), (day.toString().length === 1 ? '0' : '') + day.toString(), fileName),
    { encoding: 'utf-8' }
  ).then((res) => res.trim());

const readExamples = async (year: StringOrNumber, day: StringOrNumber) => {
  const dirPath = join(
    process.cwd(),
    'src',
    year.toString(),
    (day.toString().length === 1 ? '0' : '') + day.toString(),
    'examples'
  );

  const fileNames = await readdir(dirPath);
  const fileContents = await Promise.all(
    fileNames.map((fileName) => readFile(join(dirPath, fileName), { encoding: 'utf-8' }))
  );

  return Object.fromEntries(
    fileNames.map((fileName, index) => [fileName.slice(0, -'.txt'.length), fileContents[index]] as const)
  );
};

const readTestFiles = (year: StringOrNumber, day: StringOrNumber) =>
  Promise.all([readInput(year, day), readExamples(year, day)] as const);

const exists = (path: PathLike) =>
  access(path)
    .then(() => true)
    .catch(() => false);

const args = parseArgs({
  options: {
    date: {
      type: 'string',
    },
    part: {
      type: 'string',
      default: '1',
    },
    example: {
      type: 'string',
      default: '',
    },
    debug: {
      type: 'boolean',
      default: false,
    },
  },
});

const isDebugMode = () => !!process.env.DEBUG || args.values.debug;
const printResult = (result: unknown) => console.log(`\n\n----------------------\nResult:\n${result}`);
const printDebug = (...data: Array<unknown>) => isDebugMode() && console.log(...data);

const getArgs = () => {
  const { date, ...rest } = args.values;
  let [year, day] = (date ?? '').split('/');

  if (!year) {
    throw new Error('no year as arg provided');
  }

  if (!day) {
    throw new Error('no day as arg provided');
  }

  return {
    ...rest,
    date,
    year,
    day,
  };
};

const toMatrix = <MatrixType = string>(
  input: string,
  params: { transform?: (cell: string) => MatrixType; delimiter?: string } = {}
) => {
  return input.split('\n').map((row) => {
    const cells = row
      .trim()
      .replace(/\s+/, ' ')
      .split(params.delimiter ?? ' ');

    return params.transform ? cells.map(params.transform) : cells;
  }) as Array<Array<MatrixType>>;
};

const defineSolution = (callback: (input: string) => unknown) => (input: string) => callback(input);

const defineSetup =
  <ReturnValue = unknown>(callback: (input: string) => ReturnValue) =>
  (input: string) =>
    callback(input);

const coordinateToString = ({ x, y }: Coordinate) => `${x}/${y}`;
