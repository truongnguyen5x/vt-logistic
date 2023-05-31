"use client";
import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapContact = () => {
  return (
    <div className="relative px-4 md:px-6 xl:px-0 xl:absolute right-0 top-0 w-[343px] mx-auto md:w-[600px] xl:w-[520px] 2xl:w-[960px] h-[659px] max-xl:mb-16">
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
