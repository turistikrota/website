import PlaceDesktopCityGroup from "./PlaceDesktopCityGroup";
import PlaceDesktopDistanceGroup from "./PlaceDesktopDistanceGroup";
import PlaceDesktopFeatureGroup from "./PlaceDesktopFeatureGroup";
import PlaceDesktopQueryGroup from "./PlaceDesktopQueryGroup";

export default function PlaceFilterSection() {
  return (
    <>
      <PlaceDesktopCityGroup />
      <PlaceDesktopDistanceGroup />
      <PlaceDesktopFeatureGroup />
      <PlaceDesktopQueryGroup />
    </>
  );
}
