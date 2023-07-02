import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectGroup from "~/components/form/SelectGroup";
import { useLocaleCode } from "~/hooks/i18n/locale";
import { RootState } from "~/store/store";
import { useListFeaturesQuery } from "../../place.api";
import { usePlaceFilter } from "../../place.filter";

type Props = {
  onClose: () => void;
};

const PLaceFilterFeatureGroup: React.FC<Props> = ({ onClose }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const features = useSelector((state: RootState) => state.place.features);
  const locale = useLocaleCode();
  const t = useTranslations("place.filter.components.features");
  const { query, push } = usePlaceFilter();
  useListFeaturesQuery(null);

  useEffect(() => {
    console.log("Query:", query);
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
    <div className="space-y-4">
      <p className="text-sm text-gray-500 mb-4">{t("description")}</p>
      {features.map((feature) => (
        <SelectGroup.Item
          key={feature.uuid}
          id={feature.uuid}
          name="feature"
          value={selected.includes(feature.uuid)}
          onChange={() => handleChange(feature.uuid)}
          reversed
        >
          {feature.translations[locale].title}
        </SelectGroup.Item>
      ))}
    </div>
  );
};

export default PLaceFilterFeatureGroup;
