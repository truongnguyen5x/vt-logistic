import { fetchAsset, fetchDetailPost } from "@api/index";
import Clock from "@assets/images/icons/clock.svg";
import Dislike from "@assets/images/icons/dislike.svg";
import Eye from "@assets/images/icons/eye.svg";
import Like from "@assets/images/icons/like.svg";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { IPost } from "@type/post";
import { format } from "date-fns";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NewsSideRight from "@components/news/NewsSideRight";
import RelatedPost from "./components/RelatedPost";

const PostDetail = async (props: any) => {
  const locale = useLocale();

  const [data, dataHotNews, t] = await Promise.all([
    fetchDetailPost(locale as ILocale),
    fetchAsset<{ hot_news: IPost[] }>("hot_news", locale as ILocale),
    getTranslations("internal_news"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t("title"), link: "#" },
    { title: props?.params?.type || "", link: "#" },
    { title: props?.params?.slug || "", link: "#", active: true },
  ];

  return (
    <Fragment>
      <Banner image={data.banner} title={t("title")} />
      <div className="container mx-auto mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        <div className="flex items-start gap-[100px]">
          <div>
            <h5 className="text-th-gray-320 text-xl font-semibold animation">
              {data.title}
            </h5>
            <div className="flex items-center gap-3 mb-5 mt-1 animation">
              <Image src={Clock} alt="" width={14} height={14} />
              <div className="text-th-gray-300 text-[13px] leading-[22px]">
                {format(new Date(data.created_at), "dd-MM-yyyy")}
              </div>
            </div>
            {!!data.content && (
              <ReactMarkdown
                className="text-lg text-black font-regular mb-3 list-decimal unreset animation"
                remarkPlugins={[remarkGfm]}
              >
                {data.content}
              </ReactMarkdown>
            )}
            <div className="flex mb-2 animation">
              <div className="flex flex-1 items-center gap-3 ">
                <Image src={Eye} alt="" width={20} height={20} />
                <div className="text-th-gray-300 text-[16px] leading-[22px]">
                  {data.readed} {t("readed")}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-th-gray-220 rounded-full">
                  <Image src={Like} alt="" width={20} height={20} />
                </div>
                <div className="p-3 bg-th-gray-220 rounded-full">
                  <Image src={Dislike} alt="" width={20} height={20} />
                </div>
                <div className="text-th-gray-300 text-[16px] leading-[22px]">
                  {t("post_useful")}
                </div>
              </div>
            </div>
            <RelatedPost post={data.relatedPost} />
          </div>
          <NewsSideRight data={dataHotNews} category={"internal_news"} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostDetail;
