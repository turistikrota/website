import { useTranslations } from "next-intl";
import { DesktopInfoBox } from "~/components/accessibility/InfoBox";
import { usePlaceFilter } from "../../place.filter";
import PlaceFilterQueryGroup from "../shared/PlaceFilterQueryGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopQueryGroup() {
  const t = useTranslations("place.filter.components.query");
  const { query, push } = usePlaceFilter();

  const clearQuery = () => {
    query.filter.query = undefined;
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
          <PlaceDesktopHead.Clear onClear={clearQuery} />
        )}
      </PlaceDesktopHead>
      <PlaceFilterQueryGroup />
    </PlaceDesktopFilterSection>
  );
}
