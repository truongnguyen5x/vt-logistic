"use client";

import Image from "next/image";
import Messenger from "@assets/images/icons/messenger.png";
import BackTop from "@assets/images/icons/back_top.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const BackToTop = () => {
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
    <div className="fixed right-20 bottom-20 flex flex-col items-center gap-3">
      <Link href="http://m.me/LogisticsViettel" target="_blank">
        <Image src={Messenger} alt="" height={70} width={70} />
      </Link>
      {showBtn && (
        <Image
          src={BackTop}
          alt=""
          height={40}
          width={40}
          className="cursor-pointer"
          onClick={handleBackToTop}
        />
      )}
    </div>
  );
};

export default BackToTop;
