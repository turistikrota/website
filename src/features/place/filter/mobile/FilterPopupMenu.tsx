import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { useLocaleCode } from "~/hooks/i18n/locale";
import { findCityByCoordinates } from "~/static/location/cities";
import { Locales } from "~/static/page";
import { RootState } from "~/store/store";
import { isCoordinates } from "~/types/base";
import { usePlaceFilter } from "../../place.filter";
import { PlaceFeatureListItem, PlaceFilterRequest } from "../../place.types";
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
  {
    component: "distance",
    queryKey: "distance",
  },
  {
    component: "features",
    queryKey: "featureUUIDs",
  },
];

type ParserOptions = {
  features: PlaceFeatureListItem[];
  locale: Locales;
};

const componentValueParsers: Record<
  FilterComponents,
  (value: any, options: ParserOptions) => any
> = {
  "city-select": (value) => {
    if (isCoordinates(value)) {
      const city = findCityByCoordinates(value);
      if (city) return city.name;
    }
    return "";
  },
  distance: (value) => {
    if (!value) return "";
    return value + " km";
  },
  features: (value, options) => {
    if (!value || !Array.isArray(value)) return "";
    return options.features.reduce((acc, feature) => {
      if (value.includes(feature.uuid)) {
        if (acc.length > 0) {
          acc += ", ";
        }
        acc += feature.translations[options.locale].title;
      }
      return acc;
    }, "");
  },
};

const FilterMenu: React.FC<Props> = ({ onOpen }) => {
  const t = useTranslations("place.filter");
  const query = usePlaceFilter();
  const features = useSelector((state: RootState) => state.place.features);
  const locale = useLocaleCode();

  return (
    <>
      {items.map((item) => (
        <FilterGroup
          key={item.component}
          title={t(`components.${item.component}.text`)}
          onClick={() => onOpen(item.component, item.queryKey)}
          values={componentValueParsers[item.component](
            query.filter[item.queryKey],
            {
              features,
              locale,
            }
          )}
        ></FilterGroup>
      ))}
    </>
  );
};

export default FilterMenu;
