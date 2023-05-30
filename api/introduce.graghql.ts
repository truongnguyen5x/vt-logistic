export const getIntroduceQueryString = /* GraphQL */ `
  query getIntroduces($locale: I18NLocaleCode) {
    introduces(locale: $locale) {
      data{
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
          banner{
            data{
              attributes{
                url
              }
            }
          }
          general {
            image{
              data{
                attributes{
                  url
                }
              }
            }
            sub_image{
              data{
                attributes{
                  url
                }
              }
            }
            title
            content
          }
          mission {
            image {
              data{
                attributes{
                  url
                }
              }
            }
            description
            properties {
              title
            }
            introduce {
              icon {
                data{
                  attributes{
                    url
                  }
                }
              }
              title
            }
          }
          core_values {
            image {
              data{
                attributes{
                  url
                }
              }
            }
            center_customer_title
            center_customer_content
            kindness_title
            kindness_content {
              title
            }
          }
          reasons_choose_we {
            image {
              data{
                attributes{
                  url
                }
              }
            }
            description
            reasons {
              icon {
                data{
                  attributes{
                    url
                  }
                }
              }
              title
              description
            }
          }
          other {
            image {
              data{
                attributes{
                  url
                }
              }
            }
            link
            title
            content
          }
        }
      }
    }
  } 
`