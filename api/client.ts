import { ApolloClient, ApolloLink, HttpLink, SuspenseCache } from "@apollo/client";
import { NextSSRInMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";
import { ILocale } from "@configs/i18n";
import fetch from 'cross-fetch'

export const fetchFromClient = async <T = unknown>(
  page: string,
  locale: ILocale
) => {
  const res: T = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${page}/${locale}.json`,
    { cache: "no-store" }
  ).then((res) => res.json());
  return res;
};


export function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
    fetch
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function makeSuspenseCache() {
  return new SuspenseCache();
}
