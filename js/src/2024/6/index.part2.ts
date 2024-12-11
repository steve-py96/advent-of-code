import { defineSolution, printDebug } from '@/utils';
import setup, { DIRECTIONS, OBSTACLE, type Position } from './setup';

export default defineSolution((input) => {
  const { rows, startingPosition, move, positionToString } = setup(input);
  const colsAmout = rows[0].length;
  const moveHistory: Array<ReturnType<typeof move>> = [];
  const obstaclesForEndlessLoops = new Map<string, Set<Position['direction']>>();
  let position = { ...startingPosition };

  const insertObstacleAt = (pos: Position) => {
    const rowsCopy = rows.slice();
    const rowToEdit = rowsCopy[pos.y].split('');

    rowToEdit[pos.x] = OBSTACLE;
    rowsCopy[pos.y] = rowToEdit.join('');

    return rowsCopy;
  };

  const walkRoute = ({
    customRows,
    customPosition,
    customMoveHistory,
    done,
  }: {
    customRows: typeof rows;
    customPosition: Position;
    customMoveHistory?: typeof moveHistory;
    done?: (obstacle: Position) => boolean;
  }) => {
    do {
      const moveData = move(customPosition, customRows);
      customPosition = moveData.position;

      customMoveHistory?.push(moveData);

      if (moveData.obstacle) {
        if (done?.(moveData.obstacle)) {
          break;
        }
      }
    } while (
      customPosition.x < colsAmout &&
      customPosition.y < customRows.length &&
      customPosition.x >= 0 &&
      customPosition.y >= 0
    );
  };

  // initial walk-thru to create a move history
  walkRoute({
    customRows: rows,
    customPosition: position,
    customMoveHistory: moveHistory,
  });

  printDebug(
    `emulating to put an obstacle on each of the ${moveHistory.length} steps to try to create an endless loop`
  );

  // place an obstacle at every step and check if it creates an infinite loop
  for (let index = 0; index < moveHistory.length; index += 1) {
    const nextMove = move(moveHistory[index].position, rows);

    if (
      nextMove.position.x < colsAmout &&
      nextMove.position.y < rows.length &&
      nextMove.position.x >= 0 &&
      nextMove.position.y >= 0 &&
      (nextMove.position.x !== startingPosition.x || nextMove.position.y !== startingPosition.y)
    ) {
      let customPosition = { ...startingPosition };
      const customRows = insertObstacleAt(nextMove.position);
      const obstacles = new Map<string, Array<Position['direction']>>();

      printDebug(`emulating an obstacle at ${positionToString(nextMove.position)}...`);

      walkRoute({
        customRows,
        customPosition,
        done(obstacle) {
          const currentKey = positionToString(obstacle);
          const currentDirections = obstacles.get(currentKey) ?? [];

          // if the direction is already in the history it's a loop
          if (currentDirections.includes(obstacle.direction)) {
            const globalKey = positionToString(nextMove.position);
            const globalDirections = obstaclesForEndlessLoops.get(globalKey) ?? new Set();

            globalDirections.add(nextMove.position.direction);
            obstaclesForEndlessLoops.set(globalKey, globalDirections);

            printDebug(`found an infinite loop by setting an obstacle to ${globalKey}`);

            return true;
          } else {
            currentDirections.push(obstacle.direction);
            obstacles.set(currentKey, currentDirections);
          }

          return false;
        },
      });
    }
  }

  return obstaclesForEndlessLoops.size;
});
