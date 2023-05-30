export const getContactQueryString = /* GraphQL */ `
  query getContacts($locale: I18NLocaleCode) {
    contacts(locale: $locale) {
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
              }
            }
          }
          contacts {
            title
            description
            icon {
              data {
                attributes {
                  url
                }
              }
            }
            role
            hotline
            email
          }
        }
      }
    }
  }
`

export const mutationCustomerContact = /* GraphQL */ `
  mutation createCustomerContact($data: CustomerContactInput!, $locale: I18NLocaleCode) {
    createCustomerContact(data: $data, locale: $locale) {
      data {
        id
        attributes {
          title
          fullname
          phone_number
          email
          content
          address
        }
      }
    }
  } 
`
