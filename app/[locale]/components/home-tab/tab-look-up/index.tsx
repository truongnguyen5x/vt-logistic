"use client";
import { FC, Fragment, useEffect, useRef, useState } from "react";

import clsx from "clsx";
import styles from "@app/styles.module.scss";
import Slider from "react-slick";
import FormLookup from "./FormLookup";
import { fetchFromClient } from "@api/client";
import { useLocale } from "next-intl";
import { ILocale } from "@configs/i18n";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { ICountry, IProvince } from "@type/location";
import {
  ComponentHomeLookupHomeLookup,
  ComponentServiceContactServiceContact,
  Maybe,
} from "@generated/graphql";

interface TabLookupProps {
  lookups?: Maybe<Array<Maybe<ComponentHomeLookupHomeLookup>>>;
  contacts?: Maybe<Array<Maybe<ComponentServiceContactServiceContact>>>;
}

const TabLookup: FC<TabLookupProps> = ({ lookups, contacts }) => {
  const params = useParams();
  const slickRef = useRef<Slider>(null);

  const [activeTab, setActiveTab] = useState(0);
  const [listCountry, setListCountry] = useState<ICountry[]>([]);
  const [listProvince, setListProvince] = useState<IProvince[]>([]);

  useEffect(() => {
    fetchFromClient<ICountry[]>("country", params.locale as ILocale).then(
      (res) => {
        setListCountry(res);
      }
    );
    fetchFromClient<IProvince[]>("province", params.locale as ILocale).then(
      (res) => {
        setListProvince(res);
      }
    );
  }, []);

  const handleChangeTab = (idx: number) => {
    setActiveTab(idx);
    slickRef.current?.slickGoTo(idx);
  };
  const onSliderChange = (index: number) => {
    setActiveTab(index);
  };
  return (
    <Fragment>
      <div className="container mx-auto flex">
        {[0, 1, 2].map((i) => (
          <div
            className={clsx(styles.tabHeaderLookup, {
              [styles.tabSelectLookup]: activeTab == i,
            })}
            onClick={() => handleChangeTab(i)}
            key={i}
          >
            {lookups?.[i]?.title}
          </div>
        ))}
      </div>

      <Slider
        ref={slickRef}
        arrows={false}
        className="custom-slider"
        initialSlide={0}
        draggable={false}
        afterChange={onSliderChange}
        slidesToShow={1}
        slidesToScroll={1}
        dots={false}
        speed={500}
      >
        <FormLookup
          listCountry={listCountry}
          listProvince={listProvince}
          lookup={lookups?.[0]}
          contacts={contacts}
          index={0}
        />
        <FormLookup
          listCountry={listCountry}
          listProvince={listProvince}
          index={1}
          lookup={lookups?.[1]}
          contacts={contacts}
        />
        <FormLookup
          listCountry={listCountry}
          listProvince={listProvince}
          index={2}
          lookup={lookups?.[2]}
          contacts={contacts}
        />
      </Slider>
    </Fragment>
  );
};

export default TabLookup;
