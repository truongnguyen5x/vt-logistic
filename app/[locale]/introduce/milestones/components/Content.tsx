"use client";

import Image from "next/image";
import { FC, useState } from "react";
import styles from "./styles.module.scss";
import Calendar from "@assets/images/icons/calendar-red.svg";
import { ComponentIntroduceMilestones } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";

type Props = {
  assets: ComponentIntroduceMilestones[] | null;
};

const Content: FC<Props> = ({ assets }) => {
  const [selected, onSelect] = useState<ComponentIntroduceMilestones | null>(
    !!assets?.length ? assets[0] : null
  );

  return (
    <>
      <div className="absolute top-0 w-full max-md:hidden">
        <div className="mt-10 lg:mt-20 flex items-center justify-between lg:mx-5">
          <div
            className={`flex items-center max-lg:flex-col-reverse gap-10 pr-10 lg:gap-20 lg:py-[60px] lg:px-[50px] bg-th-white-overlay rounded-2xl backdrop-blur-sm ${styles.borderCustom}`}
          >
            <div className="p-8 rounded-2xl bg-th-gray-280 animation">
              <Image
                src={getPrefixImageUrl(selected?.image?.data?.attributes?.url)}
                alt=""
                height={320}
                width={533}
                className="rounded-md"
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
              {!!selected?.datetime && (
                <p className="section-name-left mb-12 animation">
                  {selected.datetime}
                </p>
              )}
              <div className="text-th-gray-400 font-semibold text-[25px] max-w-[400px] break-words animation">
                {selected?.content}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end min-h-[800px] pl-14 lg:pl-[108px] border-l border-th-gray-310">
            {!!assets?.length &&
              assets.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.timeline === selected?.timeline
                      ? "text-4xl text-th-red-500 font-semibold after:h-8 after:w-8 after:bg-th-red-500 after:-left-[72px] after:lg:-left-[125px] after:top-0"
                      : "font-medium text-[25px] text-th-gray-330 after:h-4 after:w-4 after:bg-th-gray-330 after:-left-[65px] after:lg:-left-[117px] after:top-2"
                  } animation mb-10 last:mb-0 h-10
            relative min-w-[85px] cursor-pointer text-end after:content-[''] after:absolute after:rounded-full transition-all`}
                  data-animation-delay={`${0.3 + 0.1 * index}s`}
                  onClick={() => onSelect(item)}
                >
                  {item.timeline}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="md:hidden mt-10">
        {!!assets?.length &&
          assets.map((item, index) => (
            <div
              key={index}
              className="animation mb-6 last:mb-0"
              data-animation-delay={`${0.3 + 0.1 * index}s`}
            >
              <div className="text-2xl text-th-red-500 font-semibold animation">
                {item.timeline}
              </div>
              {!!item.datetime && (
                <span className="mr-1">{item.datetime}:</span>
              )}
              <span>{item.content}</span>
              <div className="max-lg:w-full">
                <Image
                  src={getPrefixImageUrl(item.image?.data?.attributes?.url)}
                  alt=""
                  width={1280}
                  height={343}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Content;
