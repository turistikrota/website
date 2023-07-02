import { useTranslations } from "next-intl";
import { DesktopInfoBox } from "~/components/accessibility/InfoBox";
import { usePlaceFilter } from "../../place.filter";
import PlaceFilterDistanceGroup from "../shared/PlaceFilterDistanceGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopDistanceGroup() {
  const t = useTranslations("place.filter.components.distance");
  const { query, push } = usePlaceFilter();

  const clearDistance = () => {
    query.filter.distance = undefined;
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
          <PlaceDesktopHead.Clear onClear={clearDistance} />
        )}
      </PlaceDesktopHead>
      <PlaceFilterDistanceGroup />
    </PlaceDesktopFilterSection>
  );
}
