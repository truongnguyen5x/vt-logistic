export const getServiceQueryString = /* GraphQL */ `
  query GetService($locale: I18NLocaleCode) {
    services(locale: $locale) {
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

export const mutationOrderService = /* GraphQL */ `
  mutation createOrderService($data: OrderInput!, $locale: I18NLocaleCode) {
    createOrder(data: $data, locale: $locale) {
      data {
        id
        attributes {
          fullname
          phone_number
          email
          service
          from
          to
          note
          weight
          service_type
        }
      }
    }
  }
`;
