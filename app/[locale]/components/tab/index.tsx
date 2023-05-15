"use client";
import { Fragment, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "@app/styles.module.scss";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import TabMyService from "./TabMyService";
import Slider from "react-slick";
import TabLookup from "./TabLookup";

export type IServiceItem = {
  img: string;
  title: string;
  subs?: string[];
};

export type ILookupContent = {
  title: string[];
  imgs: string[];
  from: string;
  to: string;
  service_available: string;
  service_available_des: string;
  service_unavailable: string;
  contacts: Array<{ name: string; phone: string }>;
  btn: string;
};

export type IAboutContent = {
  tabs: Array<{ title: string; img: string }>;
  service_tab: IServiceItem[];
  service_bg: string;
  all_service: string;
  lookup_tab: ILookupContent;
};

const AboutInfoTab = ({ data }: { data: IAboutContent }) => {
  //TODO: 1
  const [activeTab, setActiveTab] = useState(1);
  const slickRef = useRef<Slider>(null);

  const handleChangeTab = (index: number) => {
    setActiveTab(index);
    slickRef.current?.slickGoTo(index);
  };
  const onSliderChange = (index: number) => {
    setActiveTab(index);
  };
  return (
    <Fragment>
      <div className="flex justify-center gap-4 mt-20 mb-20">
        {data.tabs.map((i, idx) => (
          <div
            key={idx}
            onClick={() => handleChangeTab(idx)}
            className={clsx(
              " flex items-center justify-between",
              styles.tabWp,
              {
                [styles.selectedTab]: activeTab == idx,
              }
            )}
          >
            <div>
              <p>
                {i.title}
                <Image
                  src={activeTab == idx ? RightImg : RightDarkImg}
                  width={28}
                  height={28}
                  alt=""
                />
              </p>
            </div>
            <Image src={i.img} alt="lookup" width={56} height={56} />
          </div>
        ))}
      </div>
      <Slider
        ref={slickRef}
        arrows={false}
        //TODO: 1
        initialSlide={1}
        draggable={false}
        afterChange={onSliderChange}
        slidesToShow={1}
        slidesToScroll={1}
        dots={false}
        speed={500}
      >
        <TabLookup content={data.lookup_tab} />
        <TabMyService
          background={data.service_bg}
          contents={data.service_tab}
          allService={data.all_service}
        />
      </Slider>
    </Fragment>
  );
};

export default AboutInfoTab;
