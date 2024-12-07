import { defineSetup } from '@/utils';

export default defineSetup((input) => {
  const visitedPlaces = new Map<string, number>();
  const currentLocations = [] as Array<[x: number, y: number]>;

  return [visitedPlaces, currentLocations] as const;
});
