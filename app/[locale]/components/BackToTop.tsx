"use client";

import Image from "next/image";
import Messenger from "@assets/images/icons/messenger.png";
import BackTop from "@assets/images/icons/back_top.svg";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";

const BackToTop = ({ txt }: { txt: string }) => {
  const [showBtn, setShowBtn] = useState<boolean>(false);

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
        className="fixed right-[98px] bottom-20 transition duration-700"
        style={{ transform: showBtn ? "translateY(-90px)" : "" }}
      >
        <Image src={Messenger} alt="" height={70} width={70} />
      </Link>
      <div
        className="fixed right-20 bottom-20 cursor-pointer flex flex-col gap-3 items-center overflow-hidden transition duration-5000"
        style={{ opacity: showBtn ? 1 : 0 }}
        onClick={handleBackToTop}
      >
        <Image src={BackTop} alt="" height={40} width={40} />
        <p className="font-medium text-lg">{txt}</p>
      </div>
    </Fragment>
  );
};

export default BackToTop;
