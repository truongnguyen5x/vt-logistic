"use client";
import { FC } from "react";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import { getPrefixImageUrl } from "@ultility/index";
import { ComponentHomeFeature, Maybe } from "@generated/graphql";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrowImg from "@assets/images/icons/arrow_left.svg";
import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import useWindowSize from "@hooks/use-window-size";

interface SliderFeatureProps {
  features?: Maybe<Array<Maybe<ComponentHomeFeature>>>;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <Image src={RightArrowImg} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <Image src={LeftArrowImg} alt="" />
    </div>
  );
}

const SliderFeature: FC<SliderFeatureProps> = ({ features }) => {
  const { isTablet, isDesktop } = useWindowSize();

  return (
    <section className={styles.featureSection}>
      <div className="container mx-auto">
        <Slider
          dots={false}
          infinite
          className="animation"
          speed={500}
          slidesToShow={isDesktop ? 4 : isTablet ? 3 : 2}
          slidesToScroll={1}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          {features &&
            features.map((feature, index: number) => (
              <div
                key={index}
                className={[styles.featureItem, "animation"].join(" ")}
              >
                <Image
                  src={getPrefixImageUrl(feature?.icon?.data?.attributes?.url)}
                  alt=""
                  width={50}
                  height={50}
                />
                <p>{feature?.title}</p>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderFeature;
