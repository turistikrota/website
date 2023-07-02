import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";
import Button from "~/components/button/Button";
import Condition from "~/components/condition/Condition";
import Popup from "~/components/popup/Popup";
import { usePlaceFilter } from "../../place.filter";
import { PlaceFilterRequest } from "../../place.types";
import FilterHead from "./FilterPopupHead";
import FilterMenu from "./FilterPopupMenu";

type CloseableProps = {
  onClose: () => void;
};

type Props = ContentProps &
  CloseableProps & {
    open: boolean;
  };

export type FilterComponents =
  | "city-select"
  | "distance"
  | "features"
  | "time-spent"
  | "query"
  | "is-payed"
  | "types";

const Components: Record<FilterComponents, React.ComponentType<any>> = {
  "city-select": dynamic(() => import("../shared/PlaceFilterCityGroup")),
  distance: dynamic(() => import("../shared/PlaceFilterDistanceGroup")),
  features: dynamic(() => import("../shared/PlaceFilterFeatureGroup")),
  "time-spent": dynamic(() => import("../shared/PlaceFilterTimeSpentGroup")),
  query: dynamic(() => import("../shared/PlaceFilterQueryGroup")),
  "is-payed": dynamic(() => import("../shared/PlaceFilterIsPayedGroup")),
  types: dynamic(() => import("../shared/PlaceFilterTypeGroup")),
};

const FilterPopup: React.FC<Props> = ({ onClose, open, data, loading }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [key, setKey] = useState<keyof PlaceFilterRequest | null>(null);
  const { isFiltered, clean } = usePlaceFilter();
  const [filterComponent, setFilterComponent] =
    useState<FilterComponents | null>(null);
  const t = useTranslations("place.filter");

  const onOpenFilter = (
    component: FilterComponents,
    key: keyof PlaceFilterRequest
  ) => {
    setFilterComponent(component);
    setKey(key);
    setTitle(t(`components.${component}.title`));
  };

  const onCloseFilter = () => {
    setFilterComponent(null);
    setTitle(null);
    setKey(null);
  };

  const onClearFilter = () => {
    clean(onClose);
  };

  const ActiveComponent = filterComponent && Components[filterComponent];

  return (
    <Popup
      onClose={onClose}
      open={open}
      size="3xl"
      head={
        <FilterHead
          title={title ?? t("title").toString()}
          resultCount={!title ? data?.list.length ?? 0 : 0}
          onClose={onCloseFilter}
          closeable={!!title}
          filterKey={key}
        />
      }
    >
      <>
        {ActiveComponent && <ActiveComponent onClose={onCloseFilter} />}
        {!ActiveComponent && (
          <>
            <FilterMenu onOpen={onOpenFilter}></FilterMenu>
            <Condition value={isFiltered}>
              <Button
                className="mt-12"
                variant="error"
                onClick={onClearFilter}
                disabled={loading}
              >
                {t("clear-all")}
              </Button>
            </Condition>
          </>
        )}
      </>
    </Popup>
  );
};

export default FilterPopup;
