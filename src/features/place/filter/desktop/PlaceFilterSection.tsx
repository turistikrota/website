import PlaceDesktopCityGroup from "./PlaceDesktopCityGroup";
import PlaceDesktopDistanceGroup from "./PlaceDesktopDistanceGroup";
import PlaceDesktopFeatureGroup from "./PlaceDesktopFeatureGroup";

export default function PlaceFilterSection() {
  return (
    <>
      <PlaceDesktopCityGroup />
      <PlaceDesktopDistanceGroup />
      <PlaceDesktopFeatureGroup />
    </>
  );
}
