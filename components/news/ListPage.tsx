import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { FC, Fragment } from "react";
import { IPost, IPostCategory } from "@type/post";
import PaginationNews from "./PaginationNews";
import NewsSideRight from "./NewsSideRight";
import { Card } from "./Cards";
import { NewsEntity } from "@generated/graphql";

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
  totalCount: number
};

const ListNewsPage: FC<Props> = ({
  banner,
  title,
  breadcrumbs,
  category,
  sideData,
  data,
  totalCount
}) => {
  return (
    <Fragment>
      <Banner image={banner} title={title} />
      <div className="container mx-auto mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        <div className="flex items-start justify-between gap-[100px]">
          <div className="flex flex-col gap-[50px]">
            {!!data?.length ?
              data.map((item, index) => (
                <Card
                  post={item}
                  key={index}
                  className="animation"
                  category={category}
                />
              )) : 'No data'}
          </div>
          <NewsSideRight category={category} data={sideData} />
        </div>
        <PaginationNews totalCount={totalCount} />
      </div>
    </Fragment>
  );
};

export default ListNewsPage;
