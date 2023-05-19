import Clock from "@assets/images/icons/clock.svg";
import { IPost } from "@type/post";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type CardProps = {
  post: IPost;
  className?: string;
  href: string;
};

export const SideCard: FC<CardProps> = ({ post, className, href }) => {
  return (
    <Link href={href} className={className}>
      <Image src={post.img} alt="" width={490} height={240} />
      <div className="pt-6 px-8 pb-8 bg-th-gray-220 max-w-[490px]">
        <div className="flex items-center gap-3 mb-2">
          <Image src={Clock} alt="" width={14} height={14} />
          <div className="text-th-gray-300 text-[13px] leading-[22px]">
            {format(new Date(post.created_at), "dd-MM-yyyy")}
          </div>
        </div>
        <h5 className="text-th-gray-320 text-xl font-semibold">{post.title}</h5>
      </div>
    </Link>
  );
};
