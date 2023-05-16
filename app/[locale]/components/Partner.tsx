"use client";
import { FC, Fragment } from "react";
import Slider from "react-slick";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import LeftArrowImg from "@assets/images/icons/arrow_left.svg";
import RightArrowImg from "@assets/images/icons/arrow_right.svg";

export type IPartner = {
  imgs: string[];
  title: string;
};
interface PartnerProps {
  assets: IPartner;
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

const Partner: FC<PartnerProps> = ({ assets }) => {
  return (
    <Fragment>
      <div className="container mx-auto">
        <p className="section-name animate__animated  animate__fadeInDown animate__delay-1s ">
          {assets.title}
        </p>
        <div className="mb-16" />
        <Slider
          speed={500}
          dots={false}
          autoplay
          infinite
          slidesToShow={5}
          slidesToScroll={5}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          {assets.imgs.map((i, idx) => (
            <div key={idx} className={styles.partnerItem}>
              <Image alt="" src={i} width={253} height={165} />
            </div>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default Partner;
