"use client";

import LogoImg from "@assets/images/logos/logo_light.svg";
import Image from "next/image";
import SearchImg from "@assets/images/icons/search.svg";
import VnFlagImg from "@assets/images/flag/vn.png";
import Link from "next/link";
import ProfileImg from "@assets/images/icons/profile.svg";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { FC, Fragment } from "react";
import clsx from "clsx";
import MenuImg from "@assets/images/icons/menu.svg";
import LogoWhiteImg from "@assets/images/logos/logo_white.svg";
import BackgroundMobileImg from "@assets/images/background/background_mobile.png";

interface HeaderProps {
  titles: any;
}

type IMenu = {
  path: string;
  key: string;
  children?: IMenu[];
};

const Header: FC<HeaderProps> = ({ titles }) => {
  const segment = useSelectedLayoutSegment();

  const listTab: IMenu[] = [
    {
      path: "/",
      key: "home",
    },
    {
      path: "/introduce",
      key: "introduce",
      children: [
        {
          path: "/introduce",
          key: "introduce_general",
        },
        {
          path: "/introduce/milestones",
          key: "milestones",
        },
        {
          path: "/contact",
          key: "info_contact",
        },
      ],
    },
    {
      path: "/service",
      key: "service",
      children: [
        {
          path: "/service/transportation",
          key: "transportation",
          children: [
            {
              path: "/service/trucking",
              key: "trucking",
            },
            {
              path: "/service/rail-transportation",
              key: "rail_transportation",
            },
            {
              path: "/service/sea-transport",
              key: "sea_transport",
            },
            {
              path: "/service/air-freight",
              key: "air_freight",
            },
          ],
        },
        {
          path: "/service/customs",
          key: "customs",
        },
        {
          path: "/service/warehouse",
          key: "warehouse",
        },
        {
          path: "/service/packing",
          key: "packing",
        },
        {
          path: "/service/endpoint_delivery",
          key: "endpoint_delivery",
        },
      ],
    },
    {
      path: "/news",
      key: "news",
      children: [
        {
          key: "insider_news",
          path: "/news",
        },
        {
          key: "market_news",
          path: "/news/market-news",
        },
        {
          key: "specialized_news",
          path: "/news/specialized-news",
        },
      ],
    },
    {
      path: "/recruitment",
      key: "recruitment",
    },
    {
      path: "/contact",
      key: "contact",
    },
  ];

  const renderSecondLevelMenu = (menus?: IMenu[]) => {
    if (menus && menus.length) {
      return (
        <ul>
          {menus.map((i, idx) => (
            <li key={idx} className={i.children ? "menu-toggle" : ""}>
              <Link href={i.path}>{titles[i.key]}</Link>
              {i.children && <div />}
              {renderThreeLevelMenu(i.children)}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const renderThreeLevelMenu = (menus?: IMenu[]) => {
    if (menus && menus.length) {
      return (
        <ul>
          {menus.map((i, idx) => (
            <li key={idx}>
              <Link className="text-th-gray-400 font-medium" href={i.path}>
                {titles[i.key]}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <Fragment>
      <div className="container mx-auto h-[74px] flex justify-between items-center gap-3 relative nav-wp">
        <Link href="/" className="animation p-7 nav-icon">
          <Image src={LogoImg} alt="logo" />
        </Link>
        <nav className="flex-grow nav-header">
          <ul className="grid grid-cols-6 gap-2">
            {listTab.map((i, idx) => (
              <li
                key={idx}
                className={clsx("nav-btn animation", {
                  "nav-btn-selected": "/" + (segment || "") == i.path,
                })}
                data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                // style={{
                //   animationDelay: `${1.1 + 0.1 * idx}s`,
                // }}
              >
                <Link
                  className="flex justify-center items-center text-center h-[74px] transition-colors hover:text-th-red-500 text-th-gray-400 font-medium"
                  href={i.path}
                >
                  {titles[i.key]}
                </Link>
                {renderSecondLevelMenu(i.children)}
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="flex gap-7 animation pr-7 nav-action"
          data-animation-delay="0.8s"
        >
          <Image
            width={30}
            height={30}
            src={SearchImg}
            alt="search-icon"
            className="min-w-[30px]"
          />
          <Image
            width={30}
            height={30}
            src={VnFlagImg}
            alt="flag"
            className="min-w-[30px]"
          />
          <Image
            width={30}
            height={30}
            src={ProfileImg}
            alt="profile"
            className="min-w-[30px]"
          />
        </div>
      </div>
      <div className="nav-mobile hidden bg-th-red-500 relative justify-center">
        <button className="nav-btn-menu">
          <Image src={MenuImg} alt="menu" />
        </button>
        <Image src={BackgroundMobileImg} width={375} height={344} alt="" />
        <Link href="/" className="z-20 mt-6">
          <Image src={LogoWhiteImg} alt="logo" />
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
