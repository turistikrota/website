import { useTranslations } from "next-intl";
import cities, { type City } from "~/static/location/cities";
import Select from "../form/Select";

type Props = {
  selectedCityName: string;
  onSelect: (city: City) => void;
};

const findCityByName = (name: string): City | null => {
  const city = cities.find((city) => city.name === name);
  return city || null;
};

export default function CitySelect({ selectedCityName, onSelect }: Props) {
  const t = useTranslations("place.filter");
  const onCitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = findCityByName(e.target.value);
    if (city) {
      onSelect(city);
    }
  };

  return (
    <>
      <Select
        label={t("city")}
        name="city"
        defaultValue={selectedCityName}
        onChange={onCitySelect}
        autoComplete="off"
      >
        <Select.DefaultOption />
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </Select>
    </>
  );
}
