"use client";

import LogoImg from "@assets/images/logos/logo_light.svg";
import Image from "next/image";
import SearchImg from "@assets/images/icons/search.svg";
import VnFlagImg from "@assets/images/flag/vn.png";
import Link from "next/link";
import ProfileImg from "@assets/images/icons/profile.svg";
import { useTranslations } from "next-intl";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { FC } from "react";

import clsx from "clsx";

interface HeaderProps {
  titles: string[];
}

const Header: FC<HeaderProps> = ({ titles }) => {
  const segment = useSelectedLayoutSegment();

  const listTab = [
    "/",
    "/introduce",
    "/service",
    "/news",
    "/recruitment",
    "/contact",
  ];

  return (
    <div className="container mx-auto h-[74px] flex justify-between items-center">
      <Link href="/" className="header-logo">
        <Image src={LogoImg} alt="logo" />
      </Link>
      <nav>
        <ul className="grid grid-cols-6 gap-2">
          {listTab.map((i, idx) => (
            <li
              key={idx}
              className={clsx("nav-btn", {
                "nav-btn-selected": "/" + (segment || "") == i,
              })}
              style={{
                animationDelay: `${1.1 + 0.1 * idx}s`,
              }}
            >
              <Link
                className="w-44 block text-center h-[74px] leading-[74px] transition-colors hover:text-th-red-500"
                href={i}
              >
                {titles[idx]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-7 header-right-action">
        <Image src={SearchImg} alt="search-icon" />
        <Image src={VnFlagImg} alt="flag" />
        <Image src={ProfileImg} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
