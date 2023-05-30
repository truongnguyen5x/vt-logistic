"use client";
import { FC, Fragment, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "@app/styles.module.scss";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import TabMyService from "./TabMyService";
import TabLookup from "./tab-look-up";

import {
  ComponentHomeHomeLookup,
  ComponentHomeHomeService,
  ComponentHomeHomeTab,
  ComponentHomeServiceContact,
  Maybe,
} from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import { ApolloWrapper } from "@api/client";

interface HomeTabProps {
  tabs?: Maybe<Array<Maybe<ComponentHomeHomeTab>>>;
  services?: Maybe<Array<Maybe<ComponentHomeHomeService>>>;
  lookups?: Maybe<Array<Maybe<ComponentHomeHomeLookup>>>;
  contacts?: Maybe<Array<Maybe<ComponentHomeServiceContact>>>;
}

const HomeTab: FC<HomeTabProps> = ({ tabs, contacts, lookups, services }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChangeTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Fragment>
      <div className="flex justify-center gap-4 mt-20 mb-10 sx:mb-20 animation mx-4 sm:mx-0">
        {tabs?.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => handleChangeTab(idx)}
            className={clsx(
              " flex items-center justify-between",
              styles.homeTabSection,
              {
                [styles.homeTabSelected]: activeTab == idx,
              }
            )}
          >
            <div>
              <p>
                {tab?.title}
                <Image
                  src={activeTab == idx ? RightImg : RightDarkImg}
                  width={28}
                  height={28}
                  alt=""
                />
              </p>
            </div>
            <Image
              src={getPrefixImageUrl(tab?.image?.data?.attributes?.url)}
              alt="lookup"
              width={56}
              height={56}
            />
          </div>
        ))}
      </div>
      <div className="animation" data-animation-delay="0.4s">
        {activeTab == 0 && (
          <ApolloWrapper>
            <TabLookup lookups={lookups} contacts={contacts} />
          </ApolloWrapper>
        )}
        {activeTab == 1 && <TabMyService services={services} />}
      </div>
    </Fragment>
  );
};

export default HomeTab;
