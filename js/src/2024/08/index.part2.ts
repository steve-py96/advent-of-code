import { coordinateToString, defineSolution, printDebug } from '@/utils';
import type { Coordinate } from '@/types';
import setup from './setup';

export default defineSolution((input) => {
  const [matrix] = setup(input);
  const antennas = new Map<string, Array<Coordinate>>();
  const signals = new Map<string, Array<string>>();
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

        const distanceX = coordinate.x - innerCoordinate.x;
        const distanceY = coordinate.y - innerCoordinate.y;

        const signalCoordinate: Coordinate = {
          x: innerCoordinate.x - distanceX,
          y: innerCoordinate.y - distanceY,
        };
        let signalsAdded = 0;

        while (
          signalCoordinate.x >= 0 &&
          signalCoordinate.y >= 0 &&
          signalCoordinate.x < cols &&
          signalCoordinate.y < matrix.length
        ) {
          debugMatrix[signalCoordinate.y][signalCoordinate.x] = '#';
          const signalCorrdinateAsString = coordinateToString(signalCoordinate);

          if (!signals.has(signalCorrdinateAsString)) {
            signals.set(signalCorrdinateAsString, [antenna]);
            printDebug(
              `signal ${signalCorrdinateAsString} found for ${antenna}, signalCount updated to ${signals.size}`
            );
          } else {
            const otherAntennas = signals.get(signalCorrdinateAsString)!;

            signals.set(signalCorrdinateAsString, [...otherAntennas, antenna]);
            printDebug(
              `signal ${signalCorrdinateAsString} found for ${antenna}, signalCount not updated since it overlaps with ${
                otherAntennas.length
              } signal${otherAntennas.length === 1 ? '' : 's'} (${otherAntennas.join(' | ')})`
            );
          }

          signalCoordinate.x -= distanceX;
          signalCoordinate.y -= distanceY;
          signalsAdded += 1;
        }

        const coordinateAsString = coordinateToString(coordinate);
        const innerCoordinateAsString = coordinateToString(innerCoordinate);

        signals.set(coordinateAsString, [...(signals.get(coordinateAsString) ?? []), antenna]);
        signals.set(innerCoordinateAsString, [...(signals.get(innerCoordinateAsString) ?? []), antenna]);
        printDebug(
          `since more than 2 signals have been added signals will be placed on the antennas too, updated signals count to ${signals.size}`
        );
      }
    }
  }

  printDebug('final map:');
  printDebug(debugMatrix.map((row) => row.join('')).join('\n'));

  return signals.size;
});
