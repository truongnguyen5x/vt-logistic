"use client";
import { Fragment, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "@app/styles.module.scss";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import TabMyService from "./TabMyService";

export type IAboutContent = {
  tabs: Array<{ title: string; img: string }>;
};

const AboutInfoTab = ({ data }: { data: IAboutContent }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Fragment>
      <div className="flex justify-center gap-4 mt-20">
        {data.tabs.map((i, idx) => (
          <div
            onClick={() => setActiveTab(idx)}
            className={clsx(
              " flex items-center justify-between",
              styles.tabWp,
              {
                [styles.selectedTab]: activeTab == idx,
              }
            )}
          >
            <div>
              <p>{i.title}</p>
              <Image
                src={activeTab == idx ? RightImg : RightDarkImg}
                width={28}
                height={28}
                alt=""
              />
            </div>
            <Image src={i.img} alt="lookup" width={56} height={56} />
          </div>
        ))}
      </div>
      {activeTab == 1 && <TabMyService />}
    </Fragment>
  );
};

export default AboutInfoTab;
