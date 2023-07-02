import { useTranslations } from "next-intl";
import { useState } from "react";
import InputRange from "~/components/form/InputRange";
import { TimeSpent } from "../../place.types";

export default function PlaceFilterTimeSpentGroup() {
  const t = useTranslations("place.filter.components.time-spent");
  const [values, setValues] = useState<TimeSpent>({ min: 0, max: 0 });

  const handleChange = (values: TimeSpent) => {};

  return (
    <>
      <p className="text-sm text-gray-500 mb-4">{t("description")}</p>
      <InputRange onChange={handleChange} values={values} />
    </>
  );
}
