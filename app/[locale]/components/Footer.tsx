import { FC, Fragment } from "react";

import SmsImg from "@assets/images/icons/sms_tracking.svg";
import Image from "next/image";
import { ILocale } from "@configs/i18n";
import { fetchAsset } from "@api/index";

export type IFooter = {
  title: string;
  placeholder: string;
  register_txt: string;
};

interface FooterProps {
  locale: ILocale;
}

const Footer = async ({ locale }: FooterProps) => {
  const footerAsset: IFooter = await fetchAsset("footer", locale);
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
      <div className="container mx-auto"></div>
    </Fragment>
  );
};

export default Footer as unknown as FC<FooterProps>;
