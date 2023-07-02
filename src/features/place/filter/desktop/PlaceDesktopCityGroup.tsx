import PlaceFilterCityGroup from "../shared/PlaceFilterCityGroup";
import PlaceDesktopHead from "./PlaceDesktopHead";

export default function PlaceDesktopCityGroup() {
  return (
    <div className="border-b p-4">
      <PlaceDesktopHead>
        <PlaceDesktopHead.Title>City</PlaceDesktopHead.Title>
        <PlaceDesktopHead.Clear />
      </PlaceDesktopHead>
      <PlaceFilterCityGroup className="max-h-60 mt-2" />
    </div>
  );
}
