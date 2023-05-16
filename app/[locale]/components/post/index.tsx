import { IPost } from "@type/post";
import React, { FC } from "react";
import PostHome from "./Post";

interface ListPostProps {
  title: string;
  learn_more: string;
  detail: string;
  promise: Promise<IPost[]>;
}

const ListPost = async ({
  title,
  promise,
  learn_more,
  detail,
}: ListPostProps) => {
  const data = await promise;

  return (
    <div className="container mx-auto mt-24">
      <p className="section-name animate__animated  animate__fadeInDown animate__delay-1s ">
        {title}
      </p>
      <div className="grid grid-cols-12 gap-7 mt-20">
        <div className="col-span-6">
          <PostHome detailTxt={detail} size="LARGE" data={data[0]} />
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-7">
          <PostHome detailTxt={detail} data={data[1]} />
          <PostHome detailTxt={detail} data={data[2]} />
          <PostHome detailTxt={detail} data={data[3]} />
          <PostHome detailTxt={detail} data={data[4]} />
        </div>
      </div>
    </div>
  );
};

export default ListPost as unknown as React.FunctionComponent<ListPostProps>;
