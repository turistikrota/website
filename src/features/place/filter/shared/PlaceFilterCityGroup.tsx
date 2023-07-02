import { useTranslations } from "next-intl";
import { useState } from "react";
import Input from "~/components/form/Input";
import Radio from "~/components/form/Radio";
import { useCities } from "~/hooks/location/city";
import { City } from "~/static/location/cities";
import { usePlaceFilter } from "../../place.filter";

type Props = {
  onClose: () => void;
};

const PlaceFilterCityGroup: React.FC<Props> = ({ onClose }) => {
  const t = useTranslations("ux.input");
  const [searchVal, setSearchVal] = useState<string | null>(null);
  const cities = useCities(searchVal);
  const { query, push } = usePlaceFilter();

  const onSelectCity = (city: City, direction: boolean) => {
    if (direction) {
      query.filter.coordinates = [city.coordinates[0], city.coordinates[1]];
    }
    push(query);
  };
  return (
    <>
      <Input
        label={t("search")}
        name="search"
        suffix={<i className="bx bx-xs bx-search-alt-2"></i>}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <div className="space-y-1 mt-2 max-h-[50vh] overflow-y-auto">
        {cities.map((city, idx) => (
          <Radio
            key={city.name}
            name="city"
            id={city.name}
            checked={
              query.filter.coordinates &&
              query.filter.coordinates[0] === city.coordinates[0] &&
              query.filter.coordinates[1] === city.coordinates[1]
            }
            reverse
            onChange={(e) => onSelectCity(city, e)}
          >
            {city.name}
          </Radio>
        ))}
      </div>
    </>
  );
};

export default PlaceFilterCityGroup;
