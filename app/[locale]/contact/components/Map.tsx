"use client";
import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapContact = () => {
  return (
    <Map
      height={1320}
      width={960}
      defaultCenter={[21.0313, 105.7785]}
      defaultZoom={12}
      minZoom={12}
      maxZoom={12}
    >
      <Marker width={50} anchor={[21.0313, 105.7785]} />
    </Map>
  );
};

export default React.memo(MapContact);
