import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  DesktopInfoBox,
  MobileInfoBox,
} from "~/components/accessibility/InfoBox";
import SelectGroup from "~/components/form/SelectGroup";
import { useIsDesktop } from "~/hooks/dom/useWindowSize";
import { useLocaleCode } from "~/hooks/i18n/locale";
import { RootState } from "~/store/store";
import { useListFeaturesQuery } from "../../place.api";
import { usePlaceFilter } from "../../place.filter";

type Props = {
  onClose: () => void;
};

const PLaceFilterFeatureGroup: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const features = useSelector((state: RootState) => state.place.features);
  const locale = useLocaleCode();
  const isDesktop = useIsDesktop();
  const t = useTranslations("place.filter.components.features");
  const { query, push } = usePlaceFilter();
  useListFeaturesQuery(null);

  useEffect(() => {
    if (
      !!query.filter.featureUUIDs &&
      !query.filter.featureUUIDs.every((uuid) =>
        selected.find((f) => f === uuid)
      )
    ) {
      setSelected([...query.filter.featureUUIDs]);
    }
  }, [query]);

  const handleChange = (uuid: string) => {
    let newList: string[] = [];
    if (selected.includes(uuid)) {
      newList = selected.filter((item) => item !== uuid);
    } else {
      newList = [...selected, uuid];
    }
    setSelected(newList);
    query.filter.featureUUIDs = newList;
    push(query);
  };

  return (
    <div className="space-y-4 lg:space-y-0">
      <MobileInfoBox>{t("description")}</MobileInfoBox>
      {features.map((feature) => (
        <SelectGroup.Item
          key={feature.uuid}
          id={feature.uuid}
          name="feature"
          value={selected.includes(feature.uuid)}
          onChange={() => handleChange(feature.uuid)}
          reversed={!isDesktop}
          effect={isDesktop ? "hover" : undefined}
        >
          {feature.translations[locale].title}
          <DesktopInfoBox size="md">
            {feature.translations[locale].description}
          </DesktopInfoBox>
        </SelectGroup.Item>
      ))}
    </div>
  );
};

export default PLaceFilterFeatureGroup;
