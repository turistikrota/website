import { trStrSort } from "~/utils/sort";
import cities from "./tr-city-names.json";

export type City = (typeof cities)[0];

export default cities.sort((a, b) => trStrSort(a.name, b.name));
