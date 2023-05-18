import ListNews from "./components/ListNews";

const News = () => {
  return (
    /* @ts-expect-error Server Component */
    <ListNews typeParams={""} />
  );
};

export default News;
