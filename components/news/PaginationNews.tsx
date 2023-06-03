"use client";

import Pagination from "@components/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useMemo, useState } from "react";

type Props = {
  totalCount: number;
  pageSize?: number;
};

const PaginationNews: FC<Props> = ({ pageSize = 3, totalCount }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const handleChange = (newPage: number | string) => {
    params.set("page", String(newPage));
    router.replace(`${pathname}?${params.toString()}`);
  };
  useEffect(() => {
    if (searchParams.has("page")) {
    } else {
      params.set("page", "1");
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [pathname, params, searchParams, router]);

  return (
    <Pagination
      className="mt-[50px] animation"
      pageSize={pageSize}
      onPageChange={handleChange}
      totalCount={totalCount}
      currentPage={params.get("page") || 1}
    />
  );
};

export default PaginationNews;
