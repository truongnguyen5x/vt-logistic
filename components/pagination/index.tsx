import React, { FC } from "react";
import { usePagination, DOTS } from "./usePagination";
import styles from "./styles.module.scss";
import Image from "next/image";
import ArrowLeft from "@assets/images/icons/arrow_left.svg";
import ArrowRight from "@assets/images/icons/arrow_right.svg";

type Props = {
  onPageChange: (page: number | string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number | string;
  pageSize: number;
  className?: string;
};

const Pagination: FC<Props> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className = "",
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(Number(currentPage) + 1);
  };

  const onPrevious = () => {
    onPageChange(Number(currentPage) - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={`flex items-end justify-center gap-4 ${className}`}>
      <li
        onClick={onPrevious}
        className={`w-10 h-10 rounded border flex items-center justify-center ${
          currentPage === 1
            ? "opacity-70"
            : "border-th-gray-300 hover:border-th-red-500 hover:bg-th-red-200 hover:text-th-red-500"
        }`}
      >
        <Image alt="" src={ArrowLeft} height={24} width={24} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className="w-10 h-10 flex items-center justify-center text-black"
              key={pageNumber}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={`w-10 h-10 cursor-pointer rounded border flex items-center justify-center font-semibold leading-4 hover:border-th-red-500 hover:bg-th-red-200 hover:text-th-red-500 ${
              pageNumber === currentPage
                ? "text-th-red-500 bg-th-red-200 border-th-red-500"
                : "border-th-gray-300 text-black"
            }`}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        onClick={onNext}
        className={`w-10 h-10 rounded border flex items-center justify-center ${
          lastPage === currentPage
            ? "opacity-80"
            : "border-th-gray-300 hover:border-th-red-500 hover:bg-th-red-200 hover:text-th-red-500"
        }`}
      >
        <Image alt="" src={ArrowRight} height={24} width={24} />
      </li>
    </ul>
  );
};

export default Pagination;
