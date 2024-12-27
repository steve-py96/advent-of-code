import { coordinateToString, defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const { matrix, trailheads, followTrail } = setup(input);

  let totalTrails = 0;

  for (const trailhead of trailheads) {
    const result = new Set(followTrail(matrix, trailhead).map((path) => path.at(-1)));

    printDebug(
      `trailhead ${coordinateToString(trailhead)} has a score of ${result.size}: ${JSON.stringify(
        Array.from(result),
        null,
        2
      )}`
    );

    totalTrails += result.size;
  }

  return totalTrails;
});
