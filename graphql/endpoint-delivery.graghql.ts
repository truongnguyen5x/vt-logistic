export const getEndpointDeliveryQueryString = /* GraphQL */ `
  query getEndpointDeliverys($locale: I18NLocaleCode) {
    endpointDeliveries(locale: $locale) {
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
          infomation {
            info_img {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            info_sub_img {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            description
            advantage {
              title
            }
          }
          bg_price {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
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
        }
      }
    }
  }
`;
