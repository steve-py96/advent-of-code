import { defineSolution, printDebug } from '@/utils';

export default defineSolution((input, part) => {
  const visitedPlaces = new Map<string, number>();
  const currentLocations = [] as Array<[x: number, y: number]>;

  if (part === '2') {
    currentLocations.push([0, 0], [0, 0]);
  } else {
    currentLocations.push([0, 0]);
  }

  const deliverPresents = () => {
    for (const currentLocation of currentLocations) {
      const key = currentLocation.join('|');
      const value = (visitedPlaces.get(key) ?? 0) + 1;

      visitedPlaces.set(key, value);

      printDebug(`location ${key} has been updated to ${value} visits`);
    }
  };

  deliverPresents();

  for (let index = 0; index < input.length; index += currentLocations.length) {
    for (let locationIndex = 0; locationIndex < currentLocations.length; locationIndex += 1) {
      const direction = input[index + locationIndex];
      const currentLocation = currentLocations[locationIndex];

      if (direction === '^') {
        currentLocation[1] -= 1;
      } else if (direction === 'v') {
        currentLocation[1] += 1;
      } else if (direction === '<') {
        currentLocation[0] -= 1;
      } else if (direction === '>') {
        currentLocation[0] += 1;
      }
    }

    deliverPresents();
  }

  return visitedPlaces.size;
});
