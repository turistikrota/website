import { trStrSort } from "~/utils/sort";
import cities from "./tr-city-names.json";

export type City = (typeof cities)[0];

export default cities.sort((a, b) => trStrSort(a.name, b.name));

export const findCityByName = (name: string): City | null => {
  const city = cities.find((city) => city.name === name);
  return city || null;
};

export const findCityByCoordinates = (
  coordinates: [number, number]
): City | null => {
  const city = cities.find(
    (city) =>
      city.coordinates[0] === coordinates[0] &&
      city.coordinates[1] === coordinates[1]
  );
  return city || null;
};
