"use client";
import { FC, Fragment, useState } from "react";
import { ILookupContent } from "..";
import Image from "next/image";
import styles from "@app/styles.module.scss";
import LocationImg from "@assets/images/icons/location.svg";
import MapImg from "@assets/images/icons/map.svg";
import CustomSelect from "@components/custom-select";
import SearchImg from "@assets/images/icons/search_light.svg";
import { ICountry, IProvince } from "@type/location";
import { SERVICE_TRANSPORT } from "@ultility/constant";
import ServiceUnavailable from "./ServiceUnvailable";
import ServiceAvailable from "./ServiceAvailable";
import ChooseLocation from "./ChooseLocation";

interface FormLookupProps {
  content: ILookupContent;
  /*************************
   *  INDEX == 0: EXPRESS  *
   * INDEX == 1: FOWARDING *
   *  INDEX == 2: VẬN TẢI  *
   *************************/
  index: number;
  listCountry: ICountry[];
  listProvince: IProvince[];
}

const STATUS = {
  NONE: "NONE",
  UNAVAILABLE: "UNAVAILABLE",
  AVAILABLE: "AVAILABLE",
};

const FormLookup: FC<FormLookupProps> = ({
  content,
  index,
  listCountry,
  listProvince,
}) => {
  const [status, setStatus] = useState<"NONE" | "UNAVAILABLE" | "AVAILABLE">(
    "NONE"
  );

  if (status == "UNAVAILABLE") {
    return <ServiceUnavailable title={content.service_unavailable} />;
  }
  if (status == "AVAILABLE") {
    return <ServiceAvailable content={content} />;
  }

  return (
    <ChooseLocation
      listCountry={listCountry}
      listProvince={listProvince}
      content={content}
      index={index}
    />
  );
};

export default FormLookup;
