export const getWarehouseQueryString = /* GraphQL */ `
  query getWarehouses($locale: I18NLocaleCode) {
    warehouses(locale: $locale) {
      data {
        attributes {
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
        }
      }
    }
  }
`
