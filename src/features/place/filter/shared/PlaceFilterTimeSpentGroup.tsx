import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import InputRange from "~/components/form/InputRange";
import { usePlaceFilter } from "../../place.filter";
import { TimeSpent } from "../../place.types";

export default function PlaceFilterTimeSpentGroup() {
  const t = useTranslations("place.filter.components.time-spent");
  const [firstSet, setFirstSet] = useState<boolean>(false);
  const [values, setValues] = useState<TimeSpent>({ min: 0, max: 0 });
  const { query, push } = usePlaceFilter();

  useEffect(() => {
    if (!firstSet || !query.filter.timeSpent) return;
    const minIsZero = query.filter.timeSpent.min === 0;
    const maxIsZero = query.filter.timeSpent.max === 0;
    const minIsDifferent = query.filter.timeSpent.min !== values.min;
    const maxIsDifferent = query.filter.timeSpent.max !== values.max;
    setFirstSet(true);
    if (minIsZero && maxIsZero) return;
    if (minIsDifferent || maxIsDifferent) {
      setValues(query.filter.timeSpent);
    }
  }, [query]);

  const handleChange = (values: TimeSpent) => {
    setValues(values);
    query.filter.timeSpent = values;
    push(query);
  };

  return (
    <>
      <p className="text-sm text-gray-500 mb-4">{t("description")}</p>
      <InputRange onChange={handleChange} values={values} min={0} />
    </>
  );
}
