import { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import clsx from "clsx";

export type IBanner = {
  image?: string;
  title?: string;
};

const Banner: FC<IBanner> = ({ image, title }) => {
  return (
    <section className="relative animation h-52 xl:h-64 2xl:h-72">
      {image && (
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt=""
          width={1920}
          height={320}
        />
      )}
      <div className="bg-th-black-overlay w-full h-full absolute left-0 top-0"></div>
      {title && (
        <div className="absolute top-0 left-0 right-0 bottom-0 container mx-auto flex flex-col justify-center">
          <div className="bg-th-red-500 h-[5px] w-10 mb-8"></div>
          <h1
            className={clsx(
              "xl:leading-[72px] text-white font-semibold max-w-[859px] whitespace-break-spaces",
              "text-4xl lg:text-5xl xl:text-6xl",
              "mb-8 xl:mb-12"
            )}
          >
            {title}
          </h1>
        </div>
      )}
    </section>
  );
};

export default Banner;
