"use client";
import Slider from "react-slick";
import Image from "next/image";
import { FC, useState } from "react";
import styles from "./styles.module.scss";
import Calendar from "@assets/images/icons/calendar-red.svg";
import { ComponentIntroduceMilestones } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "@hooks/use-window-size";

type Props = {
  assets: ComponentIntroduceMilestones[] | null;
};

const Content: FC<Props> = ({ assets }) => {
  // const [selected, onSelect] = useState<ComponentIntroduceMilestones | null>(
  //   !!assets?.length ? assets[0] : null
  // );
  const { isDesktop, isMobile } = useWindowSize();

  return (
    <div className={styles.slider}>
      <Slider
        infinite
        autoplay
        vertical={!isMobile}
        verticalSwiping={!isMobile}
        adaptiveHeight={isMobile}
        speed={500}
        arrows={false}
        dots
        slidesToShow={1}
        slidesToScroll={1}
        customPaging={(i) =>
          isMobile ? <p></p> : <p>{assets?.[i].timeline}</p>
        }
      >
        {!!assets?.length &&
          assets.map((milestone, index) => (
            <div
              key={index}
              className={clsx(
                "!flex items-center max-md:flex-col-reverse bg-th-white-overlay rounded-2xl backdrop-blur-sm",
                "gap-10 xl:gap-20",
                "p-7 xl:py-[60px] xl:px-[50px]",
                "my-8 md:my-14",
                styles.borderCustom
              )}
            >
              <div className="p-8 rounded-2xl bg-th-gray-280 animation">
                <Image
                  src={getPrefixImageUrl(
                    milestone?.image?.data?.attributes?.url
                  )}
                  alt=""
                  height={320}
                  width={533}
                  className="rounded-md animation"
                />
              </div>
              <div>
                <Image
                  src={Calendar}
                  alt=""
                  width={56}
                  height={56}
                  className="mb-6 animation"
                />
                {milestone?.datetime && (
                  <p className="section-name-left mb-12 animation">
                    {milestone.datetime}
                  </p>
                )}
                <div
                  data-animation="fade-in-up"
                  className="text-th-gray-400 font-semibold text-lg lg:text-[25px] max-w-[400px] break-words animation line-clamp-3"
                >
                  {milestone?.content}
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Content;
