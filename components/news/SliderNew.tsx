"use client";

import { FC } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Enum_News_Type, NewsEntity } from "@generated/graphql";
import { SideCard } from "./Cards";
import clsx from "clsx";

type Props = {
  title?: string;
  data: NewsEntity[] | null;
  category: Enum_News_Type;
};

const SliderNew: FC<Props> = ({ title, data, category }) => {
  return (
    <div className="mt-10">
      {!!title && (
        <h4 className="text-th-gray-400 text-2xl font-semibold mt-[50px] mb-4">
          {title}
        </h4>
      )}
      <Slider
        dots
        infinite
        // adaptiveHeight
        // autoplay
        speed={500}
        slidesToShow={!!data && data?.length > 1 ? 2 : 1}
        slidesToScroll={1}
        arrows={false}
        className={clsx(
          "animation slider-selectable min-w-[343px] max-w-[720px]",
          styles.sliderWrapper
        )}
        responsive={[
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ]}
      >
        {!!data &&
          !!data.length &&
          data.map((newPost, index) => (
            <SideCard
              key={index}
              post={newPost}
              className="animation mx-2"
              category={category}
            />
          ))}
      </Slider>
    </div>
  );
};

export default SliderNew;
