import { type PathLike } from 'node:fs';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { parseArgs } from 'node:util';

export { readInput, exists, dateAndPartFromArgs, isDebugMode, printResult, printDebug, toMatrix, defineSolution };

const exists = (path: PathLike) =>
  access(path)
    .then(() => true)
    .catch(() => false);

const readInput = (year: string | number, day: string | number, fileName = 'input.txt') =>
  readFile(join(process.cwd(), 'src', year.toString(), day.toString(), fileName), { encoding: 'utf-8' }).then((res) =>
    res.trim()
  );

const isDebugMode = !!process.env.DEBUG;
const args = parseArgs({
  options: {
    date: {
      type: 'string',
      short: 'd',
    },
    part: {
      type: 'string',
      short: 'p',
      default: '1',
    },
  },
});

const printResult = (result: unknown) => console.log(`\n\n----------------------\nResult:\n${result}`);
const printDebug = (...data: Array<unknown>) => isDebugMode && console.log(...data);

const dateAndPartFromArgs = () => {
  let [year, day] = args.values.date.split('/');

  if (!year) {
    throw new Error('no year as arg provided');
  }

  if (!day) {
    throw new Error('no day as arg provided');
  }

  return [[year, day], args.values.part] as const;
};

const toMatrix = <MatrixType = string>(input: string, callback?: (cell: string) => MatrixType) => {
  return input.split('\n').map((row) => {
    const cells = row.trim().replace(/\s+/, ' ').split(' ');

    return callback ? cells.map(callback) : cells;
  }) as Array<Array<MatrixType>>;
};

const defineSolution =
  (callback: (input: string, part?: string) => unknown) =>
  (input: string, part = '1') =>
    callback(input, part);
