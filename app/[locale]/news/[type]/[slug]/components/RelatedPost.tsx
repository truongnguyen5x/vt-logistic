import { IPost } from "@type/post";
import { useTranslations } from "next-intl";
import { FC } from "react";
import PaginationNews from "../../../components/PaginationNews";
import { SideCard } from "../../../components/Cards";

type Props = {
  post: IPost[];
};

const RelatedPost: FC<Props> = ({ post }) => {
  const t = useTranslations("news");

  return (
    <div>
      <h3 className="text-th-gray-400 text-4xl font-semibold mt-[50px] mb-6">
        {t("related_post")}
      </h3>
      <div className="flex gap-[50px]">
        {!!post?.length &&
          post.map((item, index) => <SideCard key={index} post={item} />)}
      </div>
      <PaginationNews />
    </div>
  );
};

export default RelatedPost;
