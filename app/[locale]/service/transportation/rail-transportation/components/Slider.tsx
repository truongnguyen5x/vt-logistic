"use client";
import styles from "../style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";
import { ComponentServiceFeature, Maybe } from "@generated/graphql";
import { FC } from "react";
import useWindowSize from "@hooks/use-window-size";
import { getPrefixImageUrl } from "@ultility/index";
import AnimatedNumber from "@components/AnimatedNumber";

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
      dots={!isDesktop}
      arrows={false}
      className={styles.sliderFeature}
      slidesToScroll={1}
      slidesToShow={isDesktop ? 3 : isTablet ? 2 : 1}
    >
      {features?.map((feature, index) => (
        <div key={index} className={styles.featureWp}>
          <Image
            src={getPrefixImageUrl(feature?.icon?.data?.attributes?.url)}
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
              <AnimatedNumber n={feature?.number} /> {feature?.object}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderRail;
