"use client";

import Leaflet, { type LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import MapDefaultConfig from "~/components/map/MapDefaultConfig";
import { ContentProps } from "../ContentSwitcher";

const DynamicMap = dynamic(() => import("~/components/map/MapDynamic"), {
  ssr: false,
});

const position: LatLngTuple = [41.0082, 28.9784];

type MapProps = {
  position: LatLngTuple;
};

export default function MapContent({}: ContentProps & MapProps) {
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
