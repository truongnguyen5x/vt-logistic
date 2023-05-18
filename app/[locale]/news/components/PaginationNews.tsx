"use client";

import Pagination from "@components/pagination";
import { useState } from "react";

const PaginationNews = () => {
  const [page, setPage] = useState<number | string>(1);

  return (
    <Pagination
      className="mt-[50px]"
      pageSize={3}
      onPageChange={(page) => setPage(page)}
      totalCount={99}
      currentPage={page}
    />
  );
};

export default PaginationNews;
