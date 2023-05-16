import { IPost } from "@type/post";
import { FC } from "react";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import ClockImg from "@assets/images/icons/clock.svg";
import { formatDate } from "@ultility/date_time";

import Link from "next-intl/link";
import ArrowRightImg from "@assets/images/icons/arrow_right_red.svg";

interface PostHomeProps {
  postData: IPost;
  detailTxt: string;
  size?: "LARGE" | "NORMAL";
}

const PostHome: FC<PostHomeProps> = ({
  postData,
  size = "NORMAL",
  detailTxt,
}) => {
  return (
    <div className={styles.postItem}>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col">
        <div className={styles.postImg}>
          <Image
            src={postData.img}
            width={size == "NORMAL" ? 390 : 685}
            height={size == "NORMAL" ? 193 : 471}
            alt=""
          />
        </div>
        <div className={styles.postContent}>
          <p
            className={
              size == "NORMAL" ? styles.postTitle : styles.postTitleLarge
            }
          >
            {postData.title}
          </p>
          <p
            className={
              size == "NORMAL"
                ? styles.postTimestamp
                : styles.postTimestampLarge
            }
          >
            <Image src={ClockImg} alt="clock" width={15} height={15} />
            {formatDate(postData.created_at)}
          </p>
          <p
            className={size == "NORMAL" ? styles.postDes : styles.postDesLarge}
          >
            {postData.content}
          </p>
        </div>
      </div>
      <Link
        className={size == "NORMAL" ? styles.postLink : styles.postLinkLarge}
        href={"/news/" + postData.slug}
      >
        {detailTxt}

        <Image src={ArrowRightImg} width={15} height={15} alt="next" />
      </Link>
    </div>
  );
};

export default PostHome;
