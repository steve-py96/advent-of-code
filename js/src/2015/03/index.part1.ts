import { defineSolution, printDebug } from '@/utils';
import setup from './setup';

export default defineSolution((input) => {
  const [visitedPlaces, currentLocations] = setup(input);

  currentLocations.push([0, 0]);

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
    const direction = input[index];
    const currentLocation = currentLocations[0];

    if (direction === '^') {
      currentLocation[1] -= 1;
    } else if (direction === 'v') {
      currentLocation[1] += 1;
    } else if (direction === '<') {
      currentLocation[0] -= 1;
    } else if (direction === '>') {
      currentLocation[0] += 1;
    }

    deliverPresents();
  }

  return visitedPlaces.size;
});
