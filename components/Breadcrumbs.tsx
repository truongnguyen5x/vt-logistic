import { FC } from "react";
import Link from "next/link";

import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import Image from "next/image";

type IBreadCrumb = {
  title: string;
  link: string;
  active?: boolean;
};

type IBreadCrumbProps = {
  breadcrumbs: IBreadCrumb[];
  className?: string;
};

const BreadCrumbs: FC<IBreadCrumbProps> = ({ breadcrumbs, className = '' }) => {
  return (
    <section className={`relative ${className}`}>
      {!!breadcrumbs.length && (
        <ul className="flex items-center">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-2.5 mr-2 last:mr-0">
              <Link href={item.link} className={`font-medium hover:text-th-red-500 ${item.active ? 'text-th-red-500' : 'text-th-gray-300'}`}>{item.title}</Link>
              {index < breadcrumbs.length - 1 &&<Image src={RightArrowImg} alt="" width={16} height={16} />}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BreadCrumbs;
