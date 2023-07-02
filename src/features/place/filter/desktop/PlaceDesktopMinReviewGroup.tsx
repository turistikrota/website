import { useTranslations } from "next-intl";
import { DesktopInfoBox } from "~/components/accessibility/InfoBox";
import { usePlaceFilter } from "../../place.filter";
import PlaceFilterReviewGroup from "../shared/PlaceFilterReviewGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopMinReviewGroup() {
  const t = useTranslations("place.filter.components.review");
  const { query, push } = usePlaceFilter();

  const clearReview = () => {
    query.filter.minReview = undefined;
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
          <PlaceDesktopHead.Clear onClear={clearReview} />
        )}
      </PlaceDesktopHead>
      <PlaceFilterReviewGroup />
    </PlaceDesktopFilterSection>
  );
}
