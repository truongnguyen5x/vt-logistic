"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles.module.scss";
import { FC } from "react";
import Image from "next/image";
import LeftArrowImg from "@assets/images/icons/arrow_left_3.svg";
import RightArrowImg from "@assets/images/icons/arrow_right_3.svg";
import {
  Maybe,
  UploadFileRelationResponseCollection,
} from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import useWindowSize from "@hooks/use-window-size";

interface Props {
  images?: UploadFileRelationResponseCollection | null;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.arrowRightSlider1].join(" ")}
      style={style}
      onClick={onClick}
    >
      <Image src={RightArrowImg} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.arrowLeftSlider1].join(" ")}
      style={style}
      onClick={onClick}
    >
      <Image src={LeftArrowImg} alt="" />
    </div>
  );
}

const SliderHome: FC<Props> = ({ images }) => {
  const { isDesktop } = useWindowSize();
  return (
    <section className={styles.sliderWp}>
      <Slider
        dots={isDesktop}
        infinite
        arrows={isDesktop}
        className="animation"
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {!!images &&
          images.data.map((i, idx) => (
            <Image
              src={getPrefixImageUrl(i?.attributes?.url)}
              key={idx}
              className={styles.banner}
              alt=""
              width={1920}
              height={450}
            />
          ))}
      </Slider>
    </section>
  );
};

export default SliderHome;
