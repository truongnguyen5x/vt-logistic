import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { FC, Fragment } from "react";
import { IPost } from "@type/post";
import PaginationNews from "./PaginationNews";
import NewsSideRight from "./NewsSideRight";
import { Card } from "./Cards";

type Props = {
  banner: string;
  title: string;
  breadcrumbs: Array<{
    title: string;
    link: string;
    active?: boolean;
  }>;
  type: string;
  sideData: {
    hot_news: IPost[];
  };
  data: IPost[];
};

const ListNewsPage: FC<Props> = ({
  banner,
  title,
  breadcrumbs,
  type,
  sideData,
  data,
}) => {
  return (
    <Fragment>
      <Banner image={banner} title={title} />
      <div className="container mx-auto mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        <div className="flex items-start gap-[100px]">
          <div className="flex flex-col gap-[50px]">
            {!!data.length &&
              data.map((item, index) => (
                <Card post={item} key={index} className="animation" type={type} />
              ))}
          </div>
          <NewsSideRight type={type} data={sideData} />
        </div>
        <PaginationNews />
      </div>
    </Fragment>
  );
};

export default ListNewsPage;
