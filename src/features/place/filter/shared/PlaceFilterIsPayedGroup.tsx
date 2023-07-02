import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  DesktopInfoBox,
  MobileInfoBox,
} from "~/components/accessibility/InfoBox";
import Checkbox from "~/components/form/Checkbox";
import { useIsDesktop } from "~/hooks/dom/useWindowSize";
import { usePlaceFilter } from "../../place.filter";

export default function PlaceFilterIsPayedGroup() {
  const [isPayed, setIsPayed] = useState<boolean>(false);
  const t = useTranslations("place.filter.components.is-payed");
  const { query, push } = usePlaceFilter();
  const isDesktop = useIsDesktop();

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
      <MobileInfoBox>{t("description")}</MobileInfoBox>
      <Checkbox
        name="isPayed"
        id="isPayed"
        onChange={handleChange}
        value={isPayed}
        reversed={!isDesktop}
      >
        {t("label")}
        <DesktopInfoBox>{t("description")}</DesktopInfoBox>
      </Checkbox>
    </>
  );
}
