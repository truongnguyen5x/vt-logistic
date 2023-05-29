import { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export type IBanner = {
  image?: string;
  title?: string;
};

const Banner: FC<IBanner> = ({ image, title }) => {
  const t = useTranslations("introduce");

  return (
    <section className="relative animation">
      <div className="aspect-auto w-full h-full">
        {image && (
          <Image
            className="w-full object-cover"
            src={image}
            alt=""
            width={1920}
            height={320}
          />
        )}
      </div>
      <div className="bg-th-black-overlay w-full h-full absolute left-0 top-0"></div>
      {title && (
        <div className="absolute left-32 top-20 2xl:left-64">
          <div className="bg-th-red-500 h-[5px] w-10 mb-8"></div>
          <h1 className="text-6xl leading-[72px] text-white font-semibold max-w-[859px] whitespace-break-spaces">{title}</h1>
        </div>
      )}
    </section>
  );
};

export default Banner;
