"use client";

import Image from "next/image";
import Messenger from "@assets/images/icons/messenger.png";
import BackTop from "@assets/images/icons/back_top.svg";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import useWindowSize from "@hooks/use-window-size";

const BackToTop = ({ txt }: { txt: string }) => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const { isDesktop } = useWindowSize();

  const toggleVisible = () => {
    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Fragment>
      <Link
        href="http://m.me/LogisticsViettel"
        target="_blank"
        title="Contact us via Messenger"
        className="z-20 fixed right-3  lg:right-[98px] bottom-5 lg:bottom-20 transition duration-700"
        style={{
          transform: showBtn
            ? isDesktop
              ? "translateY(-90px)"
              : "translateY(-40px)"
            : "",
        }}
      >
        <Image
          className="w-11 md:w-16 lg:w-[70px] h-11 md:h-16 lg:h-[70px]"
          src={Messenger}
          alt=""
          height={70}
          width={70}
        />
      </Link>
      <div
        className="z-10 fixed right-5 md:right-[26px] lg:right-20 bottom-5  lg:bottom-20 cursor-pointer flex flex-col gap-3 items-center overflow-hidden transition duration-5000"
        style={{ opacity: showBtn ? 1 : 0 }}
        onClick={handleBackToTop}
      >
        <Image
          className="w-7 md:w-10 lg:w-10 h-7 md:h-10 lg:h-10"
          src={BackTop}
          alt=""
          height={40}
          width={40}
        />
        <p className="hidden lg:block font-medium text-lg">{txt}</p>
      </div>
    </Fragment>
  );
};

export default BackToTop;
