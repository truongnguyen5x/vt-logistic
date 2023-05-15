"use client";
import { FC, Fragment, useState } from "react";
import { ILookupContent } from ".";
import clsx from "clsx";
import styles from "@app/styles.module.scss";

interface TabLookupProps {
  content: ILookupContent;
}

const TabLookup: FC<TabLookupProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (idx: number) => {
    setActiveTab(idx);
  };
  return (
    <Fragment>
      <div className="container mx-auto flex">
        {[0, 1, 2].map((i) => (
          <div
            className={clsx(styles.tabHeaderLookup)}
            onClick={() => handleChangeTab(i)}
            key={i}
          >
            {content.title[i]}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default TabLookup;
