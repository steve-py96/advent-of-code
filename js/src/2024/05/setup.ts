import { defineSetup, toMatrix } from '@/utils';

export default defineSetup((input) => {
  const [rulesRaw, updatesRaw] = input.split('\n\n');
  const rules = toMatrix(rulesRaw, { delimiter: '|' });
  const updates = toMatrix(updatesRaw, { delimiter: ',' });

  return [rules, updates] as const;
});
