"use client";
import { FC, Fragment, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "@app/styles.module.scss";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import TabMyService from "./TabMyService";
import Slider from "react-slick";
import TabLookup from "./tab-look-up";

import {
  ComponentHomeHomeLookup,
  ComponentHomeHomeService,
  ComponentHomeHomeTab,
  ComponentHomeServiceContact,
  Maybe,
} from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";

interface HomeTabProps {
  tabs?: Maybe<Array<Maybe<ComponentHomeHomeTab>>>;
  services?: Maybe<Array<Maybe<ComponentHomeHomeService>>>;
  lookups?: Maybe<Array<Maybe<ComponentHomeHomeLookup>>>;
  contacts?: Maybe<Array<Maybe<ComponentHomeServiceContact>>>;
}

const HomeTab: FC<HomeTabProps> = ({ tabs, contacts, lookups, services }) => {
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
      <div className="flex justify-center gap-4 mt-20 mb-20 animation">
        {tabs?.map((i, idx) => (
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
                {i?.title}
                <Image
                  src={activeTab == idx ? RightImg : RightDarkImg}
                  width={28}
                  height={28}
                  alt=""
                />
              </p>
            </div>
            <Image
              src={getPrefixImageUrl(i?.image?.data?.attributes?.url)}
              alt="lookup"
              width={56}
              height={56}
            />
          </div>
        ))}
      </div>
      <div className="animation" data-animation-delay="0.4s">
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
          className="custom-slider"
        >
          <TabLookup lookups={lookups} contacts={contacts} />
          <TabMyService services={services} />
        </Slider>
      </div>
    </Fragment>
  );
};

export default HomeTab;
