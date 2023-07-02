import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Input from "~/components/form/Input";
import { usePlaceFilter } from "../../place.filter";

const DefaultDistance: number = 100;

type Props = {
  onClose: () => void;
};

export default function PlaceFilterDistanceGroup({ onClose }: Props) {
  const [distance, setDistance] = useState<number>(DefaultDistance);
  const t = useTranslations("place.filter.components.distance");
  const { query, push } = usePlaceFilter();

  useEffect(() => {
    if (!!query.filter.distance && query.filter.distance !== distance) {
      setDistance(query.filter.distance);
    }
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value) {
      setDistance(value);
      query.filter.distance = value;
      push(query);
    }
  };

  return (
    <>
      <p className="text-sm text-gray-500 mb-4">{t("description")}</p>
      <Input<number>
        label={t("label")}
        name="distance"
        type="number"
        pattern="[0-9]*"
        value={distance}
        onChange={handleChange}
      />
    </>
  );
}

// add a slider input
