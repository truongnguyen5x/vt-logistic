import { IPost } from "@type/post";
import { useTranslations } from "next-intl";
import { FC } from "react";
import PaginationNews from "@components/news/PaginationNews";
import { SideCard } from "@components/news/Cards";

type Props = {
  post: IPost[];
};

const RelatedPost: FC<Props> = ({ post }) => {
  const t = useTranslations("internal_news");

  return (
    <div>
      <h3 className="text-th-gray-400 text-4xl font-semibold mt-[50px] mb-6 animation">
        {t("related_post")}
      </h3>
      <div className="flex gap-[50px] animation">
        {!!post?.length &&
          post.map((item, index) => <SideCard key={index} post={item} />)}
      </div>
      <PaginationNews />
    </div>
  );
};

export default RelatedPost;
