"use client";
import styles from "../style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";
import { ComponentServiceFeature, Maybe } from "@generated/graphql";
import { FC } from "react";
import useWindowSize from "@hooks/use-window-size";

interface Props {
  features?: Maybe<Array<Maybe<ComponentServiceFeature>>>;
}

const SliderRail: FC<Props> = ({ features }) => {
  const { isDesktop, isTablet } = useWindowSize();
  return (
    <Slider
      speed={500}
      autoplay
      infinite
      dots={false}
      arrows={false}
      className={styles.sliderFeature}
      slidesToScroll={1}
      slidesToShow={isDesktop ? 3 : 1}
    >
      {features?.map((feature, index) => (
        <div key={index} className={styles.featureWp}>
          AAA
        </div>
      ))}
    </Slider>
  );
};

export default SliderRail;
