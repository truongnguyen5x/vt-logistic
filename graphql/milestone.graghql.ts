export const getMilestoneQueryString = /* GraphQL */ `
  query getMilestones($locale: I18NLocaleCode) {
    milestones(locale: $locale) {
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
          bg_image {
            data {
              attributes {
                url
              }
            }
          }
          milestones {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            timeline
            datetime
            content
          }
        }
      }
    }
  }
`
