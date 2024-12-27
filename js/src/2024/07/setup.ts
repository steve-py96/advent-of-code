import { defineSetup } from '@/utils';

export { OPERATORS };

const OPERATORS: Record<string, string> = {
  0: '*',
  1: '+',
  2: '||',
};

export default defineSetup((input) => {
  const rows = input.split('\n').map((row) => {
    const [resultString, numString] = row.split(': ');

    return [+resultString, numString.split(' ').map((num) => +num)] as const;
  });

  // increment numeral system (f.e. binary) for a simple generation of all permutations
  const incrementOperators = (value: string, radix = 2) => (parseInt(value, radix) + 1).toString(radix);

  function* nextRow(radix = 2) {
    for (const [unverifiedResult, numbers] of rows) {
      const possibilities: Array<Array<string>> = [];
      const possibilitiesCount = Math.pow(radix, numbers.length - 1); // permutations = 2^(amount of operators / numbers.length - 1)
      let currentPossibility = '0'.repeat(numbers.length - 1);

      do {
        const possibility = currentPossibility.split('').map((index) => OPERATORS[index]);

        while (possibility.length < numbers.length - 1) {
          possibility.unshift(OPERATORS[0]);
        }

        possibilities.push(possibility);
        currentPossibility = incrementOperators(currentPossibility, radix);
      } while (possibilities.length !== possibilitiesCount);

      yield {
        unverifiedResult,
        numbers,
        possibilities,
      };
    }
  }

  return {
    rows,
    incrementOperators,
    nextRow,
  } as const;
});
