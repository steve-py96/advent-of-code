import { yearAndDayFromArgs } from '@/utils';

const [year, day] = yearAndDayFromArgs();

console.log(`running ${year} / ${day}...`);

await import(`./${year}/${day}`);
