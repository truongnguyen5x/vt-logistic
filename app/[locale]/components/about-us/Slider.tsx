"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@app/styles.module.scss";
import { FC } from "react";
import { IAbout } from "./";
import LeftArrowImg from "@assets/images/icons/arrow_left.svg";
import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import Image from "next/image";
import AnimatedNumber from "@components/AnimatedNumber";

interface Props {
  content: IAbout[];
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.arrowRightSlider].join(" ")}
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
      className={[className, styles.arrowLeftSlider].join(" ")}
      style={style}
      onClick={onClick}
    >
      <Image src={LeftArrowImg} alt="" />
    </div>
  );
}

const SliderIntro: FC<Props> = ({ content }) => {
  return (
    <div className="animation" data-animation-delay="0.4s">
      <Slider
        infinite
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {content.map((i, idx) => (
          <div key={idx} className={styles.aboutItem}>
            <p>
              {i.is_plus ? "+" : ""}
              <AnimatedNumber n={i.heading} />
            </p>
            <div className={styles.aboutItem1}>
              <div className={styles.aboutItemHead}>
                <p>
                  {i.is_plus ? "+" : ""}
                  <AnimatedNumber n={i.heading} />
                </p>
                <p>{i.subject}</p>
              </div>
              <p>{i.detail}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderIntro;
