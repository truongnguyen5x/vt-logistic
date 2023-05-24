"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@app/styles.module.scss";
import { FC } from "react";

import LeftArrowImg from "@assets/images/icons/arrow_left.svg";
import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import Image from "next/image";
import AnimatedNumber from "@components/AnimatedNumber";
import { ComponentHomeAbout, Maybe } from "@generated/graphql";

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
        {!!content &&
          content.map((i, idx) => (
            <div key={idx} className={styles.aboutItem}>
              <p>
                {i?.is_plus ? "+" : ""}
                <AnimatedNumber n={i?.heading || 0} />
              </p>
              <div className={styles.aboutItem1}>
                <div className={styles.aboutItemHead}>
                  <p>
                    {i?.is_plus ? "+" : ""}
                    <AnimatedNumber n={i?.heading || 0} />
                  </p>
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
