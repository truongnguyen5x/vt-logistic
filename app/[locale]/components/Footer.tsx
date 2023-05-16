import { FC, Fragment } from "react";

import SmsImg from "@assets/images/icons/sms_tracking.svg";
import Image from "next/image";
import { ILocale } from "@configs/i18n";
import { fetchAsset } from "@api/index";
import { Link } from "next-intl";
import LogoImg from "@assets/images/logos/logo_light.svg";
import BCTimg from "@assets/images/logos/bo_cong_thuong.png";
import VtImg from "@assets/images/logos/viettel.png";

type ILink = {
  txt: string;
  img?: string;
  external?: boolean;
  href?: string;
};
export type IFooter = {
  title: string;
  placeholder: string;
  register_txt: string;
  links: Array<{
    title: string;
    urls: ILink[];
  }>;
  links2: Array<{ txt: string; url: string }>;
  socials: Array<{ img: string; url: string }>;
  copyright: string;
};

interface FooterProps {
  locale: ILocale;
  introduceTxt: string;
  connectTxt: string;
  certifiedBy: string;
}

const Footer = async ({
  locale,
  introduceTxt,
  connectTxt,
  certifiedBy,
}: FooterProps) => {
  const footerAsset: IFooter = await fetchAsset("footer", locale);

  const renderLinkItem = (asset: ILink) => {
    if (asset?.href) {
      if (asset.external) {
        return (
          <a href={asset.href} target="_blank" className="footer-link my-3">
            {asset?.img && (
              <Image src={asset.img} width={22} height={22} alt="" />
            )}
            {asset.txt}
          </a>
        );
      } else {
        return (
          <Link href={asset.href} className="footer-link my-3">
            {asset?.img && (
              <Image src={asset.img} width={22} height={22} alt="" />
            )}
            {asset.txt}
          </Link>
        );
      }
    }
    return (
      <p className="footer-link my-3">
        {asset?.img && <Image src={asset.img} width={22} height={22} alt="" />}
        {asset.txt}
      </p>
    );
  };

  return (
    <Fragment>
      <div className="footer-form-register">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="flex items-center gap-12">
            <Image src={SmsImg} width={50} height={50} alt="" />
            <p className="footer-title">{footerAsset.title}</p>
          </div>
          <div className="footer-input-register">
            <input placeholder={footerAsset.placeholder} type="text" />
            <button>{footerAsset.register_txt}</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 ">
        <div className="grid grid-cols-5 gap-3 mb-7">
          {footerAsset.links.map((item, idx) => (
            <div key={idx}>
              <p className="footer-col">{item.title}</p>
              {item.urls.map(renderLinkItem)}
            </div>
          ))}
        </div>
        <div className="custom-horizontal-divider"></div>
        <div className="grid grid-cols-5 gap-7 mt-7">
          <div className="col-span-2">
            <Image src={LogoImg} width={154} height={55} alt="logo" />
            <p className="footer-col mt-7">{introduceTxt}</p>
            {footerAsset.links2.map((i, idx1) => (
              <a
                key={idx1}
                target="_blank"
                href={i.url}
                className="footer-link my-2"
              >
                {i.txt}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-col">{connectTxt}</p>
            <div className="flex justify-between max-w-60 mt-11">
              {footerAsset.socials.map((i, idx2) => (
                <a key={idx2} target="_blank" href={i.url}>
                  <Image src={i.img} alt="" width={45} height={45} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <p className="footer-col">{certifiedBy}</p>
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
        <p>{footerAsset.copyright}</p>
      </div>
    </Fragment>
  );
};

export default Footer as unknown as FC<FooterProps>;
