import { useTranslations } from "next-intl";
import { DesktopInfoBox } from "~/components/accessibility/InfoBox";
import { usePlaceFilter } from "../../place.filter";
import PLaceFilterFeatureGroup from "../shared/PlaceFilterFeatureGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopFeatureGroup() {
  const t = useTranslations("place.filter.components.features");
  const { query, push } = usePlaceFilter();

  const clearFeatures = () => {
    query.filter.featureUUIDs = undefined;
    push(query);
  };

  return (
    <PlaceDesktopFilterSection>
      <PlaceDesktopHead>
        <PlaceDesktopHead.Title className="flex">
          {t("text")}
          <DesktopInfoBox>{t("description")}</DesktopInfoBox>
        </PlaceDesktopHead.Title>
        {!!query.filter.featureUUIDs && (
          <PlaceDesktopHead.Clear onClear={clearFeatures} />
        )}
      </PlaceDesktopHead>
      <PLaceFilterFeatureGroup />
    </PlaceDesktopFilterSection>
  );
}
