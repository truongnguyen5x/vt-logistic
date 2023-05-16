import Truncate from "@components/Truncate";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";

type Props = {
  data: {
    image: string;
    description: string;
    properties: string[];
    introduce: Array<{
      image: string;
      content: string;
    }>;
  };
  className?: string;
};
const Mission: FC<Props> = ({ data, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={className}>
      <div className="relative">
        <div className="w-full h-full absolute">
          <Image src={data.image} alt="" width={1920} height={500} />
        </div>
        <div className="container mx-auto relative -bottom-[363px] bg-white pt-20 px-20 pb-12 shadow-[0px_5px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-center">
            <p className="section-name mb-6">{t("mission")}</p>
          </div>
          {!!data.description && <Truncate content={data.description} />}
          {!!data.properties.length && (
            <div className="flex items-center justify-between max-w-[800px] mx-auto px-5 border-solid border-th-gray-50 border border-x-0 mt-[55px]">
              {data.properties.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-4 min-w-[181px] py-6">
                    <span className="w-4 h-4 bg-gradient-red"></span>
                    <div>{item}</div>
                  </div>
                  {index < data.properties.length - 1 && (
                    <span className="h-[72px] ml-[55px] border-l border-th-gray-50"></span>
                  )}
                </div>
              ))}
            </div>
          )}
          {!!data.introduce.length && (
            <div className="flex items-baseline justify-between gap-[50px] mt-[55px]">
              {data.introduce.map((item, index) => (
                <div>
                  <Image src={item.image} alt="" width={64} height={64} />
                  <div className="text-th-gray-500 font-bold text-[25px] mt-[22px] max-w-[305px] min-w-[274px]">
                    {item.content}
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
