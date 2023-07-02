import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MobileInfoBox } from "~/components/accessibility/InfoBox";
import InputRange from "~/components/form/InputRange";
import { useIsDesktop } from "~/hooks/dom/useWindowSize";
import { usePlaceFilter } from "../../place.filter";
import { TimeSpent } from "../../place.types";

export default function PlaceFilterTimeSpentGroup() {
  const t = useTranslations("place.filter.components.time-spent");
  const [firstSet, setFirstSet] = useState<boolean>(false);
  const [values, setValues] = useState<TimeSpent>({ min: 0, max: 0 });
  const { query, push } = usePlaceFilter();
  const isDesktop = useIsDesktop();

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
      <MobileInfoBox>{t("description")}</MobileInfoBox>
      <InputRange
        onChange={handleChange}
        values={values}
        min={0}
        size={isDesktop ? "md" : undefined}
      />
    </>
  );
}
