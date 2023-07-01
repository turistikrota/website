import { useTranslations } from "next-intl";
import { findCityByCoordinates } from "~/static/location/cities";
import { isCoordinates } from "~/types/base";
import { usePlaceFilter } from "../../place.filter";
import { PlaceFilterRequest } from "../../place.types";
import FilterGroup from "./FilterGroup";
import { FilterComponents } from "./FilterPopup";

type Props = {
  onOpen: (component: FilterComponents, key: keyof PlaceFilterRequest) => void;
};

type Item = {
  component: FilterComponents;
  // query key key of PlaceFilterRequest
  queryKey: keyof PlaceFilterRequest;
};

const items: Item[] = [
  {
    component: "city-select",
    queryKey: "coordinates",
  },
];

const componentValueParsers: Record<FilterComponents, (value: any) => any> = {
  "city-select": (value) => {
    if (isCoordinates(value)) {
      const city = findCityByCoordinates(value);
      if (city) return city.name;
    }
    return "";
  },
};

const FilterMenu: React.FC<Props> = ({ onOpen }) => {
  const t = useTranslations("place.filter");
  const query = usePlaceFilter();

  return (
    <>
      {items.map((item) => (
        <FilterGroup
          key={item.component}
          title={t(`components.${item.component}.text`)}
          onClick={() => onOpen(item.component, item.queryKey)}
          values={componentValueParsers[item.component](
            query.filter[item.queryKey]
          )}
        ></FilterGroup>
      ))}
    </>
  );
};

export default FilterMenu;
