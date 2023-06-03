"use client";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import ArrowListImg from "@assets/images/icons/arrow_list.svg";
import { FC, useState } from "react";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import Link from "next-intl/link";
// import Link from "next/link";
import { useRouter } from "next-intl/client";
import { ComponentHomeHomeService, Maybe } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "@hooks/use-window-size";

interface TabMyServiceProps {
  services?: Maybe<Array<Maybe<ComponentHomeHomeService>>>;
}

const TabMyService: FC<TabMyServiceProps> = ({ services }) => {
  const t = useTranslations("home");
  const router = useRouter();
  const { isTablet, isDesktop } = useWindowSize();

  const [bgImg, setBgImg] = useState<string | undefined>(
    services?.[0]?.background?.data?.attributes?.url
  );

  const handleClickAllService = () => {
    router.push("/service");
  };

  return (
    <div className="container mx-auto">
      <div className={styles.homeServiceSection}>
        <Image
          src={getPrefixImageUrl(bgImg)}
          alt=""
          width={1530}
          height={417}
          className="object-cover"
        />

        <Slider
          infinite
          dots={!isDesktop}
          className="animation"
          speed={500}
          arrows={false}
          slidesToScroll={isDesktop ? 5 : isTablet ? 3 : 1}
          slidesToShow={isDesktop ? 5 : isTablet ? 3 : 1}
          afterChange={(index: number) =>
            setBgImg(services?.[index]?.background?.data?.attributes?.url)
          }
        >
          {services?.map((service, idx) => (
            <div
              key={idx}
              className={styles.serviceItem}
              onMouseEnter={() =>
                setBgImg(service?.background?.data?.attributes?.url)
              }
              onClick={() =>
                setBgImg(service?.background?.data?.attributes?.url)
              }
            >
              <div className={styles.serviceItemInner}>
                <Link href={service?.url || "#"} className={styles.serviceLink}>
                  <Image
                    src={getPrefixImageUrl(
                      service?.icon?.data?.attributes?.url
                    )}
                    alt=""
                    width={60}
                    height={60}
                  />
                  <p className={service?.subs ? "mb-3" : ""}>
                    {service?.title}
                  </p>
                </Link>
                {!!service?.subs &&
                  service?.subs.map((sub, idx2) => (
                    <Link
                      href={sub?.url || "#"}
                      key={idx2}
                      className={styles.serviceDescription}
                    >
                      <Image
                        src={ArrowListImg}
                        alt="arrow"
                        width={13}
                        height={13}
                      />

                      <p>{sub?.title}</p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-center mt-8 mb-20">
        <button className="btn-red" onClick={handleClickAllService}>
          {t("all_service")}
          <Image src={RightImg} width={28} height={28} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TabMyService;
