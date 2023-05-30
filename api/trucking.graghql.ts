export const getTruckingQueryString = /* GraphQL */ `
  query getTruckings($locale: I18NLocaleCode) {
    truckings(locale: $locale) {
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
          intro_img {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          sub_intro_img {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          internal_img {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          international_img {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          intro_features {
            icon {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            title
            description
          }
          internal_features {
            title
            description
          }
          international_features {
            title
            description
          }
          other {
            title
            link
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
`
