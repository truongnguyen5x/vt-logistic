"use client";

import Image from "next/image";
import { FC } from "react";
import Cookies from "js-cookie";
import Dislike from "@assets/images/icons/dislike.svg";
import Like from "@assets/images/icons/like.svg";
import { ILocale } from "@configs/i18n";
import { NewsEntity, UpdatePageNewDocument } from "@generated/graphql";
import { useMutation } from "@apollo/client";
import { getLanguageForApi } from "@ultility/index";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import { makeClient, makeSuspenseCache } from "@api/client";

type Props = {
  dataNew: NewsEntity | null;
  locale: ILocale;
};

const ReactPostContent: FC<Props> = ({ dataNew, locale }) => {
  const [update] = useMutation(UpdatePageNewDocument, {
    onError(error, clientOptions) {
      console.log(error, clientOptions);
    },
  });

  const handleLike = () => {
    if (!!dataNew?.id) {
      update({
        variables: {
          id: dataNew.id,
          data: { like: dataNew.attributes?.like + 1 },
          locale: getLanguageForApi(locale),
        },
      });
    }
    Cookies.set("react", "1");
  };

  const handleDislike = () => {
    if (!!dataNew?.id) {
      update({
        variables: {
          id: dataNew.id,
          data: { dislike: dataNew.attributes?.dislike + 1 },
          locale: getLanguageForApi(locale),
        },
      });
    }
    Cookies.set("react", "2");
  };

  return (
    <>
      <div className="p-3 bg-th-gray-220 rounded-full">
        <Image
          src={Like}
          alt=""
          onClick={handleLike}
          className="cursor-pointer"
          width={20}
          height={20}
        />
      </div>
      <div className="p-3 bg-th-gray-220 rounded-full">
        <Image
          src={Dislike}
          alt=""
          onClick={handleDislike}
          className="cursor-pointer"
          width={20}
          height={20}
        />
      </div>
    </>
  );
};

const ReactPost: FC<Props> = ({ dataNew, locale }) => {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}
    >
      <ReactPostContent dataNew={dataNew} locale={locale} />
    </ApolloNextAppProvider>
  );
};

export default ReactPost;
