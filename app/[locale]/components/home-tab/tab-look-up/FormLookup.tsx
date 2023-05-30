"use client";
import { FC, Fragment, useState } from "react";

import Image from "next/image";
import styles from "@app/styles.module.scss";
import LocationImg from "@assets/images/icons/location.svg";
import MapImg from "@assets/images/icons/map.svg";
import SearchImg from "@assets/images/icons/search_light.svg";
import { ILocation } from "@type/location";
import { SERVICE_TRANSPORT } from "@ultility/constant";
import ServiceUnavailable from "./ServiceUnvailable";
import ServiceAvailable from "./ServiceAvailable";
import ChooseLocation from "./ChooseLocation";
import {
  ComponentHomeHomeLookup,
  ComponentHomeServiceContact,
  Maybe,
} from "@generated/graphql";

interface FormLookupProps {
  /*************************
   *  INDEX == 0: EXPRESS  *
   * INDEX == 1: FOWARDING *
   *  INDEX == 2: VẬN TẢI  *
   *************************/
  index: number;
  listCountry: ILocation[];
  listProvince: ILocation[];
  contacts?: Maybe<Array<Maybe<ComponentHomeServiceContact>>>;
  lookup?: Maybe<ComponentHomeHomeLookup>;
}

export type ISTATUS = "NONE" | "UNAVAILABLE" | "AVAILABLE";

const FormLookup: FC<FormLookupProps> = ({
  index,
  listCountry,
  listProvince,
  contacts,
  lookup,
}) => {
  const [status, setStatus] = useState<ISTATUS>("NONE");

  return (
    <div className={styles.lookupBackground}>
      {status == "UNAVAILABLE" && (
        <ServiceUnavailable onBack={() => setStatus("NONE")} />
      )}
      {status == "AVAILABLE" && (
        <ServiceAvailable
          onBack={() => setStatus("NONE")}
          contacts={contacts}
        />
      )}
      {status == "NONE" && (
        <ChooseLocation
          listCountry={listCountry}
          listProvince={listProvince}
          index={index}
          setStatus={setStatus}
          lookup={lookup}
        />
      )}
    </div>
  );
};

export default FormLookup;
