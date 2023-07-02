import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { City, findCityByCoordinates } from "~/static/location/cities";
import { usePlaceFilter } from "../../place.filter";
import PlaceFilterCityGroup from "../shared/PlaceFilterCityGroup";
import PlaceDesktopFilterSection from "./PlaceDesktopFilterSection";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopCityGroup() {
  const [city, setCity] = useState<City | null>(null);
  const t = useTranslations("place.filter.components.city-select");
  const { query, push } = usePlaceFilter();

  useEffect(() => {
    if (query.filter.coordinates) {
      setCity(findCityByCoordinates(query.filter.coordinates));
    }
  }, [query]);

  const clearCity = () => {
    query.filter.coordinates = undefined;
    push(query);
  };
  return (
    <PlaceDesktopFilterSection>
      <PlaceDesktopHead>
        <PlaceDesktopHead.Title>{t("text")}</PlaceDesktopHead.Title>
        {!!city && <PlaceDesktopHead.Clear onClear={clearCity} />}
      </PlaceDesktopHead>
      <PlaceFilterCityGroup className="max-h-60 mt-2" />
    </PlaceDesktopFilterSection>
  );
}
