"use client";

import LogoImg from "@assets/images/logos/logo_light.svg";
import Image from "next/image";
import SearchImg from "@assets/images/icons/search.svg";
import VnFlagImg from "@assets/images/flag/vn.png";
import Link from "next/link";
import ProfileImg from "@assets/images/icons/profile.svg";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { FC, Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import MenuImg from "@assets/images/icons/menu.svg";
import LogoWhiteImg from "@assets/images/logos/logo_white.svg";
import BackgroundMobileImg from "@assets/images/background/background_mobile.png";
import CloseImg from "@assets/images/icons/close.svg";
import { usePathname } from "next-intl/client";
import SearchHeader from "@components/SearchHeader";
import ProfileHeader from "@components/ProfileHeader";
import SelectLocale from "@components/SelectLocale";
import { ILocale } from "@configs/i18n";

interface HeaderProps {
  titles: any;
  locale: ILocale;
}

type IMenu = {
  path: string;
  key: string;
  children?: IMenu[];
};

const Header: FC<HeaderProps> = ({ titles, locale }) => {
  const segment = useSelectedLayoutSegment();
  const [openNav, setOpenNav] = useState(false);
  const [menu1stOpen, setMenu1stOpen] = useState<string | undefined>();
  const [menu2ndOpen, setMenu2ndOpen] = useState<string | undefined>();

  const pathName = usePathname();

  useEffect(() => {
    setMenu1stOpen(pathName);
    setMenu2ndOpen(pathName);
  }, [pathName]);

  const isToggle = (path: string) => {
    if (path == "/") {
      return menu1stOpen == "/";
    } else {
      return menu1stOpen?.includes(path);
    }
  };

  const isToggle2 = (path: string) => {
    if (path == "/") {
      return menu2ndOpen == "/";
    } else {
      return menu2ndOpen?.includes(path);
    }
  };

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
          path: "/service",
          key: "service_common",
        },
        {
          path: "/service/transportation",
          key: "transportation",
          children: [
            {
              path: "/service/transportation/trucking",
              key: "trucking",
            },
            {
              path: "/service/transportation/rail-transportation",
              key: "rail_transportation",
            },
            {
              path: "/service/transportation/sea-transport",
              key: "sea_transport",
            },
            {
              path: "/service/transportation/air-freight",
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

  const onCloseNav = () => {
    setTimeout(() => {
      setOpenNav(false);
      setMenu1stOpen(undefined);
      setMenu2ndOpen(undefined);
    }, 500);
  };

  const renderSecondLevelMenu = (menus?: IMenu[]) => {
    if (menus && menus.length) {
      return (
        <ul className="second-nav">
          {menus.map((i, idx) => (
            <li
              key={idx}
              className={clsx("second-nav-item", {
                "mobile-selected": i.path == pathName,
                "mobile-toggle": isToggle2(i.path),
                toggleable: i.children,
              })}
            >
              {i.children ? (
                <Fragment>
                  <div
                    className="second-nav-link cursor-pointer"
                    onClick={() => handleOpenMenu2(i.path)}
                  >
                    {titles[i.key]} <div />
                  </div>
                  {renderThreeLevelMenu(i.children)}
                </Fragment>
              ) : (
                <Link
                  className="second-nav-link"
                  href={i.path}
                  onClick={onCloseNav}
                >
                  {titles[i.key]}
                </Link>
              )}
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
        <ul className="third-nav">
          {menus.map((i, idx) => (
            <li key={idx}>
              <Link
                className={clsx("text-th-gray-400 font-medium", {
                  "mobile-selected": i.path == pathName,
                })}
                onClick={onCloseNav}
                href={i.path}
              >
                {titles[i.key]}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const handleOpenNavbar = () => {
    setOpenNav(!openNav);
  };

  const handleOpenMenu = (path: string) => {
    if (menu1stOpen == path) {
      setMenu1stOpen("");
    } else {
      setMenu1stOpen(path);
    }
  };
  const handleOpenMenu2 = (path: string) => {
    if (menu2ndOpen == path) {
      setMenu2ndOpen("");
    } else {
      setMenu2ndOpen(path);
    }
  };

  return (
    <Fragment>
      <header className={clsx("header-wrap", { show: openNav })}>
        <button className="navbar-toggler animation" onClick={handleOpenNavbar}>
          <Image src={MenuImg} alt="menu" />
        </button>
        <div className="container mx-auto">
          <nav className="navbar">
            <Link href="/" className="animation navbar-brand">
              <Image src={LogoImg} alt="logo" />
              <Image src={LogoWhiteImg} alt="logo" />
            </Link>
            <div className={clsx("navbar-collapse", { show: openNav })}>
              <ul className="navbar-nav">
                {listTab.map((i, idx) => (
                  <li
                    key={idx}
                    className={clsx("first-nav-item animation", {
                      "desktop-selected": "/" + (segment || "") == i.path,
                      "mobile-selected": i.path == pathName,
                      "mobile-toggle": isToggle(i.path),
                      toggleable: i.children,
                    })}
                    data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                  >
                    {i.children ? (
                      <div
                        className="first-nav-link cursor-pointer"
                        onClick={() => handleOpenMenu(i.path)}
                      >
                        {titles[i.key]} <div></div>
                      </div>
                    ) : (
                      <Link
                        href={i.path}
                        className="first-nav-link"
                        onClick={onCloseNav}
                      >
                        {titles[i.key]}
                      </Link>
                    )}
                    {renderSecondLevelMenu(i.children)}
                  </li>
                ))}
              </ul>
              <div className="animation nav-action" data-animation-delay="0.8s">
                <SearchHeader />
                <SelectLocale locale={locale} />
                <ProfileHeader />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Image
        className="nav-mobile-bg"
        src={BackgroundMobileImg}
        width={375}
        height={344}
        alt=""
      />
      <div className="header-space"></div>
    </Fragment>
  );
};

export default Header;
