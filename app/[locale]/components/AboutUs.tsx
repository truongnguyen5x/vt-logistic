"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@app/styles.module.scss";
import { FC } from "react";

import clsx from "clsx";

import LeftArrowImg from "@assets/images/icons/arrow_left.svg";
import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import Image from "next/image";
import AnimatedNumber from "@components/AnimatedNumber";
import { ComponentHomeAbout, Maybe } from "@generated/graphql";
import useWindowSize from "@hooks/use-window-size";

interface Props {
  content?: Maybe<Array<Maybe<ComponentHomeAbout>>>;
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

const AboutUs: FC<Props> = ({ content }) => {
  const { isDesktop, isTablet } = useWindowSize();
  return (
    <div
      className={clsx("animation", styles.aboutUs)}
      data-animation-delay="0.4s"
    >
      <Slider
        infinite
        speed={500}
        arrows={isDesktop}
        dots={!isDesktop}
        slidesToShow={isDesktop ? 3 : isTablet ? 2 : 1}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {!!content &&
          content.map((i, idx) => (
            <div key={idx}>
              <div className={styles.aboutItem}>
                <div className={styles.aboutItemHead}>
                  <div className="relative inline-block">
                    {i?.is_plus ? "+" : ""}
                    <AnimatedNumber n={i?.heading || 0} />
                    <div className={styles.floatTxt}>
                      <p>
                        {i?.is_plus ? "+" : ""}
                        <AnimatedNumber n={i?.heading || 0} />
                      </p>
                    </div>
                  </div>
                  <p>{i?.subject}</p>
                </div>
                <p>{i?.detail}</p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default AboutUs;
