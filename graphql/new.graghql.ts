export const getBannerNewQueryString = /* GraphQL */ `
  query getBannerNew($locale: I18NLocaleCode, $filter: ListNewFiltersInput) {
    listNews(locale: $locale, filters: $filter) {
      data {
        attributes {
          banner {
            data {
              attributes {
                url
              }
            }
          }
          type
        }
      }
    }
  }
`;

export const getNewQueryString = /* GraphQL */ `
  query getNews($locale: I18NLocaleCode, $filter: NewsFiltersInput, $pagination: PaginationArg) {
    newss(locale: $locale, filters: $filter, pagination: $pagination) {
      data {
        id
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
          title
          contents
          preview_content
          updatedAt
          type
          is_hot
          slug
          page_view
          like
          dislike
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
          news {
            data {
              attributes {
                title
                preview_content
                page_view
                type
                is_hot
                like
                dislike
                updatedAt
                slug
                featured_image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

export const getDetailNewsQueryString = /* GraphQL */ `
  query getDetailNews( $locale: I18NLocaleCode, $filter: NewsFiltersInput, $pagination: PaginationArg) {
    newss(locale: $locale, filters: $filter, pagination: $pagination) {
      data {
        id
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
          title
          contents
          preview_content
          updatedAt
          type
          is_hot
          slug
          page_view
          like
          dislike
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
          news {
            data {
              attributes {
                title
                preview_content
                page_view
                type
                is_hot
                like
                dislike
                updatedAt
                slug
                featured_image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

export const mutationPageView = /* GraphQL */ `
  mutation updatePageNew($id: ID!, $data: NewsInput!, $locale: I18NLocaleCode) {
    updateNews(id: $id, data: $data, locale: $locale) {
      data {
        id
        attributes {
          page_view
          like
          dislike
        }
      }
    }
  }
`;
