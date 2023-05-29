import { ISearchParams } from "@type/common";
import ListNews from "./components/ListNews";
import { FC } from "react";

type Props = {
  searchParams: ISearchParams
}

const News: FC<Props> = ({searchParams}) => {    
  return <ListNews typeParams={""} page={searchParams.page || 1} keyword={searchParams.keyword || ''} />;
};

export default News;
