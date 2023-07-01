import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";
import Popup from "~/components/popup/Popup";
import FilterHead from "./FilterPopupHead";
import FilterMenu from "./FilterPopupMenu";

type CloseableProps = {
  onClose: () => void;
};

type Props = ContentProps &
  CloseableProps & {
    open: boolean;
  };

export type FilterComponents = "city-select";

const Components: Record<FilterComponents, React.ComponentType<any>> = {
  "city-select": dynamic(() => import("../shared/PlaceFilterCityGroup")),
};

const FilterPopup: React.FC<Props> = ({ onClose, open, data, loading }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [filterComponent, setFilterComponent] =
    useState<FilterComponents | null>(null);
  const t = useTranslations("place.filter");

  const onOpenFilter = (component: FilterComponents) => {
    setFilterComponent(component);
    setTitle(t(`components.${component}.title`));
  };

  const onCloseFilter = () => {
    setFilterComponent(null);
    setTitle(null);
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
        />
      }
    >
      <>
        {ActiveComponent && <ActiveComponent onClose={onCloseFilter} />}
        {!ActiveComponent && <FilterMenu onOpen={onOpenFilter}></FilterMenu>}
        {/*
                <FilterGroup
          title="Test"
          onClick={() => setFilterComponent("test")}
          values="3 item seçildi"
        ></FilterGroup>
          <CitySelect
            selectedCityName={city?.name ?? ""}
            onSelect={(city) => setCity(city)}
          />
        <FilterGroup>
          <PLaceFilterFeatureGroup
            onChange={() => {}}
            onClear={() => {}}
            selected={[]}
          />
        </FilterGroup>
         */}
      </>
    </Popup>
  );
};

export default FilterPopup;
