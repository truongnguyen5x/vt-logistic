import "@assets/css/globals.scss";
import "@assets/css/theme.scss";
import "@assets/css/animate.scss";

import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@components/Header";
import localFont from "next/font/local";
import Loader from "@components/Loader";
import { ILocale } from "@type/locale";
import Footer from "@components/Footer";
import Script from "next/script";
import BackToTop from "@components/BackToTop";
import { Toaster } from "react-hot-toast";

const SVNgilroy = localFont({
  src: [
    {
      path: "../../assets/fonts/SVN-Gilroy Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/SVN-Gilroy.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/SVN-Gilroy SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/SVN-Gilroy Bold.ttf",
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
          locale={locale as ILocale}
          titles={{
            home: t("home"),
            introduce: t("introduce"),
            service: t("service"),
            news: t("news"),
            contact: t("contact"),
            recruitment: t("recruitment"),
            introduce_general: t("introduce_general"),
            milestones: t("milestones"),
            transportation: t("transportation"),
            trucking: t("trucking"),
            "rail-transportation": t("rail-transportation"),
            "sea-transport": t("sea-transport"),
            "air-transport": t("air-transport"),
            customs: t("customs"),
            warehouse: t("warehouse"),
            "endpoint-delivery": t("endpoint-delivery"),
            packing: t("packing"),
            insider_news: t("insider_news"),
            market_news: t("market_news"),
            specialized_news: t("specialized_news"),
            service_common: t("service_common"),
            search: t("search"),
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
