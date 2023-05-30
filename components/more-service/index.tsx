"use client"

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

interface MoreServiceProps {
  services:
    | Array<ComponentServiceTransportation>
    | ComponentTruckingOtherService[]
    | null;
  more: string;
}

const MoreService: FC<MoreServiceProps> = ({ services, more }) => {
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
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className={styles.serviceItemImg}>
            {!!service && service.image?.data?.attributes?.url && (
              <Image
                src={getPrefixImageUrl(service.image?.data?.attributes?.url)}
                className="w-full object-cover"
                width={474}
                height={520}
                alt=""
              />
            )}
            <Link href={!!service && !!service.link ? service.link : "#"}>
              <button className="btn-red absolute -bottom-7 right-0 max-lg:text-base max-lg:w-40 max-lg:h-12 max-lg:-bottom-5">
                {more}
                <Image src={RightImg} alt="next" width={20} height={20} />
              </button>
            </Link>
          </div>
          <div className={styles.serviceItemTxt}>
            <p>{!!service ? service.title : ""}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="grid grid-cols-3 mt-14 gap-12 mb-24 max-md:hidden">
        {!!services &&
          !!services.length &&
          services.map((service, idx) => content(service, idx))}
      </div>
      <Slider
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        arrows={false}
        className="animation custom-slider mx-[25px] mt-6 md:!hidden"
      >
        {!!services &&
          !!services.length &&
          services.map((service, idx) => content(service, idx))}
      </Slider>
    </>
  );
};

export default MoreService;
