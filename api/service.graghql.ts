export const getServiceQueryString = /* GraphQL */ `
  query GetService($locale: I18NLocaleCode) {
    services(locale: $locale) {
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
          bg_service {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          description
          description_service
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
            number
            object
          }
          transportations {
            image {
              data {
                attributes {
                  url
                  previewUrl
                }
              }
            }
            title
            link
          }
        }
      }
    }
  }
`;
