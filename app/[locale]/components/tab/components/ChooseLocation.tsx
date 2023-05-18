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

interface ChooseLocationProps {
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

const ChooseLocation: FC<ChooseLocationProps> = ({
  content,
  index,
  listCountry,
  listProvince,
}) => {
  const [status, setStatus] = useState<"NONE" | "UNAVAILABLE" | "AVAILABLE">(
    "NONE"
  );

  const handleCheckService = () => {};

  return (
    <div className={styles.lookUpBg}>
      <Image
        className="absolute right-2 top-2"
        src={content.imgs[index]}
        alt=""
        width={685}
        height={423}
      />
      <div className="container mx-auto flex justify-start p-12">
        <div className="flex flex-col gap-2">
          <div className="flex gap-7 mb-9">
            <div className={styles.formIconWp}>
              <Image alt="location" src={LocationImg} width={38} height={38} />
              <div></div>
              <Image alt="location" src={MapImg} width={38} height={38} />
            </div>
            <div className="flex-grow flex flex-col gap-4">
              <p className={styles.formTitle}>{content.from}</p>
              <CustomSelect>
                {index == SERVICE_TRANSPORT.TRANSPORT
                  ? listProvince.map((province, idx) => (
                      <option key={idx} value={province.id}>
                        {province.name}
                      </option>
                    ))
                  : listCountry.map((country, idx) => (
                      <option key={idx} value={country.id}>
                        {country.name}
                      </option>
                    ))}
              </CustomSelect>
              <div className="mt-6" />
              <p className={styles.formTitle}>{content.to}</p>
              <CustomSelect>
                {index == SERVICE_TRANSPORT.TRANSPORT
                  ? listProvince.map((province, idx) => (
                      <option key={idx} value={province.id}>
                        {province.name}
                      </option>
                    ))
                  : listCountry.map((country, idx) => (
                      <option key={idx} value={country.id}>
                        {country.name}
                      </option>
                    ))}
              </CustomSelect>
            </div>
          </div>
          <button className="btn-red" onClick={handleCheckService}>
            {content.btn}
            <Image src={SearchImg} alt="search" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseLocation;
