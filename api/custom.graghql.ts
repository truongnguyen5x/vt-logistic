export const getCustomQueryString = /* GraphQL */ `
  query getCustoms($locale: I18NLocaleCode) {
    customs(locale: $locale) {
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
          procedures {
            text
            is_active
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
