import { coordinateToString, defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const { matrix, trailheads, followTrail } = setup(input);
  let sum = 0;

  for (const trailhead of trailheads) {
    const paths = followTrail(matrix, trailhead);

    printDebug(
      `trailhead ${coordinateToString(trailhead)} has a rating of ${paths.length}, paths: ${JSON.stringify(
        paths,
        null,
        2
      )}`
    );

    sum += paths.length;
  }

  return sum;
});
