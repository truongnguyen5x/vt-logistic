"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Dislike from "@assets/images/icons/dislike.svg";
import Like from "@assets/images/icons/like.svg";
import { ILocale } from "@type/locale";
import { NewsEntity, UpdatePageNewDocument } from "@generated/graphql";
import { useMutation } from "@apollo/client";
import { getLanguageForApi } from "@ultility/index";
import { ApolloWrapper } from "@graphql/client";

type Props = {
  dataNew: NewsEntity | null;
  locale: ILocale;
};

const ReactPostContent: FC<Props> = ({ dataNew, locale }) => {
  const [reactPost, setReactPost] = useState<string[] | null>()
  
  const [update] = useMutation(UpdatePageNewDocument, {
    onError(error, clientOptions) {
      console.log(error, clientOptions);
    },
  });

  useEffect(() => {
    if(!!Cookies.get("react")) {
      const data = Cookies.get("react")
      !!data && setReactPost(data.split(","))
    }
  }, [])  

  const handleLike = () => {
    if (!!reactPost?.length && reactPost?.includes(`${dataNew?.id}+`)) {
      if (!!dataNew?.id) {
        update({
          variables: {
            id: dataNew.id,
            data: { like: dataNew.attributes?.like - 1 },
            locale: getLanguageForApi(locale),
          },
        });
      }

      const newReact = reactPost.filter(item => item !== `${dataNew?.id}+`)
      Cookies.set("react", newReact.join(","))
      setReactPost(newReact)
    } else {
      if (!!dataNew?.id) {
        update({
          variables: {
            id: dataNew.id,
            data: { like: dataNew.attributes?.like + 1 },
            locale: getLanguageForApi(locale),
          },
        });
      }
      let newReact = !!reactPost?.length ? [...reactPost] : []
      if(newReact.includes(`${dataNew?.id}-`)) {
        const indexR = newReact.findIndex(item => item === `${dataNew?.id}-`)
        newReact.splice(indexR, 1, `${dataNew?.id}+`)
      }
      else {
        newReact?.push(`${dataNew?.id}+`)
      }
      Cookies.set("react", newReact.join(","))
      setReactPost(newReact)
    }
  };

  const handleDislike = () => {
    if (!!reactPost?.length && reactPost?.includes(`${dataNew?.id}-`)) {
      if (!!dataNew?.id) {
        update({
          variables: {
            id: dataNew.id,
            data: { dislike: dataNew.attributes?.dislike - 1 },
            locale: getLanguageForApi(locale),
          },
        });
      }
      const newReact = reactPost.filter(item => item !== `${dataNew?.id}-`)
      Cookies.set("react", newReact.join(","))
      setReactPost(newReact)
    } else {
      if (!!dataNew?.id) {
        update({
          variables: {
            id: dataNew.id,
            data: { dislike: dataNew.attributes?.dislike + 1 },
            locale: getLanguageForApi(locale),
          },
        });
      }
      let newReact = !!reactPost?.length ? [...reactPost] : []
      if(newReact.includes(`${dataNew?.id}+`)) {
        const indexR = newReact.findIndex(item => item === `${dataNew?.id}+`)
        newReact.splice(indexR, 1, `${dataNew?.id}-`)
      } else {
        newReact?.push(`${dataNew?.id}-`)
      }
      Cookies.set("react", newReact.join(","))
      setReactPost(newReact)
    }
  };

  return (
    <>
      <div className={`p-3 rounded-full ${
          reactPost?.includes(`${dataNew?.id}+`)
            ? "bg-th-red-500"
            : "bg-th-gray-220"
        }`}>
        <Image
          src={Like}
          alt=""
          onClick={handleLike}
          className="cursor-pointer"
          width={20}
          height={20}
        />
      </div>
      <div className={`p-3 rounded-full ${
          reactPost?.includes(`${dataNew?.id}-`)
            ? "bg-th-red-500"
            : "bg-th-gray-220"
        }`}>
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
    <ApolloWrapper>
      <ReactPostContent dataNew={dataNew} locale={locale} />
    </ApolloWrapper>
  );
};

export default ReactPost;
