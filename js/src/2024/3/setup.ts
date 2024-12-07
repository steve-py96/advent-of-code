import { defineSetup } from '@/utils';

const regex = /(mul\((\d+),(\d+)\))|(do(?:n't)?)\(\)/g;

export default defineSetup((input) => {
  const matches = Array.from(input.matchAll(regex));

  return [matches] as const;
});
