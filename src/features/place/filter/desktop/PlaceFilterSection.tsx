import PlaceDesktopCityGroup from "./PlaceDesktopCityGroup";
import PlaceDesktopDistanceGroup from "./PlaceDesktopDistanceGroup";
import PlaceDesktopFeatureGroup from "./PlaceDesktopFeatureGroup";
import PlaceDesktopIsPayedGroup from "./PlaceDesktopOtherGroup";
import PlaceDesktopQueryGroup from "./PlaceDesktopQueryGroup";
import PlaceDesktopTypeGroup from "./PlaceDesktopTypeGroup";

export default function PlaceFilterSection() {
  return (
    <>
      <PlaceDesktopCityGroup />
      <PlaceDesktopDistanceGroup />
      <PlaceDesktopTypeGroup />
      <PlaceDesktopFeatureGroup />
      <PlaceDesktopQueryGroup />
      <PlaceDesktopIsPayedGroup />
    </>
  );
}
