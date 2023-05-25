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
    <div className="absolute top-0 w-full">
      <div className="mt-20 flex items-center justify-between mx-5">
        <div
          className={`flex items-center gap-20 py-[60px] px-[50px] bg-th-white-overlay rounded-2xl backdrop-blur-sm ${styles.borderCustom}`}
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
        <div className="flex flex-col justify-center items-end min-h-[800px] pl-[108px] border-l border-th-gray-310">
          {!!assets?.length &&
            assets.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.timeline === selected?.timeline
                    ? "text-4xl text-th-red-500 font-semibold after:h-8 after:w-8 after:bg-th-red-500 after:-left-[125px] after:top-0"
                    : "font-medium text-[25px] text-th-gray-330 after:h-4 after:w-4 after:bg-th-gray-330 after:-left-[117px] after:top-2"
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
  );
};

export default Content;
