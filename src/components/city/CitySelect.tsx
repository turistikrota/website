import { useTranslations } from "next-intl";
import cities, { type City } from "~/static/location/cities";
import Input from "../form/Input";
import SelectGroup from "../form/SelectGroup";

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
      <SelectGroup
        title={t("city")}
        filtered
        filter={
          <Input
            label="Search"
            name="search"
            size="md"
            suffix={<i className="bx bx-search-alt-2"></i>}
          />
        }
      >
        {cities.map((city) => (
          <SelectGroup.Item key={city.name} name="city">
            {city.name}
          </SelectGroup.Item>
        ))}
      </SelectGroup>
    </>
  );
}
