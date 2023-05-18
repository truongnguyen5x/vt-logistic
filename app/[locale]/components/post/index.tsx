"use client";
import { IPost } from "@type/post";
import React, { FC } from "react";
import PostHome from "./Post";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import Image from "next/image";
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
  const listPost = await promise;

  const handleClickMore = () => {};
  return (
    <div className="container mx-auto mt-24">
      <p className="section-name mb-6 animation">{title}</p>
      <div
        className="grid grid-cols-12 gap-7 mt-20 animation"
        data-animation-delay="0.4s"
      >
        <div className="col-span-6">
          <PostHome detailTxt={detail} size="LARGE" postData={listPost[0]} />
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-7">
          <PostHome detailTxt={detail} postData={listPost[1]} />
          <PostHome detailTxt={detail} postData={listPost[2]} />
          <PostHome detailTxt={detail} postData={listPost[3]} />
          <PostHome detailTxt={detail} postData={listPost[4]} />
        </div>
      </div>
      <div
        className="mt-12 text-center mb-24 animation"
        data-animation-delay="0.6s"
      >
        <button className="btn-red" onClick={handleClickMore}>
          {learn_more}
          <Image src={RightImg} width={28} height={28} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ListPost as unknown as React.FunctionComponent<ListPostProps>;
