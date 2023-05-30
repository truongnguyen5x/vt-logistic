import Image from "next/image";
import { FC } from "react";
import Calendar from "@assets/images/icons/calendar.svg";
import { format, getDate, getDaysInMonth, getMonth } from "date-fns";
import { useTranslations } from "next-intl";
import ArrowRight from "@assets/images/icons/arrow_right_red.svg";
import Clock from "@assets/images/icons/clock.svg";
import { IPostCategory } from "@type/post";
import Link from "next-intl/link";
import { NewsEntity } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";

type CardProps = {
  post: NewsEntity;
  className?: string;
  category?: IPostCategory;
};

export const Card: FC<CardProps> = ({
  post,
  className = "",
  category = "internal_news",
}) => {
  const t = useTranslations("internal_news");

  return (
    <Link
      href={`${
        category === "recruitment" ? "/recruitment/" : `/news/${category}/`
      }${post.attributes?.slug}`}
      className={className}
    >
      <Image
        src={getPrefixImageUrl(
          post.attributes?.featured_image?.data?.attributes?.url
        )}
        alt=""
        width={940}
        height={360}
      />
      <div className="p-8 max-w-[940px] bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.1)]">
        <div className="flex gap-8 items-start">
          <div className="min-w-[60px]">
            <Image
              src={Calendar}
              alt=""
              width={56}
              height={56}
              className="mx-auto"
            />
            <div className="text-center mt-2 text-4xl text-th-gray-320 font-bold">
              {getDate(new Date(post.attributes?.updatedAt)).toLocaleString(
                "en-US",
                {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                }
              )}
            </div>
            <div className="text-center font-medium text-base text-th-gray-300">{`Tháng ${
              getMonth(new Date(post.attributes?.updatedAt)) + 1
            }`}</div>
          </div>
          <div className="pl-8 border-l border-th-gray-330 max-w-[782px]">
            <h4 className="break-words text-th-gray-320 text-[25px] leading-8 font-semibold">
              {post.attributes?.title}
            </h4>
            {!!post.attributes?.content && (
              <p className="break-words mt-4 text-th-gray-300 text-base">
                {post.attributes?.preview_content}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 flex justify-end items-center gap-2">
          <span className="text-th-red-500 text-[15px] leading-5 font-medium  ">
            {t("read_more")}
          </span>
          <Image src={ArrowRight} alt="" width={16} height={16} />
        </div>
      </div>
    </Link>
  );
};

export const SideCard: FC<CardProps> = ({
  post,
  className,
  category = "internal_news",
}) => {
  return (
    <Link
      href={`${
        category === "recruitment" ? "/recruitment/" : `/news/${category}/`
      }${post.attributes?.slug}`}
      className={className}
    >
      <div className="md:mx-2 lg:mx-0">
        <Image
          src={getPrefixImageUrl(
            post.attributes?.featured_image?.data?.attributes?.url
          )}
          alt=""
          width={490}
          height={240}
        />
      </div>
      <div className="p-6 md:mx-2 lg:mx-0 md:pt-6 md:px-8 md:pb-8 bg-th-gray-220 max-w-[490px]">
        <div className="flex items-center gap-3 mb-2">
          <Image src={Clock} alt="" width={14} height={14} />
          <div className="text-th-gray-300 text-[13px] leading-[22px]">
            {format(new Date(post.attributes?.updatedAt), "dd-MM-yyyy")}
          </div>
        </div>
        <h5 className="text-th-gray-320 text-xl font-semibold">
          {post.attributes?.title}
        </h5>
      </div>
    </Link>
  );
};
