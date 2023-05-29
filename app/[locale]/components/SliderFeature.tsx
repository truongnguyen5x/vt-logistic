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
  contents?: Maybe<Array<Maybe<ComponentHomeFeature>>>;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={[className].join(" ")} style={style} onClick={onClick}>
      <Image src={RightArrowImg} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={[className].join(" ")} style={style} onClick={onClick}>
      <Image src={LeftArrowImg} alt="" />
    </div>
  );
}

const SliderFeature: FC<SliderFeatureProps> = ({ contents }) => {
  const { width, isTablet, isMobile, isDesktop } = useWindowSize();

  return (
    <section className={styles.feature}>
      <div className="container mx-auto">
        <Slider
          dots={false}
          infinite
          className="animation"
          speed={500}
          slidesToShow={isDesktop ? 4 : 2}
          slidesToScroll={1}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          {contents &&
            contents.map((i, index: number) => (
              <div
                key={index}
                className={[styles.featureItem, "animation"].join(" ")}
              >
                <Image
                  src={getPrefixImageUrl(i?.icon?.data?.attributes?.url)}
                  alt=""
                  width={50}
                  height={50}
                />
                <p>{i?.title}</p>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderFeature;
