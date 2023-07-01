import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { placeToQuery, usePlaceFilter } from "../../place.filter";
import { PlaceFilterRequest } from "../../place.types";
import FilterGroup from "./FilterGroup";
import { FilterComponents } from "./FilterPopup";

type Props = {
  onOpen: (component: FilterComponents) => void;
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
    console.log("value", value);
    return value;
  },
};

const FilterMenu: React.FC<Props> = ({ onOpen }) => {
  const t = useTranslations("place.filter");
  const query = usePlaceFilter();
  const pathname = usePathname();
  const router = useRouter();

  const clear = (queryKey: keyof PlaceFilterRequest) => {
    query.filter[queryKey] = undefined;
    router.push(`${pathname}?${placeToQuery(query)}}`);
  };

  return (
    <>
      {items.map((item) => (
        <FilterGroup
          key={item.component}
          title={t(`components.${item.component}.text`)}
          onClick={() => onOpen(item.component)}
          values={componentValueParsers[item.component](
            query.filter[item.queryKey]
          )}
          filtered={!!query.filter[item.queryKey]}
          onClear={() => clear(item.queryKey)}
        ></FilterGroup>
      ))}
    </>
  );
};

export default FilterMenu;
