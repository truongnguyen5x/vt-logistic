"use client";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import { ILookupContent } from "../";
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

interface TabLookupProps {
  content: ILookupContent;
}

const TabLookup: FC<TabLookupProps> = ({ content }) => {
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
            {content.title[i]}
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
          content={content}
          index={0}
        />
        <FormLookup
          listCountry={listCountry}
          listProvince={listProvince}
          content={content}
          index={1}
        />
        <FormLookup
          listCountry={listCountry}
          listProvince={listProvince}
          content={content}
          index={2}
        />
      </Slider>
    </Fragment>
  );
};

export default TabLookup;
