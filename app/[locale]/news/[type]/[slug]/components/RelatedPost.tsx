"use client";
import { FC, useMemo, useState } from "react";
import { SideCard } from "@components/news/Cards";
import { NewsEntity } from "@generated/graphql";
import useWindowSize from "@hooks/use-window-size";
import clsx from "clsx";
import Pagination from "@components/pagination";

type Props = {
  post: NewsEntity[] | null;
  title: string;
};

const RelatedPost: FC<Props> = ({ post, title }) => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  const [page, setPage] = useState(1);

  const [from, to] = useMemo(() => {
    if (isMobile) {
      return [page, page + 1];
    } else {
      return [(page - 1) * 2, page * 2];
    }
  }, [page, isMobile]);

  const handleChange = (newPage: number | string) => {
    setPage(parseInt(newPage + ""));
  };

  return (
    <div>
      <h3 className="text-th-gray-400 text-4xl font-semibold mt-[50px] mb-6 animation">
        {title}
      </h3>
      <div className={clsx("animation grid grid-cols-1 md:grid-cols-2 gap-4")}>
        {post?.slice(from, to).map((p, idx) => (
          <SideCard key={idx} post={p} category={p.attributes?.type} />
        ))}
      </div>
      <Pagination
        className="mt-6 animation"
        pageSize={isMobile ? 1 : 2}
        onPageChange={handleChange}
        totalCount={post?.length || 0}
        currentPage={page}
      />
    </div>
  );
};

export default RelatedPost;
