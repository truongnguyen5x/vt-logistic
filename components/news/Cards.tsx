import Image from "next/image";
import { FC } from "react";
import Calendar from "@assets/images/icons/calendar.svg";
import { format, getDate, getDaysInMonth, getMonth } from "date-fns";
import { useTranslations } from "next-intl";
import ArrowRight from "@assets/images/icons/arrow_right_red.svg";
import Clock from "@assets/images/icons/clock.svg";
import Link from "next-intl/link";
import { Enum_News_Type, NewsEntity } from "@generated/graphql";
import { convertNewsTypeToURL, getPrefixImageUrl } from "@ultility/index";
import styles from "./style.module.scss";
import clsx from "clsx";
import { formatDate2 } from "@ultility/date_time";

type CardProps = {
  post: NewsEntity;
  className?: string;
  category?: Enum_News_Type;
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
        category === "recruitment"
          ? "/recruitment/"
          : `/news/${convertNewsTypeToURL(category)}/`
      }${post.attributes?.slug}`}
      className={clsx(className, styles.cardXL)}
    >
      <div className="h-64 xl:h-80 overflow-hidden">
        <Image
          src={getPrefixImageUrl(
            post.attributes?.featured_image?.data?.attributes?.url
          )}
          alt=""
          className={styles.cardImage}
          width={940}
          height={360}
        />
      </div>

      <div className="p-8 bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.1)]">
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
            {!!post.attributes?.contents && (
              <p className="break-words mt-4 text-th-gray-300 text-base line-clamp-2">
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
        category === "recruitment"
          ? "/recruitment/"
          : `/news/${convertNewsTypeToURL(category)}/`
      }${post.attributes?.slug}`}
      className={clsx(className, styles.card)}
    >
      <div className="mx-0 h-48 md:h-40 overflow-hidden">
        <Image
          src={getPrefixImageUrl(
            post.attributes?.featured_image?.data?.attributes?.url
          )}
          className={styles.cardImage}
          alt=""
          width={490}
          height={240}
        />
      </div>
      <div
        className={clsx(
          "p-6 mx-0 md:pt-6 md:px-8 md:pb-8 bg-th-gray-220",
          styles.cardBody
        )}
      >
        <div className="flex items-center gap-3 mb-2">
          <Image src={Clock} alt="" width={14} height={14} />
          <div className="text-th-gray-300 text-[13px] leading-[22px]">
            {formatDate2(new Date(post.attributes?.updatedAt))}
          </div>
        </div>
        <h5 className="text-th-gray-320 text-xl font-semibold line-clamp-3">
          {post.attributes?.title}
        </h5>
      </div>
    </Link>
  );
};
