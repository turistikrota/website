import { useTranslations } from "next-intl";
import { DesktopInfoBox } from "~/components/accessibility/InfoBox";
import { usePlaceFilter } from "../../place.filter";
import PlaceFilterTimeSpentGroup from "../shared/PlaceFilterTimeSpentGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopTimeSpentGroup() {
  const t = useTranslations("place.filter.components.time-spent");
  const { query, push } = usePlaceFilter();

  const clearTimeSpent = () => {
    query.filter.timeSpent = undefined;
    push(query);
  };

  return (
    <PlaceDesktopFilterSection>
      <PlaceDesktopHead>
        <PlaceDesktopHead.Title className="flex">
          {t("title")}
          <DesktopInfoBox>{t("description")}</DesktopInfoBox>
        </PlaceDesktopHead.Title>
        {!!query.filter.distance && (
          <PlaceDesktopHead.Clear onClear={clearTimeSpent} />
        )}
      </PlaceDesktopHead>
      <PlaceFilterTimeSpentGroup />
    </PlaceDesktopFilterSection>
  );
}
