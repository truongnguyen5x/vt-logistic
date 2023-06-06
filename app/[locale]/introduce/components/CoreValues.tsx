"use client";
import Image from "next/image";
import { FC, Fragment, useState } from "react";
import ChevronRight from "@assets/images/icons/chevron-right.svg";
import { ComponentIntroduceCoreValues } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  assets: ComponentIntroduceCoreValues | null;
  className?: string;
  title: string;
};
const CoreValues: FC<Props> = ({ assets, className = "", title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      className={clsx(
        "container px-4 md:mx-auto mt-16 md:mt-[445px]",
        className
      )}
    >
      <div
        className={clsx(
          "flex lg:items-start",
          "max-lg:!hidden gap-6 md:gap-10 xl:gap-20"
        )}
      >
        <Slider
          dots={false}
          infinite
          arrows={false}
          speed={1500}
          slidesToShow={1}
          className="w-[450px] xl:w-[600px] 2xl:w-[700px] animation"
          autoplay
          afterChange={(index) => setCurrentSlide(index)}
          slidesToScroll={1}
        >
          {[0, 1].map((index) => (
            <Image
              key={index}
              src={getPrefixImageUrl(
                assets?.images.data[index].attributes?.url
              )}
              alt=""
              width={300}
              height={300}
              className="w-[450px] xl:w-[600px] 2xl:w-[700px] h-[300px] xl:h-[420px] object-cover"
            />
          ))}
        </Slider>
        <div>
          <p className={clsx("section-name-left animation")}>{title}</p>
          <div className="mt-10">
            {currentSlide == 0 && (
              <Fragment>
                <h4
                  className="text-th-gray-400 font-semibold text-[25px] mb-6 animation"
                  data-animation-delay="0.3s"
                >
                  {assets?.center_customer_title}
                </h4>
                <p
                  className="text-base font-medium text-th-gray-300 animation"
                  data-animation-delay="0.4s"
                >
                  {assets?.center_customer_content}
                </p>
              </Fragment>
            )}
            {currentSlide == 1 && (
              <Fragment>
                <h4
                  className="text-th-gray-400 font-semibold text-[25px] mb-6 mt-10 animation"
                  data-animation-delay="0.5s"
                >
                  {assets?.kindness_title}
                </h4>
                <div className="animation" data-animation-delay="0.6s">
                  {!!assets?.kindness_content?.length &&
                    assets?.kindness_content.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 mb-4 last:mb-0"
                      >
                        <Image
                          src={ChevronRight}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <div className="text-th-gray-500 text-base font-medium">
                          {item?.title}
                        </div>
                      </div>
                    ))}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <p className={clsx("section-name animation mb-10")}>{title}</p>
        <Slider
          dots={false}
          infinite
          arrows={false}
          speed={1500}
          slidesToShow={1}
          className="w-full animation"
          autoplay
          slidesToScroll={1}
        >
          <div className="flex flex-col items-center">
            <Image
              src={getPrefixImageUrl(assets?.images.data[0].attributes?.url)}
              alt=""
              width={300}
              height={300}
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
            <h4
              className="text-th-gray-400 font-semibold text-[25px] mb-6 mt-6 animation"
              data-animation-delay="0.3s"
            >
              {assets?.center_customer_title}
            </h4>
            <p
              className="text-base font-medium text-th-gray-300 animation"
              data-animation-delay="0.4s"
            >
              {assets?.center_customer_content}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={getPrefixImageUrl(assets?.images.data[1].attributes?.url)}
              alt=""
              width={300}
              height={300}
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
            <h4
              className="text-th-gray-400 font-semibold text-[25px] mb-6 mt-6 animation"
              data-animation-delay="0.5s"
            >
              {assets?.kindness_title}
            </h4>
            <div className="animation" data-animation-delay="0.6s">
              {!!assets?.kindness_content?.length &&
                assets?.kindness_content.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 mb-4 last:mb-0"
                  >
                    <Image src={ChevronRight} alt="" width={24} height={24} />
                    <div className="text-th-gray-500 text-base font-medium">
                      {item?.title}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CoreValues;
