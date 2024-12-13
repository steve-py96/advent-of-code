import { coordinateToString, defineSolution, printDebug } from '@/utils';
import setup, { type Position } from './setup';

export default defineSolution((input) => {
  const { rows, startingPosition, move } = setup(input);
  const colsAmout = rows[0].length;
  const visited = new Map<string, Array<Position['direction']>>();
  let position = { ...startingPosition };

  const visit = () => {
    const coordinates = coordinateToString(position);
    const oldLength = visited.size;

    visited.set(coordinates, [...(visited.get(coordinates) ?? []), position.direction]);
    printDebug(`visited ${coordinates}${visited.size === oldLength ? ' (again)' : ''}`);
  };

  do {
    visit();
    ({ position } = move(position, rows));
  } while (position.x < colsAmout && position.y < rows.length && position.x >= 0 && position.y >= 0);

  return visited.size;
});
