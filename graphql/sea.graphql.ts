export const getSeaTransportQueryString = /* GraphQL */ `
  query getSeaTransport($locale: I18NLocaleCode) {
    seaTransports(locale: $locale) {
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
          banner {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          description
          features {
            from
            to
            unit
            title
            image {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
          }
          domestic_services {
            title
          }
          domestic_image {
            data {
              attributes {
                url
                previewUrl
              }
            }
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
            name
            price_table {
              title
              price_image {
                data {
                  attributes {
                    url
                    previewUrl
                  }
                }
              }
            }
            properties {
              title
            }
          }
          others {
            title
            image {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            link
          }
          domestic_price {
            title
            price_image {
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
