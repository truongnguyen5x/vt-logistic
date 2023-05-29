import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FC, Fragment } from "react";
import Search from "@assets/images/icons/search-status.svg";
import { IPost, IPostCategory } from "@type/post";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import { SideCard } from "./Cards";
import { NewsEntity } from "@generated/graphql";
import SearchInput from "./Search";
import Link from "next/link";

type IDataHotNews = {
  hot_news: NewsEntity[] | null;
};

type Props = {
  category: IPostCategory;
  data: IDataHotNews;
};

const NewsSideRight: FC<Props> = ({ category, data }) => {
  const t = useTranslations(category);

  return (
    <div>
      <h3 className="text-th-gray-320 text-4xl font-semibold mb-4 animation">
        {t("search")}
      </h3>
      <SearchInput placeholder={t("placeholder")} />
      <h3 className="text-th-gray-400 text-4xl font-semibold mt-[50px] mb-6">
        {t("hot_news")}
      </h3>
      <div className="flex flex-col gap-[50px]">
        {!!data.hot_news?.length &&
          data.hot_news.map((item, index) => (
            <SideCard
              key={index}
              post={item}
              className="animation"
              category={category}
            />
          ))}
      </div>
      <div className="p-8 bg-th-gray-220 border border-th-gray-200 max-w-[490px] mt-[50px]">
        <h5 className="font-semibold text-xl text-th-gray-320 mb-3 animation">
          {t("help_title")}
        </h5>
        <p className="text-base text-th-gray-300 animation mb-16">
          {t("help_content")}
        </p>
        <Link href={'/contact'} className="animation px-10 py-5 bg-th-red-500 text-white font-medium text-2xl rounded-[50px] leading-[18px]">
          {t("contact")}
        </Link>
      </div>
    </div>
  );
};

export default NewsSideRight;
