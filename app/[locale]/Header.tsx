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
import SearchHeader from "./components/Search";
import ProfileHeader from "./components/Profile";
import SelectLocale from "./components/SelectLocale";

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
  const [openNav, setOpenNav] = useState(false);
  const [menuOpened, setMenuOpened] = useState<string | undefined>();
  const [menuOpened2, setMenuOpened2] = useState<string | undefined>();

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpened(pathname);
    setMenuOpened2(pathname);
  }, [pathname]);

  const isToggle = (path: string) => {
    if (path == "/") {
      return menuOpened == "/";
    } else {
      return menuOpened?.includes(path);
    }
  };

  const isToggle2 = (path: string) => {
    if (path == "/") {
      return menuOpened2 == "/";
    } else {
      return menuOpened2?.includes(path);
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

  const renderSecondLevelMenu = (menus?: IMenu[]) => {
    if (menus && menus.length) {
      return (
        <ul className="second-nav">
          {menus.map((i, idx) => (
            <li
              key={idx}
              className={clsx("second-nav-item", {
                "mobile-selected": i.path == pathname,
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
                <Link className="second-nav-link" href={i.path}>
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
                  "mobile-selected": i.path == pathname,
                })}
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
    if (menuOpened == path) {
      setMenuOpened("");
    } else {
      setMenuOpened(path);
    }
  };
  const handleOpenMenu2 = (path: string) => {
    if (menuOpened2 == path) {
      setMenuOpened2("");
    } else {
      setMenuOpened2(path);
    }
  };

  return (
    <Fragment>
      <header className={clsx("header-wrap", { show: openNav })}>
        <button className="navbar-toggler" onClick={handleOpenNavbar}>
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
                      "mobile-selected": i.path == pathname,
                      "mobile-toggle": isToggle(i.path),
                      toggleable: i.children,
                    })}
                    data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                    // style={{
                    //   animationDelay: `${1.1 + 0.1 * idx}s`,
                    // }}
                  >
                    {i.children ? (
                      <div
                        className="first-nav-link cursor-pointer"
                        onClick={() => handleOpenMenu(i.path)}
                      >
                        {titles[i.key]} <div></div>
                      </div>
                    ) : (
                      <Link href={i.path} className="first-nav-link">
                        {titles[i.key]}
                      </Link>
                    )}
                    {renderSecondLevelMenu(i.children)}
                  </li>
                ))}
              </ul>
              <div className="animation nav-btn" data-animation-delay="0.8s">
                <SearchHeader />
                <SelectLocale />
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
      <div className="header-after"></div>
    </Fragment>
  );
};

export default Header;
