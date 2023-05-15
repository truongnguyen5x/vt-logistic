import { IPost } from "@type/post";
import { FC } from "react";

interface ListPostProps {
  title: string;
  learn_more: string;
  promise: Promise<IPost[]>;
}

const ListPost = async ({ title, promise, learn_more }: ListPostProps) => {
  const data = await promise;
  // console.log(data);
  return (
    <div className="container mx-auto mt-24">
      <p className="section-name animate__animated  animate__fadeInDown animate__delay-1s ">
        {title}
      </p>
      <div className="grid grid-cols-3"></div>
    </div>
  );
};

export default ListPost;
