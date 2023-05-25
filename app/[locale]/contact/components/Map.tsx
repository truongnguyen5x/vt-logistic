"use client";
import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapContact = () => {
  return (
    <div className="absolute right-0 top-0 w-[600px] 2xl:w-[960px] h-[659px]">
      <Map
        defaultCenter={[21.0313, 105.7785]}
        defaultZoom={12}
        minZoom={12}
        maxZoom={12}
        boxClassname="animation"
      >
        <Marker width={50} anchor={[21.0313, 105.7785]} />
      </Map>
    </div>
  );
};

export default React.memo(MapContact);
