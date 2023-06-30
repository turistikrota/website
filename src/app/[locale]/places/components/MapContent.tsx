"use client";

import { type LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import MapDefaultConfig from "~/components/map/MapDefaultConfig";

const DynamicMap = dynamic(() => import("~/components/map/MapDynamic"), {
  ssr: false,
});

const position: LatLngTuple = [41.0082, 28.9784];

export default function MapContent() {
  return (
    <>
      <DynamicMap position={position}>
        <MapDefaultConfig />
      </DynamicMap>
    </>
  );
}
