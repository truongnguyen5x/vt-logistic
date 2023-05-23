import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import { gql } from "@apollo/client";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_API_URL,
    }),
  });
});

const query = gql`
  query GetHome($id: ID) {
    home(id: $id) {
      data {
        attributes {
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
// variables
export const getHome = async () => {
  const { data } = await getClient().query({ query, variables: { id: 3 } });
  console.log(data);
};
