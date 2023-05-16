import { IPost } from "@type/post";
import { FC } from "react";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import ClockImg from "@assets/images/icons/clock.svg";
import { formatDate } from "@ultility/date_time";

interface PostHomeProps {
  data: IPost;
  detailTxt: string;
  size?: "LARGE" | "NORMAL";
}

const PostHome: FC<PostHomeProps> = ({ data, size = "NORMAL" }) => {
  return (
    <div className={styles.postItem}>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col">
        <div className={styles.postImg}>
          <Image
            src={data.img}
            width={size == "NORMAL" ? 390 : 685}
            height={size == "NORMAL" ? 193 : 471}
            alt=""
          />
        </div>
        <div className={styles.postContent}>
          <p className={styles.postTitle}>{data.title}</p>
          <p className={styles.postTimestamp}>
            <Image src={ClockImg} alt="clock" width={15} height={15} />
            {formatDate(data.created_at)}
          </p>
          <p className={styles.postDes}>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostHome;
