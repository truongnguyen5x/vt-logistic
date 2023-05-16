import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";
import IntroGeneral from "./components/IntroGeneral";
import Mission from "./components/Mission";
import CoreValues from "./components/CoreValues";
import Reasons from "./components/Reasons";
import MoreInfo from "./components/MoreInfo";

type IIntroduce = {
  introduce: {
    banner: string;
    general: {
      image: string;
      sub_image: string;
      title: string;
      content: string;
    };
    mission: {
      image: string;
      description: string;
      properties: string[];
      introduce: Array<{
        image: string;
        content: string;
      }>;
    };
    core_values: {
      image: string;
      center_customer: {
        title: string;
        content: string;
      };
      kindness: {
        title: string;
        content: string[];
      };
    };
    reasons_choose_we: {
      image?: string;
      description: string;
      reasons: Array<{
        image: string;
        title: string;
        content: string;
      }>;
    };
    more: {
      contact: {
        image: string;
        title: string;
        content: string;
        link: string;
      };
      milestones: {
        image: string;
        title: string;
        content: string;
        link: string;
      };
    };
  };
};

const Introduce = async () => {
  const locale = useLocale();
  const t = await getTranslations("introduce");

  const data: IIntroduce = await fetchAsset("introduce", locale as ILocale);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.introduce"), link: "#" },
    { title: t("common"), link: "#", active: true },
  ];

  return (
    <Fragment>
      <Banner image={data.introduce.banner} title={t("common")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <IntroGeneral data={data.introduce.general} className="py-10" />
      </div>
      <Mission data={data.introduce.mission} className="mt-20" />
      <CoreValues data={data.introduce.core_values} />
      <Reasons data={data.introduce.reasons_choose_we} className="mt-20" />
      <MoreInfo data={data.introduce.more} className="mt-20 pb-20" />
    </Fragment>
  );
};

export default Introduce;
