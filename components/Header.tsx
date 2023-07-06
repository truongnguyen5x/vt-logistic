"use client";

import LogoImg from "@assets/images/logos/logo_light.svg";
import Image from "next/image";
import Link from "next-intl/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import MenuImg from "@assets/images/icons/menu.svg";
import LogoWhiteImg from "@assets/images/logos/logo_white.svg";
import { usePathname } from "next-intl/client";
import SearchHeader from "@components/SearchHeader";
import ProfileHeader from "@components/ProfileHeader";
import SelectLocale from "@components/SelectLocale";
import { ILocale } from "@type/locale";
import useOutsideClose from "@hooks/use-click-outside";
import useWindowSize from "@hooks/use-window-size";

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
  const ref = useRef(null);
  const pathName = usePathname();

  const { isMobile, width } = useWindowSize();

  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [menu1stOpen, setMenu1stOpen] = useState<string | undefined>();
  const [menu2ndOpen, setMenu2ndOpen] = useState<string | undefined>();

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

  const handleClose = () => {
    setOpenNav(false);
  };

  useOutsideClose(ref, handleClose);

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
              key: "rail-transportation",
            },
            {
              path: "/service/transportation/sea-transport",
              key: "sea-transport",
            },
            {
              path: "/service/transportation/air-transport",
              key: "air-transport",
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
          path: "/service/endpoint-delivery",
          key: "endpoint-delivery",
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
      <header
        ref={ref}
        className={clsx("header-wrap", {
          show: openNav,
          home: !segment,
        })}
      >
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
              <ul
                className={clsx("navbar-nav animation", {
                  hide: width < 1920 && width >= 768 && openSearch,
                })}
              >
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
                <SearchHeader
                  open={openSearch}
                  setOpen={setOpenSearch}
                  placeholder={titles.search}
                  setOpenNav={setOpenNav}
                />
                <SelectLocale locale={locale} />
                <ProfileHeader />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="header-space"></div>
    </Fragment>
  );
};

export default Header;
