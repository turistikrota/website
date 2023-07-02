import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Input from "~/components/form/Input";
import {
  placeToQuery,
  usePlaceFilter,
  usePlaceFilterChanger,
} from "../../place.filter";

const DefaultDistance: number = 100;

export default function PlaceFilterDistanceGroup() {
  const [distance, setDistance] = useState<number>(DefaultDistance);
  const t = useTranslations("place.filter.components.distance");
  const query = usePlaceFilter();
  const changer = usePlaceFilterChanger();

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
      changer(placeToQuery(query));
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
