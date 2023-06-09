export const getAirTransportQueryString = /* GraphQL */ `
  query getAirTransport($locale: I18NLocaleCode) {
    airTransports(locale: $locale) {
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
          international_services {
            title
          }
          international_image {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          international_price_table {
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
        }
      }
    }
  }
`;
