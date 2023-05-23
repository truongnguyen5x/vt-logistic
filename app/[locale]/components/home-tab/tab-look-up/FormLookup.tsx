"use client";
import { FC, Fragment, useState } from "react";
import { ILookupContent } from "..";
import Image from "next/image";
import styles from "@app/styles.module.scss";
import LocationImg from "@assets/images/icons/location.svg";
import MapImg from "@assets/images/icons/map.svg";
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

export type ISTATUS = "NONE" | "UNAVAILABLE" | "AVAILABLE";

const FormLookup: FC<FormLookupProps> = ({
  content,
  index,
  listCountry,
  listProvince,
}) => {
  const [status, setStatus] = useState<ISTATUS>("NONE");

  return (
    <div className={styles.lookUpBg}>
      {status == "UNAVAILABLE" && (
        <ServiceUnavailable title={content.service_unavailable} />
      )}
      {status == "AVAILABLE" && <ServiceAvailable content={content} />}
      {status == "NONE" && (
        <ChooseLocation
          listCountry={listCountry}
          listProvince={listProvince}
          content={content}
          index={index}
          setStatus={setStatus}
        />
      )}
    </div>
  );
};

export default FormLookup;
