"use client";
import { FC, Fragment, useRef, useState } from "react";
import { ILookupContent } from ".";
import clsx from "clsx";
import styles from "@app/styles.module.scss";
import Slider from "react-slick";
import FormLookup from "./components/FormLookup";

interface TabLookupProps {
  content: ILookupContent;
}

const TabLookup: FC<TabLookupProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);
  const slickRef = useRef<Slider>(null);

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
        initialSlide={0}
        draggable={false}
        afterChange={onSliderChange}
        slidesToShow={1}
        slidesToScroll={1}
        dots={false}
        speed={500}
      >
        <FormLookup content={content} index={0} />
        <FormLookup content={content} index={1} />
        <FormLookup content={content} index={0} />
      </Slider>
    </Fragment>
  );
};

export default TabLookup;
