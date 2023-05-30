import { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export type IBanner = {
  image?: string;
  title?: string;
};

const Banner: FC<IBanner> = ({ image, title }) => {
  return (
    <section className="relative animation">
      <div className="aspect-auto w-full h-[220px] 2xl:w-[1920px] min-[2000px]:w-full 2xl:h-[320px]">
        {image && (
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt=""
            width={1920}
            height={320}
          />
        )}
      </div>
      <div className="bg-th-black-overlay w-full h-full absolute left-0 top-0"></div>
      {title && (
        <div className="absolute top-8 left-4 md:top-12 md:left-12 xl:left-32 2xl:top-20 2xl:left-64">
          <div className="bg-th-red-500 h-[5px] w-10 mb-8"></div>
          <h1 className="text-4xl md:text-6xl md:leading-[72px] text-white font-semibold max-w-[859px] whitespace-break-spaces">
            {title}
          </h1>
        </div>
      )}
    </section>
  );
};

export default Banner;
