"use client";

import AnimatedNumber from "@components/AnimatedNumber";
import { ComponentServiceFeature } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
import styles from "@app/service/style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  
type Props = {
  features: Array<ComponentServiceFeature> | null;
};
const SliderFeature: FC<Props> = ({ features }) => {
  return (
    <Slider
      infinite
      autoplay
      speed={500}
      slidesToShow={2}
      slidesToScroll={1}
      arrows={false}
      className="animation custom-slider w-[343px] mx-auto md:!hidden"
    >
      {!!features &&
        !!features.length &&
        features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center animation">
            {!!feature.icon && !!feature.icon.data?.attributes?.url && (
              <Image
                src={getPrefixImageUrl(feature.icon.data?.attributes?.url)}
                width={64}
                height={64}
                alt=""
                className="mx-auto"
              />
            )}
            <p className={`${styles.myServiceTitle} text-center`}>
              +
              <AnimatedNumber n={feature.number} /> {feature.object}
            </p>
            <p className="text-th-white text-base text-center font-medium mt-3 mb-9">
              {feature.title}
            </p>
          </div>
        ))}
    </Slider>
  );
};

export default SliderFeature;
