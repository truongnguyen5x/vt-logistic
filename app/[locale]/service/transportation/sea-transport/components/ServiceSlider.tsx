"use client";
import styles from "../style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  ComponentCommonPriceTable,
  ComponentSeaService,
  Maybe,
} from "@generated/graphql";
import { FC, Fragment, useState } from "react";
import ResgisterPopup from "@components/register-popup";
import useWindowSize from "@hooks/use-window-size";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import { getPrefixImageUrl } from "@ultility/index";
import Image from "next/image";
import { ILocale } from "@type/locale";
import { IService } from "@type/common";
import { useTranslations } from "next-intl";
import PricePopup from "@components/price-popup";

interface Props {
  services?: Maybe<Array<ComponentSeaService>>;
  locale: ILocale;
}

const ServiceSlider: FC<Props> = ({ services, locale }) => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPricePopup, setOpenPricePopup] = useState(false);
  const [typeService, setTypeService] = useState<IService>("sea_transport");
  const [price, setPrice] = useState<ComponentCommonPriceTable>();
  const t = useTranslations("sea");

  const handleCreateOrder = (type?: string | null) => {
    setTypeService(type as IService);
    setOpenPopup(true);
  };

  const handleShowPrice = (_price: ComponentCommonPriceTable) => {
    setPrice(_price);
    setOpenPricePopup(true);
  };

  return (
    <Fragment>
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
              <p className="font-semibold text-2xl text-th-gray-500 mt-9 mb-6 h-16">
                {feature.title}
              </p>
              <div className="!h-56 md:lm-5 lg:ml-10">
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
              <div className="flex max-md:flex-col justify-center gap-5 md:gap-10 w-full mt-6">
                <button
                  className="btn-red-small max-md:w-full"
                  onClick={() => handleCreateOrder(feature.name)}
                >
                  {t("create_order")}
                </button>
                <button
                  className="btn-gray-outlined-small max-md:w-full"
                  onClick={() =>
                    handleShowPrice(
                      feature.price_table as ComponentCommonPriceTable
                    )
                  }
                >
                  {t("pricing")}
                </button>
              </div>
            </div>
          ))}
      </Slider>
      <ResgisterPopup
        open={openPopup}
        setOpen={setOpenPopup}
        type={typeService}
        locale={locale as ILocale}
      />
      <PricePopup
        open={openPricePopup}
        setOpen={setOpenPricePopup}
        buttonTxt={t("pricing")}
        title={price?.title || ""}
        priceImage={price?.price_image?.data?.attributes?.url || ""}
      />
    </Fragment>
  );
};

export default ServiceSlider;
