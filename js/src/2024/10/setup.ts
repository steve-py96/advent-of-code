import { coordinateToString, defineSetup, printDebug, toMatrix } from '@/utils';
import type { Coordinate } from '@/types';

export default defineSetup((input) => {
  const matrix = toMatrix(input, { delimiter: '' });
  const trailheads: Array<Coordinate> = [];

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < matrix.length; colIndex += 1) {
      if (matrix[rowIndex][colIndex] === '0') {
        trailheads.push({
          x: colIndex,
          y: rowIndex,
        });
      }
    }
  }

  const followTrail = (customMatrix: Array<Array<string>>, coordinate: Coordinate) => {
    const currentValue = +customMatrix[coordinate.y][coordinate.x];

    if (currentValue === 9) {
      printDebug('reached max height');

      return [[coordinateToString(coordinate)]];
    }

    const nextValue = (currentValue + 1).toString();
    const coordinatesToFollow: Array<Coordinate> = [];
    const paths: Array<Array<string>> = [];
    const expectedPathsLength = 9 - currentValue;

    if (coordinate.y > 0 && customMatrix[coordinate.y - 1][coordinate.x] === nextValue) {
      coordinatesToFollow.push({ ...coordinate, y: coordinate.y - 1 });
    }

    if (coordinate.x > 0 && customMatrix[coordinate.y][coordinate.x - 1] === nextValue) {
      coordinatesToFollow.push({ ...coordinate, x: coordinate.x - 1 });
    }

    if (coordinate.y < customMatrix.length - 1 && matrix[coordinate.y + 1][coordinate.x] === nextValue) {
      coordinatesToFollow.push({ ...coordinate, y: coordinate.y + 1 });
    }

    if (coordinate.x < customMatrix[0].length - 1 && matrix[coordinate.y][coordinate.x + 1] === nextValue) {
      coordinatesToFollow.push({ ...coordinate, x: coordinate.x + 1 });
    }

    for (const coordinateToFollow of coordinatesToFollow) {
      printDebug(`found trail at ${coordinateToString(coordinateToFollow)} - following...`);

      const upcomingPaths = followTrail(customMatrix, coordinateToFollow);

      if (upcomingPaths.length > 0) {
        for (const upcomingPath of upcomingPaths) {
          if (upcomingPath.length === expectedPathsLength) {
            paths.push([coordinateToString(coordinateToFollow), ...upcomingPath]);
          }
        }
      }
    }

    return paths;
  };

  return {
    matrix,
    trailheads,
    followTrail,
  };
});
