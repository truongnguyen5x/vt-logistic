export const getContactQueryString = /* GraphQL */ `
  query getContacts($locale: I18NLocaleCode) {
    contacts(locale: $locale) {
      data {
        attributes {
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
