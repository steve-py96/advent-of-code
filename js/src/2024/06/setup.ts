import { Coordinate } from '@/types';
import { defineSetup } from '@/utils';

export { OBSTACLE, DIRECTIONS };
export type { Position };

interface Position extends Coordinate {
  direction: (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
}

const DIRECTIONS = {
  UP: '^',
  RIGHT: '>',
  BOTTOM: 'v',
  LEFT: '<',
} as const;

const OBSTACLE = '#';

export default defineSetup((input) => {
  const rows = input.split('\n');
  const startingDirection = Object.values(DIRECTIONS).find((direction) => input.includes(direction));
  const startingRowIndex = rows.findIndex((row) => row.includes(startingDirection));
  const startingColIndex = rows[startingRowIndex].indexOf(startingDirection);
  const startingPosition = { x: startingColIndex, y: startingRowIndex, direction: startingDirection };

  const nextDirection = (direction: Position['direction']) => {
    switch (direction) {
      case DIRECTIONS.UP:
        return DIRECTIONS.RIGHT;
      case DIRECTIONS.RIGHT:
        return DIRECTIONS.BOTTOM;
      case DIRECTIONS.BOTTOM:
        return DIRECTIONS.LEFT;
      case DIRECTIONS.LEFT:
        return DIRECTIONS.UP;
      default: {
        throw new Error('invalid direction');
      }
    }
  };

  const move = (
    position: Position,
    rowsToMoveWithin: typeof rows
  ): {
    position: Position;
    obstacle?: Position;
  } => {
    switch (position.direction) {
      case DIRECTIONS.UP: {
        if (rowsToMoveWithin[position.y - 1]?.[position.x] === OBSTACLE) {
          return {
            obstacle: {
              x: position.x,
              y: position.y - 1,
              direction: position.direction,
            },
            position: {
              ...position,
              direction: nextDirection(position.direction),
            },
          };
        }

        return {
          position: {
            ...position,
            y: position.y - 1,
          },
        };
      }
      case DIRECTIONS.RIGHT: {
        if (rowsToMoveWithin[position.y]?.[position.x + 1] === OBSTACLE) {
          return {
            obstacle: {
              x: position.x + 1,
              y: position.y,
              direction: position.direction,
            },
            position: {
              ...position,
              direction: nextDirection(position.direction),
            },
          };
        }

        return {
          position: {
            ...position,
            x: position.x + 1,
          },
        };
      }
      case DIRECTIONS.BOTTOM: {
        if (rowsToMoveWithin[position.y + 1]?.[position.x] === OBSTACLE) {
          return {
            obstacle: {
              x: position.x,
              y: position.y + 1,
              direction: position.direction,
            },
            position: {
              ...position,
              direction: nextDirection(position.direction),
            },
          };
        }

        return {
          position: {
            ...position,
            y: position.y + 1,
          },
        };
      }
      case DIRECTIONS.LEFT: {
        if (rowsToMoveWithin[position.y]?.[position.x - 1] === OBSTACLE) {
          return {
            obstacle: {
              x: position.x - 1,
              y: position.y,
              direction: position.direction,
            },
            position: {
              ...position,
              direction: nextDirection(position.direction),
            },
          };
        }

        return {
          position: {
            ...position,
            x: position.x - 1,
          },
        };
      }
      default: {
        throw new Error('invalid direction');
      }
    }
  };

  return {
    rows,
    startingPosition,
    move,
    nextDirection,
  } as const;
});
