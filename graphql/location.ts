export const getCountryQueryString = /* GraphQL */ `
  query getCountry($locale: I18NLocaleCode) {
    countries(locale: $locale) {
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
    provinces(locale: $locale) {
      data {
        attributes {
          name
          fullname
        }
      }
    }
  }
`;
