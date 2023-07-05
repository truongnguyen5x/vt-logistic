"use client";
import React from "react";
import { Map, Marker } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";

const MAPTILER_ACCESS_TOKEN = "yviQnWhzph2Vh5cdZUXz";

const maptilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, "dataviz-light");

const MapContact = () => {
  return (
    <div className="relative px-4 md:px-6 xl:px-0 xl:absolute right-0 top-0 w-[343px] mx-auto md:w-[600px] xl:w-[520px] 2xl:w-[960px] h-[659px] max-xl:mb-16">
      <Map
        provider={maptilerProvider}
        dprs={[1, 2]}
        defaultCenter={[21.048829371080853, 105.74216030868638]}
        defaultZoom={16}
        boxClassname="animation"
      >
        <Marker width={50} anchor={[21.048829371080853, 105.74216030868638]} />
      </Map>
    </div>
  );
};

export default React.memo(MapContact);
