"use client";

import Leaflet, { type LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import MapDefaultConfig from "~/components/map/MapDefaultConfig";

const DynamicMap = dynamic(() => import("~/components/map/MapDynamic"), {
  ssr: false,
});

const position: LatLngTuple = [41.0082, 28.9784];

export default function MapContent() {
  useEffect(() => {
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: "/images/marker-icon.png",
      iconUrl: "/images/marker-icon.png",
      shadowUrl: "",
    });
  }, []);

  return (
    <>
      <DynamicMap position={position}>
        <MapDefaultConfig />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </DynamicMap>
    </>
  );
}
