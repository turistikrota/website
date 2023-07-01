import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import SelectGroup from "~/components/form/SelectGroup";
import { useLocaleCode } from "~/hooks/i18n/locale";
import { RootState } from "~/store/store";
import { useListFeaturesQuery } from "../../place.api";

type Props = {
  selected: string[];
  onChange: (featureId: string) => void;
  onClear: () => void;
};

const PLaceFilterFeatureGroup: React.FC<Props> = ({
  selected,
  onChange,
  onClear,
}) => {
  const features = useSelector((state: RootState) => state.place.features);
  const locale = useLocaleCode();
  const t = useTranslations("place.filter");
  useListFeaturesQuery(null);
  return (
    <SelectGroup
      title={t("features")}
      filtered={selected.length > 0}
      onClear={onClear}
    >
      {features.map((feature) => (
        <SelectGroup.Item
          key={feature.uuid}
          name="feature"
          value={selected.includes(feature.uuid)}
          onChange={() => onChange(feature.uuid)}
        >
          {feature.translations[locale].title}
        </SelectGroup.Item>
      ))}
    </SelectGroup>
  );
};

export default PLaceFilterFeatureGroup;
