import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// import { gql } from "@generated/gql"

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_API_URL,
    }),
  });
});

export const getHomeQueryString = /* GraphQL */ `
  query GetHome($locale: I18NLocaleCode) {
    homes(locale: $locale) {
      data {
        attributes {
          SEO {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
          banners {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          abouts {
            is_plus
            heading
            subject
            detail
          }
          features {
            icon {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            title
          }
          home_tabs {
            image {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            title
          }
          services {
            icon {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            title
            url
            background {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            subs {
              title
              url
            }
          }
          lookups {
            title
            background {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
          }
          contacts {
            name
            phone
          }
          partners {
            image {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const getFooterQueryString = /* GraphQL */ `
  query GetFooter($locale: I18NLocaleCode) {
    footers(locale: $locale) {
      data {
        attributes {
          links {
            title
            links {
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
              title
              url
              is_external_link
            }
          }
          infos {
            title
            url
          }
          socials {
            icon {
              data {
                attributes {
                  url
                }
              }
            }
            url
          }
        }
      }
    }
  }
`;
