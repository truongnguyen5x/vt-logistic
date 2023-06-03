import { FC } from "react";
import Link from "next-intl/link";

import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import Image from "next/image";
import clsx from "clsx";

type IBreadCrumb = {
  title: string;
  link: string;
  active?: boolean;
};

type IBreadCrumbProps = {
  breadcrumbs: IBreadCrumb[];
  className?: string;
};

const BreadCrumbs: FC<IBreadCrumbProps> = ({ breadcrumbs, className = "" }) => {
  return (
    <section className={clsx("relative animation", className)}>
      {!!breadcrumbs.length && (
        <div className="inline">
          {breadcrumbs.map((item, index) => (
            <p key={index} className="inline mr-2 last:mr-0">
              <Link
                href={item.link}
                className={clsx("font-medium hover:text-th-red-500", {
                  "text-th-red-500": item.active,
                  "text-th-gray-300": !item.active,
                })}
              >
                {item.title}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <Image
                  className="inline-block"
                  src={RightArrowImg}
                  alt=""
                  width={16}
                  height={16}
                />
              )}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default BreadCrumbs;
