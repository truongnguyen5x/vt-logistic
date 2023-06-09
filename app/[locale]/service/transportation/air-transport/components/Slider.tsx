"use client";
import styles from "../style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";
import {
  ComponentAirFeature,
  ComponentServiceFeature,
  Maybe,
} from "@generated/graphql";
import { FC } from "react";
import useWindowSize from "@hooks/use-window-size";
import { getPrefixImageUrl } from "@ultility/index";
import AnimatedNumber from "@components/AnimatedNumber";

interface Props {
  features?: Maybe<Array<Maybe<ComponentAirFeature>>>;
}

const SliderAirTransport: FC<Props> = ({ features }) => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  return (
    <Slider
      speed={500}
      autoplay
      infinite
      dots={isMobile}
      arrows={false}
      className={styles.sliderFeature}
      slidesToScroll={1}
      slidesToShow={isMobile ? 2 : 3}
    >
      {features?.map((feature, index) => (
        <div key={index} className="!flex flex-col justify-end items-center">
          <div className="h-40 md:h-52 animation">
            <Image
              src={getPrefixImageUrl(feature?.icon?.data?.attributes?.url)}
              width={isMobile ? 110 : 150}
              height={isMobile ? 110 : 150}
              alt=""
            />
          </div>
          <p
            className="text-th-gray-500 text-2xl font-semibold animation"
            data-animation="fade-in-up"
          >
            {feature?.title}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default SliderAirTransport;
