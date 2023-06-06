import AnimatedNumber from "@components/AnimatedNumber";
import Truncate from "@components/Truncate";
import { ComponentIntroduceMission } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";
import styles from "../style.module.scss";

type Props = {
  assets: ComponentIntroduceMission | null;
  className?: string;
};
const Mission: FC<Props> = ({ assets, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={className}>
      <div className="relative">
        <div className="w-full h-full absolute max-md:hidden">
          <Image
            className="w-full h-full object-cover animation"
            src={getPrefixImageUrl(assets?.image?.data?.attributes?.url)}
            alt=""
            width={1920}
            height={500}
          />
        </div>
        <div
          className={clsx(
            "container relative md:-bottom-[363px] bg-white animation",
            "px-4 md:pt-14 md:px-10 xl:pt-20 xl:px-20 xl:pb-12",
            "md:mx-auto",
            "xl:shadow-[0px_5px_20px_rgba(0,0,0,0.1)]"
          )}
        >
          <div className="flex items-center justify-start md:justify-center">
            <p
              className="section-name mb-6 animation max-md:after:left-16"
              data-animation-delay="0.3s"
            >
              {t("mission")}
            </p>
          </div>
          {!!assets?.description && <Truncate content={assets?.description} />}
          {!!assets?.properties?.length && (
            <div
              className="flex items-center justify-center max-w-[800px] mx-auto px-5 border-solid border-th-gray-50 border border-x-0 mt-6 md:mt-[55px] animation"
              data-animation-delay="0.4s"
            >
              {assets.properties.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex items-center justify-center gap-4 md:min-w-[181px] max-md:flex-col py-6 border-l first:border-none border-th-gray-50",
                    "px-4 md:px-10 lg:px-16"
                  )}
                >
                  <span className="w-4 h-4 bg-gradient-red"></span>
                  <div className={styles.text}>{item?.title}</div>
                </div>
              ))}
            </div>
          )}
          {!!assets?.introduce?.length && (
            <div
              className={clsx(
                "items-baseline justify-between md:gap-[50px]",
                "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
                "mt-6 md:mt-[55px]"
              )}
            >
              {assets.introduce.map((item, index) => (
                <div
                  key={index}
                  className="flex lg:max-xl:ml-8 md:items-start gap-5 max-md:ml-12 max-xl:mb-16 max-xl:last:mb-0"
                >
                  <Image
                    src={getPrefixImageUrl(item?.icon?.data?.attributes?.url)}
                    alt=""
                    width={64}
                    height={64}
                  />

                  <div className="flex flex-col">
                    <p className="text-th-red-500 font-bold text-3xl">
                      + <AnimatedNumber n={item?.number || 0} />
                    </p>
                    <p
                      className="text-th-gray-500 font-bold text-xl animation"
                      data-animation="tracking-in-expand"
                      data-animation-delay="0.5s"
                    >
                      {item?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mission;
