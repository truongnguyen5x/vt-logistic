"use client";
import styles from "../style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ComponentSeaService, Maybe } from "@generated/graphql";
import { FC } from "react";
import ResgisterPopup from "@components/register-popup";
import useWindowSize from "@hooks/use-window-size";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import { getPrefixImageUrl } from "@ultility/index";
import Image from "next/image";
import { ILocale } from "@type/locale";

interface Props {
  services?: Maybe<Array<ComponentSeaService>>;
  locale: ILocale;
}

const ServiceSlider: FC<Props> = ({ services, locale }) => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  return (
    <Slider
      speed={500}
      autoplay
      infinite
      dots={!isDesktop}
      arrows={false}
      className={styles.sliderService}
      slidesToScroll={1}
      slidesToShow={isDesktop ? 3 : isTablet ? 2 : 1}
    >
      {!!services &&
        services.map((feature, idx) => (
          <div key={idx} className="!flex flex-col items-center">
            <Image
              width={100}
              height={100}
              src={getPrefixImageUrl(feature.icon?.data?.attributes?.url)}
              alt=""
              className="h-24"
            />
            <p className="font-semibold text-2xl text-th-gray-500 mt-9 mb-6">
              {feature.title}
            </p>
            <div className="!h-56">
              {feature?.properties?.map((prop, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 my-2 animation self-start"
                  data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                >
                  <Image
                    className="mt-2"
                    src={RightDarkImg}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <div className="mr-10">
                    <p className={styles.propertyItem}>{prop?.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="flex justify-between">
              <ResgisterPopup
                type="lcl_sea_transport"
                locale={locale as ILocale}
              />
            </div> */}
          </div>
        ))}
    </Slider>
  );
};

export default ServiceSlider;
