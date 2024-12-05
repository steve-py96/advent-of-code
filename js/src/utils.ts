import { type PathLike } from 'node:fs';
import { readFile, access, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { parseArgs } from 'node:util';

export { readInput, getExampleFiles, exists, getArgs, isDebugMode, printResult, printDebug, toMatrix, defineSolution };

const readInput = (year: string | number, day: string | number, fileName = 'input.txt') =>
  readFile(join(process.cwd(), 'src', year.toString(), day.toString(), fileName), { encoding: 'utf-8' }).then((res) =>
    res.trim()
  );

const exists = (path: PathLike) =>
  access(path)
    .then(() => true)
    .catch(() => false);

const getExampleFiles = (year: string | number, day: string | number) =>
  readdir(join(process.cwd(), 'src', year.toString(), day.toString())).then((res) =>
    res.filter((file) => file.includes('example'))
  );

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
      type: 'boolean',
      default: false,
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
  let [year, day] = date.split('/');

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

const defineSolution =
  (callback: (input: string, part?: string) => unknown) =>
  (input: string, part = '1') =>
    callback(input, part);
