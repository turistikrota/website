import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Input from "~/components/form/Input";
import Radio from "~/components/form/Radio";
import debounce from "~/hooks/dom/useDebounce";
import { useCities } from "~/hooks/location/city";
import { City } from "~/static/location/cities";
import { placeToQuery, usePlaceFilter } from "../../place.filter";
import { PlaceFilterRequest } from "../../place.types";

type Props = {
  onClose: () => void;
};

const PlaceFilterCityGroup: React.FC<Props> = ({ onClose }) => {
  const t = useTranslations("ux.input");
  const [searchVal, setSearchVal] = useState<string | null>(null);
  const cities = useCities(searchVal);
  const query = usePlaceFilter();
  const pathname = usePathname();
  const router = useRouter();

  const debouncedPush = debounce((url: string) => {
    router.push(url);
    onClose();
  }, 500);

  const checkActive = (
    filter: PlaceFilterRequest,
    coordinates: number[]
  ): boolean => {
    if (!filter.coordinates) return true;
    return filter.coordinates.every(
      (coordinate, index) => coordinate === coordinates[index]
    );
  };

  const onSelectCity = (city: City, direction: boolean) => {
    if (direction) {
      query.filter.coordinates = [city.coordinates[0], city.coordinates[1]];
    }
    const url = `${pathname}?${placeToQuery(query)}`;
    debouncedPush(url);
  };
  return (
    <>
      <Input
        label={t("search")}
        name="search"
        suffix={<i className="bx bx-xs bx-search-alt-2"></i>}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <div className="space-y-1 mt-2">
        {cities.map((city, idx) => (
          <Radio
            key={city.name}
            name="city"
            id={city.name}
            checked={checkActive(query.filter, city.coordinates)}
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
