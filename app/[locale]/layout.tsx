import "@assets/css/globals.scss";
import "@assets/css/theme.scss";
import "@assets/css/responsive.scss";
import "@assets/css/animate.scss";

import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Header from "./Header";
import localFont from "next/font/local";
import Loader from "./components/Loader";
import { ILocale, i18n } from "@configs/i18n";
import Footer from "./Footer";
import Script from "next/script";
import BackToTop from "./components/BackToTop";
import toast, { Toaster } from "react-hot-toast";

const SVNgilroy = localFont({
  src: [
    {
      path: "../../assets/fonts/SVN-Gilroy Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/SVN-Gilroy Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/SVN-Gilroy SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/SVN-Gilroy Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Viettel Logistics",
  description:
    "Hãy phục vụ khách hàng của bạn một cách chuyên nghiệp và thuận tiện với Viettel logistics",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  const t = useTranslations("layout");
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={SVNgilroy.className}>
        <Loader />
        <Header
          titles={{
            home: t("home"),
            introduce: t("introduce"),
            service: t("service"),
            news: t("news"),
            contact: t("contact"),
            recruitment: t("recruitment"),
            introduce_general: t("introduce_general"),
            milestones: t("milestones"),
            info_contact: t("info_contact"),
            transportation: t("transportation"),
            trucking: t("trucking"),
            rail_transportation: t("rail_transportation"),
            sea_transport: t("sea_transport"),
            air_freight: t("air_freight"),
            customs: t("customs"),
            warehouse: t("warehouse"),
            endpoint_delivery: t("endpoint_delivery"),
            packing: t("packing"),
            insider_news: t("insider_news"),
            market_news: t("market_news"),
            specialized_news: t("specialized_news"),
          }}
        />
        {children}
        <Footer />
        <BackToTop txt={t("back_to_head")} />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
      <Script src="/js/script.js" />
    </html>
  );
}
