"use client";
import styles from "../style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";
import {
  ComponentSeaFeature,
  ComponentServiceFeature,
  Maybe,
} from "@generated/graphql";
import { FC } from "react";
import useWindowSize from "@hooks/use-window-size";
import { getPrefixImageUrl, numberWithDot } from "@ultility/index";
import AnimatedNumber from "@components/AnimatedNumber";

interface Props {
  features?: Maybe<Array<Maybe<ComponentSeaFeature>>>;
}

const SliderSea: FC<Props> = ({ features }) => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  return (
    <Slider
      speed={500}
      autoplay
      infinite
      dots={!isDesktop}
      arrows={false}
      className={styles.sliderFeature}
      slidesToScroll={1}
      slidesToShow={isMobile ? 1 : 2}
    >
      {features?.map((feature, index) => (
        <div key={index} className={styles.featureWp}>
          <Image
            src={getPrefixImageUrl(feature?.image?.data?.attributes?.url)}
            width={510}
            height={310}
            alt=""
          />
          <div className={styles.overlay}></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 p-10 flex items-start flex-col-reverse">
            <p
              className="text-th-white text-base font-medium animation"
              data-animation="fade-in-up"
            >
              {feature?.title}
            </p>
            <p className={styles.featureTxt}>
              {numberWithDot(feature?.from || 0)} -{" "}
              {numberWithDot(feature?.to || 0)} {feature?.unit}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderSea;
