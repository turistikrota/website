import { useTranslations } from "next-intl";
import { usePlaceFilter } from "../../place.filter";
import PlaceFilterIsPayedGroup from "../shared/PlaceFilterIsPayedGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopOtherGroup() {
  const t = useTranslations("place.filter.components.other");
  const { query, push } = usePlaceFilter();

  const clearIsPayed = () => {
    query.filter.isPayed = undefined;
    push(query);
  };

  return (
    <PlaceDesktopFilterSection>
      <PlaceDesktopHead>
        <PlaceDesktopHead.Title>{t("title")}</PlaceDesktopHead.Title>
        {!!query.filter.distance && (
          <PlaceDesktopHead.Clear onClear={clearIsPayed} />
        )}
      </PlaceDesktopHead>
      <PlaceFilterIsPayedGroup />
    </PlaceDesktopFilterSection>
  );
}
