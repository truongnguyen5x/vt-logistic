import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { FC, Fragment } from "react";
import { IPostCategory } from "@type/post";
import PaginationNews from "./PaginationNews";
import NewsSideRight, { HelpCard } from "./NewsSideRight";
import { Card, SideCard } from "./Cards";
import { NewsEntity } from "@generated/graphql";
import SearchInput from "./Search";
import SliderNew from "./SliderNew";

type Props = {
  banner: string;
  title: string;
  breadcrumbs: Array<{
    title: string;
    link: string;
    active?: boolean;
  }>;
  category: IPostCategory;
  sideData: {
    hot_news: NewsEntity[] | null;
  };
  data: NewsEntity[] | null;
  totalCount: number;
};

const ListNewsPage: FC<Props> = ({
  banner,
  title,
  breadcrumbs,
  category,
  sideData,
  data,
  totalCount,
}) => {
  return (
    <Fragment>
      <Banner image={banner} title={title} />
      <div className="container px-4 mx-auto md:mt-40 lg:mt-0 mb-10 lg:mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="my-6 xl:mb-20" />
        <div className="flex items-start justify-between lg:gap-10 2xl:gap-[100px] max-lg:hidden">
          <div className="flex flex-col gap-[50px]">
            {!!data?.length
              ? data.map((item, index) => (
                  <Card
                    post={item}
                    key={index}
                    className="animation"
                    category={category}
                  />
                ))
              : "No data"}
          </div>
          <NewsSideRight category={category} data={sideData} />
        </div>
        <div className="lg:hidden mb-6">
          <SearchInput placeholder="Nhập từ khóa" />
        </div>
        <div className="flex flex-col gap-6 lg:hidden">
          {!!data?.length
            ? data.map((item, index) => (
                <SideCard
                  post={item}
                  key={index}
                  className="animation"
                  category={category}
                />
              ))
            : "No data"}
        </div>
        <PaginationNews totalCount={totalCount} />
        <div className="lg:hidden">
          <SliderNew
            title="Tin nổi bật"
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
