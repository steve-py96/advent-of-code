import { printResult, readInput, dateAndPartFromArgs } from '@/utils';

const [[year, day], part] = dateAndPartFromArgs();

console.log(`running ${year} / ${day}...`);

await Promise.all([
  readInput(year, day),
  import(`./${year}/${day}`).then(
    (res) => (res as { default: ReturnType<typeof import('@/utils').defineSolution> }).default
  ),
] as const).then(([input, func]) => printResult(func(input, part)));
