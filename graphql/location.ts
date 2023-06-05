export const getCountryQueryString = /* GraphQL */ `
  query getCountry($locale: I18NLocaleCode) {
    countries(locale: $locale, pagination: { page: 1, pageSize: 1000 }) {
      data {
        attributes {
          name
          fullname
        }
      }
    }
  }
`;

export const getProvinceQueryString = /* GraphQL */ `
  query getProvince($locale: I18NLocaleCode) {
    provinces(locale: $locale, pagination: { page: 1, pageSize: 1000 }) {
      data {
        attributes {
          name
          fullname
        }
      }
    }
  }
`;
