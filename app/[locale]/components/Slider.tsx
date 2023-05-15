"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles.module.scss";
import { FC } from "react";
import Image from "next/image";

interface Props {
  images: string[];
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const SliderHome: FC<Props> = ({ images }) => {
  return (
    <section className={styles.sliderWp}>
      <Slider {...settings} arrows={false}>
        {images.map((i, idx) => (
          <Image
            src={i}
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
