"use client";
import { FC, Fragment, useEffect, useRef, useState } from "react";

import clsx from "clsx";
import styles from "@app/styles.module.scss";
import Slider from "react-slick";
import FormLookup from "./FormLookup";
import { useLocale } from "next-intl";
import { ILocale } from "@type/locale";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { ILocation } from "@type/location";
import {
  ComponentHomeHomeLookup,
  ComponentHomeServiceContact,
  CountryEntity,
  Maybe,
  ProvinceEntity,
} from "@generated/graphql";
import {
  getCountryQueryString,
  getProvinceQueryString,
} from "@graphql/location";
import { gql } from "@generated/gql";
import { getLanguageForApi } from "@ultility/index";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

interface TabLookupProps {
  lookups?: Maybe<Array<Maybe<ComponentHomeHomeLookup>>>;
}

const TabLookup: FC<TabLookupProps> = ({ lookups }) => {
  const params = useParams();
  const slickRef = useRef<Slider>(null);

  const [activeTab, setActiveTab] = useState(0);

  const { data: dataCountry } = useSuspenseQuery(gql(getCountryQueryString), {
    variables: { locale: getLanguageForApi(params.locale as ILocale) },
  });
  const { data: dataProvince } = useSuspenseQuery(gql(getProvinceQueryString), {
    variables: { locale: getLanguageForApi(params.locale as ILocale) },
  });

  const listCountry = dataCountry.countries?.data.map(
    (i: CountryEntity) => i.attributes
  );
  const listProvince = dataProvince.provinces?.data.map(
    (i: ProvinceEntity) => i.attributes
  );

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
            className={clsx(styles.lookupHeader, {
              [styles.lookupHeaderSelected]: activeTab == i,
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
        className="slider-selectable"
        initialSlide={0}
        draggable={false}
        afterChange={onSliderChange}
        slidesToShow={1}
        slidesToScroll={1}
        dots={false}
        speed={500}
        adaptiveHeight
      >
        <FormLookup
          listCountry={listCountry as ILocation[]}
          listProvince={listProvince as ILocation[]}
          lookup={lookups?.[0]}
          index={0}
        />
        <FormLookup
          listCountry={listCountry as ILocation[]}
          listProvince={listProvince as ILocation[]}
          index={1}
          lookup={lookups?.[1]}
        />
        <FormLookup
          listCountry={listCountry as ILocation[]}
          listProvince={listProvince as ILocation[]}
          index={2}
          lookup={lookups?.[2]}
        />
      </Slider>
    </Fragment>
  );
};

export default TabLookup;
