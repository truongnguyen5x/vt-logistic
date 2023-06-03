import { useTranslations } from "next-intl";
import { FC } from "react";
import { SideCard } from "./Cards";
import { Enum_News_Type, NewsEntity } from "@generated/graphql";
import SearchInput from "./Search";
import Link from "next/link";
import clsx from "clsx";

type IDataHotNews = {
  hot_news: NewsEntity[] | null;
};

type Props = {
  category: Enum_News_Type;
  data: IDataHotNews;
};

const NewsSideRight: FC<Props> = ({ category, data }) => {
  const t = useTranslations(category);

  return (
    <div>
      <h3 className="text-th-gray-320 text-3xl lg:text-4xl font-semibold mb-4 animation">
        {t("search")}
      </h3>
      <SearchInput placeholder={t("placeholder")} />
      <h3 className="text-th-gray-400 text-3xl lg:text-4xl font-semibold mt-[50px] mb-6 animation">
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
      <HelpCard category={category} />
    </div>
  );
};

export default NewsSideRight;

export const HelpCard: FC<{ category: Enum_News_Type }> = ({ category }) => {
  const t = useTranslations(category);

  return (
    <div className="p-6 md:p-8 bg-th-gray-220 border border-th-gray-200 min-w-[320px] max-w-[490px] mt-8 md:mt-[50px]">
      <h5 className="font-semibold text-xl text-th-gray-320 mb-3 animation">
        {t("help_title")}
      </h5>
      <p className="text-base text-th-gray-300 animation mb-10 md:mb-16">
        {t("help_content")}
      </p>
      <Link
        href={"/contact"}
        className={clsx(
          "animation bg-th-red-500 text-white font-medium rounded-[50px] leading-[18px]",
          "px-4 py-2 md:px-10 xl:py-5",
          "text-xl md:text-2xl"
        )}
      >
        {t("contact")}
      </Link>
    </div>
  );
};
