"use client";
import VnFlagImg from "@assets/images/flag/vn.png";
import clsx from "clsx";
import { ILocale, i18n } from "@configs/i18n";
import { LOCALES } from "@ultility/constant";
import Image from "next/image";
import { FC, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "next-intl/client";
import Link from "next-intl/link";

interface SelectLocaleProps {
  locale: ILocale;
}

const SelectLocale: FC<SelectLocaleProps> = ({ locale }) => {
  const pathName = usePathname();
  const router = useRouter();

  const [openPopup, setOpenPopup] = useState(false);

  const selectedLang = useMemo(() => {
    return LOCALES.find((i) => i.lang == locale);
  }, [locale]);

  return (
    <div className="locale-header" onClick={() => setOpenPopup(!openPopup)}>
      <Image
        width={30}
        height={30}
        src={selectedLang?.flag || VnFlagImg}
        alt="flag"
      />
      <div></div>

      <ul className={clsx("locale-dropdown", { show: openPopup })}>
        {LOCALES.map((i, idx) => (
          <li
            key={idx}
            className={clsx({ show: selectedLang?.lang == i.lang })}
          >
            <Link href={pathName} locale={i.lang}>
              <Image src={i.flag} alt="" /> {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectLocale;
