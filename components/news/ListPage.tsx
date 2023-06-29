import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { FC, Fragment } from "react";
import PaginationNews from "./PaginationNews";
import NewsSideRight, { HelpCard } from "./NewsSideRight";
import { Card, SideCard } from "./Cards";
import { Enum_News_Type, NewsEntity } from "@generated/graphql";
import SearchInput from "./Search";
import SliderNew from "./SliderNew";

import Image from "next/image";
import NoResult from "@components/NoResult";

type Props = {
  banner: string;
  title: string;
  breadcrumbs: Array<{
    title: string;
    link?: string;
  }>;
  category: Enum_News_Type;
  sideData: {
    hot_news: NewsEntity[] | null;
  };
  data: NewsEntity[] | null;
  totalCount: number;
  searchPlaceholder: string;
  noDataTxt: string;
  hotNewsTxt: string;
};

const ListNewsPage: FC<Props> = ({
  banner,
  title,
  breadcrumbs,
  category,
  sideData,
  data,
  totalCount,
  searchPlaceholder,
  noDataTxt,
  hotNewsTxt,
}) => {
  return (
    <Fragment>
      <Banner image={banner} title={title} />
      <div className="container mx-auto mb-10 lg:mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="my-6 xl:mb-20" />
        <div className="md:hidden mb-6">
          <SearchInput placeholder={searchPlaceholder} />
        </div>
        <div className="flex items-start justify-between md:gap-6 lg:gap-10 2xl:gap-[100px] max-md:flex-grow">
          <div className="flex flex-col gap-[50px] basis-2/3 max-lg:hidden">
            {!!data?.length ? (
              data.map((item, index) => (
                <Card
                  post={item}
                  key={index}
                  className="animation"
                  category={category}
                />
              ))
            ) : (
              <NoResult txt={noDataTxt} />
            )}
          </div>
          <div className="flex flex-col gap-6 lg:hidden basis-2/3 max-md:flex-grow">
            {!!data?.length ? (
              data.map((item, index) => (
                <SideCard
                  post={item}
                  key={index}
                  className="animation"
                  category={category}
                />
              ))
            ) : (
              <NoResult txt={noDataTxt} />
            )}
          </div>
          <div className="max-md:hidden basis-1/3">
            <NewsSideRight category={category} data={sideData} />
          </div>
        </div>
        <PaginationNews totalCount={totalCount} />
        <div className="md:hidden">
          <SliderNew
            title={hotNewsTxt}
            data={sideData.hot_news}
            category={category}
          />
          <HelpCard category={category} />
        </div>
      </div>
    </Fragment>
  );
};

export default ListNewsPage;
