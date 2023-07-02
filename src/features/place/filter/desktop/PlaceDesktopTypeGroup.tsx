import { useTranslations } from "next-intl";
import { DesktopInfoBox } from "~/components/accessibility/InfoBox";
import { usePlaceFilter } from "../../place.filter";
import PlaceFilterTypeGroup from "../shared/PlaceFilterTypeGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopTypeGroup() {
  const t = useTranslations("place.filter.components.types");
  const { query, push } = usePlaceFilter();

  const clearTypes = () => {
    query.filter.types = undefined;
    push(query);
  };

  return (
    <PlaceDesktopFilterSection>
      <PlaceDesktopHead>
        <PlaceDesktopHead.Title className="flex">
          {t("text")}
          <DesktopInfoBox>{t("description")}</DesktopInfoBox>
        </PlaceDesktopHead.Title>
        {!!query.filter.distance && (
          <PlaceDesktopHead.Clear onClear={clearTypes} />
        )}
      </PlaceDesktopHead>
      <PlaceFilterTypeGroup />
    </PlaceDesktopFilterSection>
  );
}
