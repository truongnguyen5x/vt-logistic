import LogoImg from "@assets/images/logos/logo_light.svg";
import Image from "next/image";
import SearchImg from "@assets/images/icons/search.svg";
import VnFlagImg from "@assets/images/flag/vn.png";
import Link from "next/link";
import ProfileImg from "@assets/images/icons/profile.svg";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("header");

  const listTab = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/introduce",
      name: "introduce",
    },
    {
      path: "/service",
      name: "service",
    },
    {
      path: "/news",
      name: "news",
    },
    {
      path: "/contact",
      name: "contact",
    },
  ];

  return (
    <nav>
      <div className="container mx-auto h-[74px] flex justify-between items-center">
        <Link href="/">
          <Image src={LogoImg} alt="logo" />
        </Link>
        <div className="grid grid-cols-5 gap-2">
          {listTab.map((i, idx) => (
            <Link
              key={idx}
              className="w-44 block text-center h-[74px] leading-[74px]"
              href={i.path}
            >
              {t(i.name)}
            </Link>
          ))}
        </div>
        <div className="flex gap-7">
          <Image src={SearchImg} alt="search-icon" />
          <Image src={VnFlagImg} alt="flag" />
          <Image src={ProfileImg} alt="profile" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
