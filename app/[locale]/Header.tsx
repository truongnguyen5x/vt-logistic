"use client";

import LogoImg from "@assets/images/logos/logo_light.svg";
import Image from "next/image";
import SearchImg from "@assets/images/icons/search.svg";
import VnFlagImg from "@assets/images/flag/vn.png";
import Link from "next/link";
import ProfileImg from "@assets/images/icons/profile.svg";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { FC } from "react";
import clsx from "clsx";

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
              <Link href={i.path}>{titles[i.key]}</Link>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto h-[74px] flex justify-between items-center">
      <Link href="/" className="animation">
        <Image src={LogoImg} alt="logo" />
      </Link>
      <nav>
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
                className="w-44 block text-center h-[74px] leading-[74px] transition-colors hover:text-th-red-500"
                href={i.path}
              >
                {titles[i.key]}
              </Link>
              {renderSecondLevelMenu(i.children)}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-7 animation" data-animation-delay="0.8s">
        <Image src={SearchImg} alt="search-icon" />
        <Image src={VnFlagImg} alt="flag" />
        <Image src={ProfileImg} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
