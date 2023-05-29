"use client";
import {
  ChangeEvent,
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useState,
} from "react";

import Image from "next/image";
import styles from "@app/styles.module.scss";
import LocationImg from "@assets/images/icons/location.svg";
import MapImg from "@assets/images/icons/map.svg";
import CustomAutocomplete from "@components/CustomAutocomplete";
import SearchImg from "@assets/images/icons/search_light.svg";
import { ICountry, IProvince } from "@type/location";
import { SERVICE_TRANSPORT } from "@ultility/constant";
import { ISTATUS } from "./FormLookup";
import { ComponentHomeHomeLookup, Maybe } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import { useTranslations } from "next-intl";

interface ChooseLocationProps {
  lookup?: Maybe<ComponentHomeHomeLookup>;
  /*************************
   *  INDEX == 0: EXPRESS  *
   * INDEX == 1: FOWARDING *
   *  INDEX == 2: VẬN TẢI  *
   *************************/
  index: number;
  listCountry: ICountry[];
  listProvince: IProvince[];
  setStatus: Dispatch<SetStateAction<ISTATUS>>;
}

const ChooseLocation: FC<ChooseLocationProps> = ({
  index,
  listCountry,
  listProvince,
  setStatus,
  lookup,
}) => {
  const t = useTranslations("home");
  const [from, setForm] = useState<string>();
  const [to, setTo] = useState<string>();

  const handleCheckService = () => {
    // console.log("click");
    if (!from || !to) {
      return;
    }
    if (index == SERVICE_TRANSPORT.EXPRESS) {
      if (
        from == "russia" ||
        from == "belarus" ||
        to == "russia" ||
        to == "belarus"
      ) {
        setStatus("UNAVAILABLE");
      } else {
        setStatus("AVAILABLE");
      }
    } else {
      setStatus("AVAILABLE");
    }
  };

  const onChangeForm = (e: string) => {
    setForm(e);
  };

  const onChangeTo = (e: string) => {
    setTo(e);
  };

  return (
    <Fragment>
      <div className={styles.formBg}>
        <Image
          src={getPrefixImageUrl(lookup?.background?.data?.attributes?.url)}
          alt=""
          width={719}
          height={339}
        />
      </div>

      <div className="container mx-auto flex justify-start lg:p-12 flex-col lg:flex-row gap-10 my-10">
        <div className="flex mx-4 lg:mx-0 flex-col gap-2">
          <div className="flex gap-7 mb-9">
            <div className={styles.formIconWp}>
              <Image alt="location" src={LocationImg} width={38} height={38} />
              <div></div>
              <Image alt="location" src={MapImg} width={38} height={38} />
            </div>
            <div className="flex-grow flex flex-col gap-4">
              <p className={styles.formTitle}>{t("from")}</p>
              <CustomAutocomplete
                value={from}
                placeholder={t("select")}
                onChange={onChangeForm}
                options={
                  index == SERVICE_TRANSPORT.TRANSPORT
                    ? listProvince.map((i) => ({ value: i.id, label: i.name }))
                    : listCountry.map((i) => ({ value: i.id, label: i.name }))
                }
              />
              <div className="mt-6" />
              <p className={styles.formTitle}>{t("to")}</p>
              <CustomAutocomplete
                value={to}
                placeholder={t("select")}
                onChange={onChangeTo}
                options={
                  index == SERVICE_TRANSPORT.TRANSPORT
                    ? listProvince.map((i) => ({ value: i.id, label: i.name }))
                    : listCountry.map((i) => ({ value: i.id, label: i.name }))
                }
              />
            </div>
          </div>
          <button
            className="btn-red mx-auto lg:mx-0"
            onClick={handleCheckService}
            disabled={!from || !to}
          >
            {t("lookup")}
            <Image src={SearchImg} alt="search" width={20} height={20} />
          </button>
        </div>
        <div className={styles.formBgMobile}>
          <Image
            src={getPrefixImageUrl(lookup?.background?.data?.attributes?.url)}
            alt=""
            width={719}
            height={339}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ChooseLocation;
