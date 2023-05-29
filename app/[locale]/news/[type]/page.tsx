import { ISearchParams } from "@type/common";
import ListNews from "../components/ListNews";
import { FC } from "react";

type Props = {
  params: {
    type: string
  }
  searchParams: ISearchParams
}

const News = ({ params, searchParams }: Props) => {  
  return <ListNews typeParams={params.type} page={searchParams.page || 1} keyword={searchParams.keyword || ''} />;
};

export default News;
