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
  ComponentHomeBanner,
  Maybe,
  UploadFileRelationResponseCollection,
} from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import useWindowSize from "@hooks/use-window-size";
import Link from "next-intl/link";

interface Props {
  banners?: Maybe<Array<Maybe<ComponentHomeBanner>>>;
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

const SliderHome: FC<Props> = ({ banners }) => {
  const { isDesktop } = useWindowSize();

  return (
    <section className={styles.sliderHomeSection}>
      <Slider
        dots={isDesktop}
        infinite
        arrows={isDesktop}
        className="animation"
        speed={500}
        slidesToShow={1}
        autoplay
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {!!banners &&
          banners.map((banner, idx) => (
            <Link href={banner?.url || "#"} key={idx}>
              <Image
                src={getPrefixImageUrl(banner?.image?.data?.attributes?.url)}
                className={styles.sliderHomeItem}
                alt=""
                width={1920}
                height={450}
              />
            </Link>
          ))}
      </Slider>
    </section>
  );
};

export default SliderHome;
