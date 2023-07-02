import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Checkbox from "~/components/form/Checkbox";
import { usePlaceFilter } from "../../place.filter";

export default function PlaceFilterIsPayedGroup() {
  const [isPayed, setIsPayed] = useState<boolean>(false);
  const t = useTranslations("place.filter.components.is-payed");
  const { query, push } = usePlaceFilter();

  useEffect(() => {
    if (!!query.filter.isPayed && query.filter.isPayed !== isPayed) {
      setIsPayed(query.filter.isPayed);
    }
  }, [query]);

  const handleChange = (val: boolean) => {
    setIsPayed(val);
    query.filter.isPayed = val;
    push(query);
  };

  return (
    <>
      <p className="text-sm text-gray-500 mb-4">{t("description")}</p>
      <Checkbox
        name="isPayed"
        id="isPayed"
        onChange={handleChange}
        value={isPayed}
        reversed
      >
        {t("label")}
      </Checkbox>
    </>
  );
}
