"use client";
import { IPost } from "@type/post";
import React, { FC } from "react";
import PostHome from "./Post";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import Image from "next/image";
import styles from "@app/styles.module.scss";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";
import { Maybe, NewsEntity } from "@generated/graphql";
import useWindowSize from "@hooks/use-window-size";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ListPostProps {
  title: string;
  learn_more: string;
  detail: string;
  promise?: Promise<NewsEntity[]>;
}

const ListPost = async ({
  title,
  promise,
  learn_more,
  detail,
}: ListPostProps) => {
  const { isDesktop, isTablet } = useWindowSize();
  const listPost = await promise;

  const renderContent = () => {
    if (isDesktop) {
      return (
        <div
          className="grid grid-cols-12 gap-7 mt-20 animation"
          data-animation-delay="0.4s"
        >
          <div className="col-span-6">
            <PostHome
              detailTxt={detail}
              size="LARGE"
              postData={listPost?.[0]}
            />
          </div>
          <div className="col-span-6 grid grid-cols-2 gap-x-7 gap-y-6">
            <PostHome detailTxt={detail} postData={listPost?.[1]} />
            <PostHome detailTxt={detail} postData={listPost?.[2]} />
            <PostHome detailTxt={detail} postData={listPost?.[3]} />
            <PostHome detailTxt={detail} postData={listPost?.[4]} />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.postSlider}>
        <Slider
          dots
          infinite
          arrows={false}
          className="animation"
          speed={500}
          slidesToShow={isTablet ? 2 : 1}
          // autoplay
          slidesToScroll={1}
        >
          {listPost?.map((i, idx) => (
            <PostHome key={idx} detailTxt={detail} postData={i} />
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-24">
      <p className="section-name mb-6 animation">{title}</p>
      {renderContent()}
      <div
        className="mt-12 text-center mb-24 animation"
        data-animation-delay="0.6s"
      >
        <Link href="/news">
          <button className="btn-red">
            {learn_more}
            <Image src={RightImg} width={28} height={28} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListPost as unknown as React.FunctionComponent<ListPostProps>;
