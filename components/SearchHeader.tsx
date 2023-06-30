"use client";
import SearchImg from "@assets/images/icons/search.svg";
import SearchLightImg from "@assets/images/icons/search_light.svg";
import useOutsideClose from "@hooks/use-click-outside";
import clsx from "clsx";
import Image from "next/image";
import CloseImg from "@assets/images/icons/close_dark.svg";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";
import {
  ChangeEvent,
  Dispatch,
  FC,
  Fragment,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next-intl/client";
import useWindowSize from "@hooks/use-window-size";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
}

const SearchHeader: FC<Props> = ({ open, setOpen, placeholder }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const segment = useSelectedLayoutSegment();
  const [keyword, setKeyword] = useState("");
  const { isDesktop, width } = useWindowSize();

  const ref = useRef(null);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (segment == "/search") {
      setOpen(true);
      setKeyword(searchParams.get("keyword") || "");
    }
  }, [segment, searchParams, setOpen]);

  const handleSearch = () => {
    if (open) {
      submit();
    } else {
      setOpen(true);
      setTimeout(() => {
        refInput?.current?.focus();
      }, 500);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const submit = () => {
    if (keyword.trim()) {
      setOpen(false);
      router.push("/search?keyword=" + keyword.trim());
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      submit();
    }
  };

  useOutsideClose(ref, handleClose);

  return (
    <Fragment>
      <div className={clsx("search-header", { open })} ref={ref}>
        <Image
          width={30}
          height={30}
          src={SearchImg}
          alt="search-icon"
          onClick={handleSearch}
        />
        <Image
          width={30}
          height={30}
          src={SearchLightImg}
          alt="search-icon"
          onClick={handleSearch}
        />
        <input
          className={clsx({ show: open || width <= 991 })}
          ref={refInput}
          placeholder={placeholder}
          type="text"
          value={keyword}
          onKeyDown={onKeyDown}
          onChange={onChangeKeyword}
        />
        <button
          onClick={() => setKeyword("")}
          className={clsx({ show: (open || width <= 991) && keyword })}
        >
          <Image src={CloseImg} width={24} height={24} alt="" />
        </button>
      </div>
    </Fragment>
  );
};

export default SearchHeader;
