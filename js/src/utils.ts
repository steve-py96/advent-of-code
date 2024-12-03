import { type PathLike } from 'node:fs';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

export { readInput, exists, yearAndDayFromArgs, isDebugMode, printResult, printDebug, toMatrix };

const exists = (path: PathLike) =>
  access(path)
    .then(() => true)
    .catch(() => false);

const readInput = (year: number, day: number) =>
  readFile(join(process.cwd(), 'src', year.toString(), day.toString(), 'input.txt'), { encoding: 'utf-8' }).then(
    (res) => res.trim()
  );

const isDebugMode = !!process.env.DEBUG;

const printResult = (result: unknown) => console.log(`\n\n----------------------\nResult:\n${result}`);
const printDebug = (...data: Array<unknown>) => isDebugMode && console.log(...data);

const yearAndDayFromArgs = () => {
  let [year, day] = process.argv.slice(2);

  if (!year) {
    throw new Error('no year as arg provided');
  }

  if (!day) {
    [year, day] = year.split('/');
  }

  if (!day) {
    throw new Error('no day as arg provided');
  }

  return [year, day] as const;
};

const toMatrix = <MatrixType = string>(input: string, callback?: (cell: string) => MatrixType) => {
  return input.split('\n').map((row) => {
    const cells = row.trim().replace(/\s+/, ' ').split(' ');

    return callback ? cells.map(callback) : cells;
  }) as Array<Array<MatrixType>>;
};
