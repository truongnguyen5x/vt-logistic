"use client";

import { FC, useLayoutEffect, useRef, useState } from "react";
import ArrowRight from "@assets/images/icons/arrow_right.svg";
import Image from "next/image";
import clsx from "clsx";

const Truncate: FC<{
  content: string;
  showMoreTxt: string;
  hideTxt: string;
}> = ({ content, hideTxt, showMoreTxt }) => {
  const ref = useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncatedElement({
      ref,
    });

  return (
    <>
      <p
        ref={ref}
        className={clsx(
          "md:text-center font-medium text-base text-th-gray-300 break-words max-w-[800px] mx-auto mt-8",
          { "line-clamp-3": !isShowingMore }
        )}
      >
        {content}
      </p>
      {isTruncated && (
        <button
          onClick={toggleIsShowingMore}
          className="mx-auto mt-2 flex items-center justify-center gap-2"
        >
          {isShowingMore ? hideTxt : showMoreTxt}
          <Image
            src={ArrowRight}
            alt=""
            width={24}
            height={24}
            className={
              isShowingMore
                ? "-rotate-90 transition-all"
                : "rotate-90 transition-all"
            }
          />
        </button>
      )}
    </>
  );
};

export default Truncate;

const useTruncatedElement = ({ ref }: { ref: any }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  const toggleIsShowingMore = () => setIsShowingMore((prev) => !prev);

  return {
    isTruncated,
    isShowingMore,
    toggleIsShowingMore,
  };
};
