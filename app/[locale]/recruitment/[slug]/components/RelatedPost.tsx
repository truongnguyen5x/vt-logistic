import { useTranslations } from "next-intl";
import { FC } from "react";
import { SideCard } from "@components/news/Cards";
import { NewsEntity } from "@generated/graphql";

type Props = {
  post: NewsEntity[] | null;
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
          post.map((item, index) => (
            <SideCard key={index} post={item} category="recruitment" />
          ))}
      </div>
      {/* <PaginationNews totalCount={} /> */}
    </div>
  );
};

export default RelatedPost;
