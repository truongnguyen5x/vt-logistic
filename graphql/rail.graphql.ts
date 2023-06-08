export const getRailQueryString = /* GraphQL */ `
  query getRails($locale: I18NLocaleCode) {
    railTransportations(locale: $locale) {
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
          internal_price_table {
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
            number
            object
            title
          }
          services {
            title
          }
          service_image {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          advantag_image {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          advantages {
            title
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
