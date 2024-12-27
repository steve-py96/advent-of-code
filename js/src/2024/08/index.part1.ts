import { coordinateToString, defineSolution, printDebug } from '@/utils';
import type { Coordinate } from '@/types';
import setup from './setup';

export default defineSolution((input) => {
  const [matrix] = setup(input);
  const antennas = new Map<string, Array<Coordinate>>();
  const signals = new Set<string>();
  const cols = matrix[0].length;
  const debugMatrix = structuredClone(matrix);

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex += 1) {
      const key = matrix[rowIndex][colIndex];

      if (key !== '.') {
        antennas.set(key, [...(antennas.get(key) ?? []), { x: colIndex, y: rowIndex }]);
      }
    }
  }

  for (const [antenna, coordinates] of antennas.entries()) {
    for (const coordinate of coordinates) {
      for (const innerCoordinate of coordinates) {
        if (innerCoordinate === coordinate) {
          continue;
        }

        const signalCoordinate: Coordinate = {
          x: innerCoordinate.x - (coordinate.x - innerCoordinate.x),
          y: innerCoordinate.y - (coordinate.y - innerCoordinate.y),
        };

        if (
          signalCoordinate.x >= 0 &&
          signalCoordinate.y >= 0 &&
          signalCoordinate.x < cols &&
          signalCoordinate.y < matrix.length
        ) {
          debugMatrix[signalCoordinate.y][signalCoordinate.x] = '#';
          const signalCorrdinateAsString = coordinateToString(signalCoordinate);

          if (!signals.has(signalCorrdinateAsString)) {
            signals.add(signalCorrdinateAsString);
            printDebug(
              `signal ${signalCorrdinateAsString} found for ${antenna}, signalCount updated to ${signals.size}`
            );
          } else {
            printDebug(
              `signal ${signalCorrdinateAsString} found for ${antenna}, signalCount not updated since it overlaps with another signal`
            );
          }
        }
      }
    }
  }

  printDebug('final map:');
  printDebug(debugMatrix.map((row) => row.join('')).join('\n'));

  return signals.size;
});
