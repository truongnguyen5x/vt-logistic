"use client";

import { FC } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";
import {
  ComponentServiceTransportation,
  ComponentTruckingOtherService,
} from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "@hooks/use-window-size";
import clsx from "clsx";
import LeftArrowImg from "@assets/images/icons/arrow_left_4.svg";
import RightArrowImg from "@assets/images/icons/arrow_right_4.svg";
import { useLocale } from "next-intl";
import { ILocale } from "@type/locale";

interface MoreServiceProps {
  services:
    | Array<ComponentServiceTransportation>
    | ComponentTruckingOtherService[]
    | null;
  more: string;
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

const MoreService: FC<MoreServiceProps> = ({ services, more }) => {
  const { isDesktop, isTablet } = useWindowSize();
  const content = (
    service:
      | ComponentServiceTransportation
      | ComponentTruckingOtherService
      | null,
    idx: number
  ) => {
    return (
      <div
        key={idx}
        className={[styles.serviceItem, "animation"].join(" ")}
        data-animation-delay="0.4s"
      >
        <Link
          href={service?.link || "#"}
          className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
        >
          <div className={styles.serviceItemImg}>
            {!!service && service.image?.data?.attributes?.url && (
              <div className={styles.serviceItemImgWp}>
                <Image
                  src={getPrefixImageUrl(service.image?.data?.attributes?.url)}
                  className="w-full h-full object-cover"
                  width={474}
                  height={520}
                  alt=""
                />
              </div>
            )}
            <button className="btn-red absolute -bottom-7 right-0 max-lg:text-base max-lg:h-12 max-lg:-bottom-5">
              {more}
              <Image src={RightImg} alt="next" width={20} height={20} />
            </button>
          </div>
          <div className={styles.serviceItemTxt}>
            <p>{!!service ? service.title : ""}</p>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div className="mt-14 mb-24">
      <Slider
        infinite
        speed={500}
        slidesToShow={isDesktop ? 3 : isTablet ? 2 : 1}
        slidesToScroll={1}
        autoplay
        dots={!isDesktop}
        arrows={isDesktop}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        className={clsx("animation slider-selectable mt-6", styles.slider)}
      >
        {!!services &&
          !!services.length &&
          services.map((service, idx) => content(service, idx))}
      </Slider>
    </div>
  );
};

export default MoreService;
