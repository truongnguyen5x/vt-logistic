import ListNews from "../components/ListNews";

const News = async ({ params }: { params: { type: string } }) => {
  return <ListNews typeParams={params.type} />;
};

export default News;
