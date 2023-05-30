import Truncate from "@components/Truncate";
import { ComponentIntroduceMission } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";

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
        <div className="container px-4 md:mx-auto relative md:-bottom-[363px] bg-white md:pt-14 md:px-10 xl:pt-20 xl:px-20 xl:pb-12 xl:shadow-[0px_5px_20px_rgba(0,0,0,0.1)] animation">
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
              className="flex items-center justify-between max-w-[800px] mx-auto px-5 border-solid border-th-gray-50 border border-x-0 mt-6 md:mt-[55px] animation"
              data-animation-delay="0.4s"
            >
              {assets.properties.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-4 md:min-w-[181px] max-md:flex-col py-6">
                    <span className="w-4 h-4 bg-gradient-red"></span>
                    <div>{item?.title}</div>
                  </div>
                  {!!assets.properties?.length &&
                    index < assets.properties.length - 1 && (
                      <span className="h-[104px] md:h-[72px] ml-10 md:ml-[55px] border-l border-th-gray-50"></span>
                    )}
                </div>
              ))}
            </div>
          )}
          {!!assets?.introduce?.length && (
            <div
              className="grid grid-cols-1 items-baseline justify-between md:grid-cols-2 xl:grid-cols-4 md:gap-[50px] mt-6 md:mt-[55px] animation"
              data-animation-delay="0.5s"
            >
              {assets.introduce.map((item, index) => (
                <div key={index} className="max-xl:flex max-xl:gap-4 max-xl:mb-4 max-xl:last:mb-0 max-xl:items-center">
                  <Image
                    src={getPrefixImageUrl(item?.icon?.data?.attributes?.url)}
                    alt=""
                    width={64}
                    height={64}
                  />
                  <div className="text-th-gray-500 font-bold text-[25px] xl:mt-[22px] max-w-[305px] xl:min-w-[274px]">
                    {item?.title}
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
