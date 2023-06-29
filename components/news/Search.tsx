"use client";

import Image from "next/image";
import Search from "@assets/images/icons/search-status.svg";
import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type Props = {
  placeholder?: string;
};

const SearchInput: FC<Props> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [keyword, setKeyword] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  useEffect(() => {
    if (!keyword && keyword !== searchParams.get("keyword")) {
      setKeyword(searchParams.get("keyword") || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (!!keyword && keyword !== searchParams.get("keyword")) {
  //     setTimeout(() => {
  //       router.replace(`${pathname}?page=1&keyword=${keyword}`);
  //     }, 3000);
  //   }
  // }, [keyword, searchParams, pathname, router]);

  const onSearch = () => {
    const regex = /\/news\/(.*)\/.*/gm;
    const match = regex.exec(pathname);
    if (match) {
      router.replace(`/news/${match[1]}?page=1&keyword=${keyword}`);
    } else {
      router.replace(`${pathname}?page=1&keyword=${keyword}`);
    }
  };

  return (
    <div
      className="relative h-14 w-full bg-th-gray-220 px-6 py-4 animation"
      data-animation-delay="0.3s"
    >
      <input
        placeholder={placeholder}
        value={keyword}
        onChange={handleChange}
        onKeyDown={onEnter}
        className="pr-12 bg-th-gray-220 w-full focus-visible:outline-none h-full"
      />
      <Image
        src={Search}
        alt=""
        width={24}
        height={24}
        onClick={onSearch}
        className="absolute right-6 top-4 cursor-pointer"
      />
    </div>
  );
};

export default SearchInput;
