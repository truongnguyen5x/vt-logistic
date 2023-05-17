import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FC, Fragment } from "react";
import Search from "@assets/images/icons/search-status.svg";
import { SideCard } from "./Cards";
import { IPost } from "@type/post";

type Props = {
  post: IPost[];
};

const NewsSideRight: FC<Props> = ({ post }) => {
  const t = useTranslations("news");

  return (
    <div>
      <h3 className="text-th-gray-320 text-4xl font-semibold mb-4">
        {t("search")}
      </h3>
      <div className="relative h-14 w-full bg-th-gray-220 px-6 py-4">
        <input
          placeholder={t("placeholder")}
          className="pr-12 bg-th-gray-220 w-full focus-visible:outline-none h-full"
        />
        <Image
          src={Search}
          alt=""
          width={24}
          height={24}
          className="absolute right-6 top-4"
        />
      </div>
      <h3 className="text-th-gray-400 text-4xl font-semibold mt-[50px] mb-6">
        {t("hot_news")}
      </h3>
      <div className="flex flex-col gap-[50px]">
        {!!post.length &&
          post.map((item, index) => <SideCard key={index} post={item} />)}
      </div>
      <div className="p-8 bg-th-gray-220 border border-th-gray-200 max-w-[490px] mt-[50px]">
        <h5 className="font-semibold text-xl text-th-gray-320 mb-3">
          {t("help_title")}
        </h5>
        <p className="text-base text-th-gray-300">{t("help_content")}</p>
        <button className="mt-[50px] px-10 py-5 bg-th-red-500 text-white font-medium text-2xl rounded-[50px] leading-[18px]">
          {t("contact")}
        </button>
      </div>
    </div>
  );
};

export default NewsSideRight;