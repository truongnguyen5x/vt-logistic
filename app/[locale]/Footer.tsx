import { FC, Fragment } from "react";

import SmsImg from "@assets/images/icons/sms_tracking.svg";
import Image from "next/image";
import { ILocale } from "@configs/i18n";
import { fetchAsset } from "@api/index";
import { useLocale } from "next-intl";
import Link from "next-intl/link";
import LogoImg from "@assets/images/logos/logo_light.svg";
import BCTimg from "@assets/images/logos/bo_cong_thuong.png";
import VtImg from "@assets/images/logos/viettel.png";
import { getTranslations } from "next-intl/server";
import ButtonRegisterFooter from "@components/btn-register/BtnRegisterFooter";
import { getClient, getFooterQueryString } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { ComponentFooterFooterLink, Maybe } from "@generated/graphql";

const getHomeAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getFooterQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.footers?.data[data?.footers?.data?.length - 1];
};

const Footer = async () => {
  const locale = useLocale();
  const [footerAsset, t] = await Promise.all([
    getHomeAsset(locale as ILocale),
    getTranslations("layout"),
  ]);

  const renderLinkItem = (
    asset: Maybe<ComponentFooterFooterLink>,
    idx: number
  ) => {
    if (asset?.url) {
      if (asset.is_external_link) {
        return (
          <a href={asset.url} target="_blank" className="footer-link my-3">
            {asset?.icon?.data && (
              <Image
                src={getPrefixImageUrl(asset.icon.data?.attributes?.url)}
                width={22}
                height={22}
                alt=""
              />
            )}
            {asset.title}
          </a>
        );
      } else {
        return (
          <a href={asset.url} className="footer-link my-3">
            {asset?.icon?.data && (
              <Image
                src={getPrefixImageUrl(asset.icon.data?.attributes?.url)}
                width={22}
                height={22}
                alt=""
              />
            )}
            {asset.title}
          </a>
        );
      }
    }
    return (
      <div className="footer-link my-3">
        {asset?.icon?.data && (
          <Image
            src={getPrefixImageUrl(asset.icon.data?.attributes?.url)}
            width={22}
            height={22}
            alt=""
          />
        )}
        <p>{asset?.title}</p>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="footer-form-register animation">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="flex items-center gap-12">
            <Image src={SmsImg} width={50} height={50} alt="" />
            <p className="footer-title">{t("receive_info")}</p>
          </div>
          <ButtonRegisterFooter
            successTxt={t("register_success")}
            errorTxt={t("email_validate")}
            placeholder={t("placeholder")}
            btn={t("register_txt")}
          />
        </div>
      </div>
      <div className="container mx-auto py-16 ">
        <div
          className="grid grid-cols-5 gap-3 mb-7 animation"
          data-animation-delay="0.3s"
        >
          {!!footerAsset &&
            footerAsset?.attributes?.links?.map((item, idx) => (
              <div key={idx}>
                <p className="footer-col">{item?.title}</p>
                {item?.links?.map((i, idx) =>
                  renderLinkItem(i as Maybe<ComponentFooterFooterLink>, idx)
                )}
              </div>
            ))}
        </div>
        <div className="custom-horizontal-divider"></div>
        <div
          className="grid grid-cols-5 gap-7 mt-7 animation"
          data-animation-delay="0.4s"
        >
          <div className="col-span-2">
            <Image src={LogoImg} width={154} height={55} alt="logo" />
            <p className="footer-col mt-7">{t("about")}</p>
            {footerAsset?.attributes?.infos?.map((i, idx1) => (
              <a
                key={idx1}
                target="_blank"
                href={i?.url || "#"}
                className="footer-link my-2"
              >
                {i?.title}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-col">{t("connect_with_us")}</p>
            <div className="flex justify-start gap-7 mt-9">
              {footerAsset?.attributes?.socials?.map((i, idx2) => (
                <a key={idx2} target="_blank" href={i?.url || "#"}>
                  <Image
                    src={getPrefixImageUrl(i?.icon?.data?.attributes?.url)}
                    alt=""
                    width={45}
                    height={45}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <p className="footer-col">{t("certified_by")}</p>
            <div className="flex justify-start gap-12 mt-9">
              <Image
                src={BCTimg}
                width={167}
                height={52}
                alt="bo_cong_thuong"
              />
              <Image src={VtImg} width={127} height={43} alt="viettel" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{t("copyright")}</p>
      </div>
    </Fragment>
  );
};

export default Footer as unknown as FC<{}>;
