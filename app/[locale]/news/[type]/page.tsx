import ListNews from "../components/ListNews";

const News = async ({ params }: { params: { type: string } }) => {
  return (
    /* @ts-expect-error Server Component */
    <ListNews typeParams={params.type} />
  );
};

export default News;
