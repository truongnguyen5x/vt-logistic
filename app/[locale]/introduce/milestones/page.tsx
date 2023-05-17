import { fetchAsset } from "@api/index";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FC, useState } from "react";
import Content from "./components/Content";

type IMilestones = {
  milestones: {
    banner: string;
    bg_image?: string;
    image: string;
    icon_content: string;
    contents: Array<{
      timeline: number;
      datetime: string | null;
      content: string;
    }>;
  };
};

const Milestones = async () => {
  const locale = useLocale();

  const [assets, t] = await Promise.all([
    fetchAsset<IMilestones>("introduce", locale as ILocale),
    getTranslations("milestones"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.introduce"), link: "#" },
    { title: t("breadcrumbs.general_intro"), link: "/introduce" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <section>
      <Banner image={assets.milestones.banner} title={t("title")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6" />
        <div className="relative">
          {!!assets.milestones.bg_image && (
            <Image
              src={assets.milestones.bg_image}
              alt=""
              width={1570}
              height={1035}
            />
          )}
          <Content assets={assets.milestones} />
        </div>
      </div>
    </section>
  );
};

export default Milestones;
