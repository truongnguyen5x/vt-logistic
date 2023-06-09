/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AirTransport = {
  __typename?: 'AirTransport';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  domestic_image?: Maybe<UploadFileEntityResponse>;
  domestic_price?: Maybe<ComponentCommonPriceTable>;
  domestic_services?: Maybe<Array<Maybe<ComponentRailService>>>;
  features?: Maybe<Array<Maybe<ComponentAirFeature>>>;
  international_image?: Maybe<UploadFileEntityResponse>;
  international_price_table?: Maybe<ComponentCommonPriceTable>;
  international_services?: Maybe<Array<Maybe<ComponentRailService>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AirTransportRelationResponseCollection>;
  others?: Maybe<Array<Maybe<ComponentTruckingOtherService>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AirTransportDomestic_ServicesArgs = {
  filters?: InputMaybe<ComponentRailServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AirTransportFeaturesArgs = {
  filters?: InputMaybe<ComponentAirFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AirTransportInternational_ServicesArgs = {
  filters?: InputMaybe<ComponentRailServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AirTransportLocalizationsArgs = {
  filters?: InputMaybe<AirTransportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AirTransportOthersArgs = {
  filters?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AirTransportEntity = {
  __typename?: 'AirTransportEntity';
  attributes?: Maybe<AirTransport>;
  id?: Maybe<Scalars['ID']>;
};

export type AirTransportEntityResponse = {
  __typename?: 'AirTransportEntityResponse';
  data?: Maybe<AirTransportEntity>;
};

export type AirTransportEntityResponseCollection = {
  __typename?: 'AirTransportEntityResponseCollection';
  data: Array<AirTransportEntity>;
  meta: ResponseCollectionMeta;
};

export type AirTransportFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<AirTransportFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  domestic_price?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  domestic_services?: InputMaybe<ComponentRailServiceFiltersInput>;
  features?: InputMaybe<ComponentAirFeatureFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  international_price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  international_services?: InputMaybe<ComponentRailServiceFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AirTransportFiltersInput>;
  not?: InputMaybe<AirTransportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AirTransportFiltersInput>>>;
  others?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AirTransportInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  domestic_image?: InputMaybe<Scalars['ID']>;
  domestic_price?: InputMaybe<ComponentCommonPriceTableInput>;
  domestic_services?: InputMaybe<Array<InputMaybe<ComponentRailServiceInput>>>;
  features?: InputMaybe<Array<InputMaybe<ComponentAirFeatureInput>>>;
  international_image?: InputMaybe<Scalars['ID']>;
  international_price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  international_services?: InputMaybe<Array<InputMaybe<ComponentRailServiceInput>>>;
  others?: InputMaybe<Array<InputMaybe<ComponentTruckingOtherServiceInput>>>;
};

export type AirTransportRelationResponseCollection = {
  __typename?: 'AirTransportRelationResponseCollection';
  data: Array<AirTransportEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentAirFeature = {
  __typename?: 'ComponentAirFeature';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentAirFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAirFeatureFiltersInput>>>;
  not?: InputMaybe<ComponentAirFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAirFeatureFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAirFeatureInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonAdvantage = {
  __typename?: 'ComponentCommonAdvantage';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentCommonAdvantageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonAdvantageFiltersInput>>>;
  not?: InputMaybe<ComponentCommonAdvantageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonAdvantageFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonAdvantageInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonGroupImageContent = {
  __typename?: 'ComponentCommonGroupImageContent';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommonGroupImageContentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonGroupImageContentFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonGroupImageContentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonGroupImageContentFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonGroupImageContentInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonPriceTable = {
  __typename?: 'ComponentCommonPriceTable';
  id: Scalars['ID'];
  price_image: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommonPriceTableFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonPriceTableFiltersInput>>>;
  not?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonPriceTableFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonPriceTableInput = {
  id?: InputMaybe<Scalars['ID']>;
  price_image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentContactContact = {
  __typename?: 'ComponentContactContact';
  description: Scalars['String'];
  email: Scalars['String'];
  formatted_hotline: Scalars['String'];
  hotline: Scalars['String'];
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  role: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentContactContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactContactFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  formatted_hotline?: InputMaybe<StringFilterInput>;
  hotline?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContactContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactContactFiltersInput>>>;
  role?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentContactContactInput = {
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  formatted_hotline?: InputMaybe<Scalars['String']>;
  hotline?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  role?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCustomProcedure = {
  __typename?: 'ComponentCustomProcedure';
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentCustomProcedureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCustomProcedureFiltersInput>>>;
  is_active?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentCustomProcedureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCustomProcedureFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentCustomProcedureInput = {
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentFooterFooterColumn = {
  __typename?: 'ComponentFooterFooterColumn';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentFooterFooterLink>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentFooterFooterColumnLinksArgs = {
  filters?: InputMaybe<ComponentFooterFooterLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFooterFooterColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnFiltersInput>>>;
  links?: InputMaybe<ComponentFooterFooterLinkFiltersInput>;
  not?: InputMaybe<ComponentFooterFooterColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterFooterColumnInput = {
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentFooterFooterLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentFooterFooterInfo = {
  __typename?: 'ComponentFooterFooterInfo';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentFooterFooterInfoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterFooterInfoFiltersInput>>>;
  not?: InputMaybe<ComponentFooterFooterInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterFooterInfoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterFooterInfoInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentFooterFooterLink = {
  __typename?: 'ComponentFooterFooterLink';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  is_external_link?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentFooterFooterLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterFooterLinkFiltersInput>>>;
  is_external_link?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentFooterFooterLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterFooterLinkFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterFooterLinkInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_external_link?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentFooterSocialLink = {
  __typename?: 'ComponentFooterSocialLink';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentFooterSocialLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterSocialLinkFiltersInput>>>;
  not?: InputMaybe<ComponentFooterSocialLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterSocialLinkFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterSocialLinkInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeAbout = {
  __typename?: 'ComponentHomeAbout';
  detail: Scalars['String'];
  heading: Scalars['Int'];
  id: Scalars['ID'];
  is_plus?: Maybe<Scalars['Boolean']>;
  subject: Scalars['String'];
};

export type ComponentHomeAboutFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeAboutFiltersInput>>>;
  detail?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<IntFilterInput>;
  is_plus?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentHomeAboutFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeAboutFiltersInput>>>;
  subject?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeAboutInput = {
  detail?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  is_plus?: InputMaybe<Scalars['Boolean']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeBanner = {
  __typename?: 'ComponentHomeBanner';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  url?: Maybe<Scalars['String']>;
};

export type ComponentHomeBannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeBannerFiltersInput>>>;
  not?: InputMaybe<ComponentHomeBannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeBannerFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeBannerInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeFeature = {
  __typename?: 'ComponentHomeFeature';
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentHomeFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeFeatureFiltersInput>>>;
  not?: InputMaybe<ComponentHomeFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeFeatureFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeFeatureInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeHomeLookup = {
  __typename?: 'ComponentHomeHomeLookup';
  background: UploadFileEntityResponse;
  contacts: Array<Maybe<ComponentHomeServiceContact>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type ComponentHomeHomeLookupContactsArgs = {
  filters?: InputMaybe<ComponentHomeServiceContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeHomeLookupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeHomeLookupFiltersInput>>>;
  contacts?: InputMaybe<ComponentHomeServiceContactFiltersInput>;
  not?: InputMaybe<ComponentHomeHomeLookupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeHomeLookupFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeHomeLookupInput = {
  background?: InputMaybe<Scalars['ID']>;
  contacts?: InputMaybe<Array<InputMaybe<ComponentHomeServiceContactInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeHomePartner = {
  __typename?: 'ComponentHomeHomePartner';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  url?: Maybe<Scalars['String']>;
};

export type ComponentHomeHomePartnerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeHomePartnerFiltersInput>>>;
  not?: InputMaybe<ComponentHomeHomePartnerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeHomePartnerFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeHomePartnerInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeHomeService = {
  __typename?: 'ComponentHomeHomeService';
  background: UploadFileEntityResponse;
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  subs?: Maybe<Array<Maybe<ComponentHomeHomeSubService>>>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type ComponentHomeHomeServiceSubsArgs = {
  filters?: InputMaybe<ComponentHomeHomeSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeHomeServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeHomeServiceFiltersInput>>>;
  not?: InputMaybe<ComponentHomeHomeServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeHomeServiceFiltersInput>>>;
  subs?: InputMaybe<ComponentHomeHomeSubServiceFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeHomeServiceInput = {
  background?: InputMaybe<Scalars['ID']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  subs?: InputMaybe<Array<InputMaybe<ComponentHomeHomeSubServiceInput>>>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeHomeSubService = {
  __typename?: 'ComponentHomeHomeSubService';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentHomeHomeSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeHomeSubServiceFiltersInput>>>;
  not?: InputMaybe<ComponentHomeHomeSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeHomeSubServiceFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeHomeSubServiceInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeHomeTab = {
  __typename?: 'ComponentHomeHomeTab';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentHomeHomeTabFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeHomeTabFiltersInput>>>;
  not?: InputMaybe<ComponentHomeHomeTabFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeHomeTabFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeHomeTabInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeServiceContact = {
  __typename?: 'ComponentHomeServiceContact';
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  phone_displayed: Scalars['String'];
};

export type ComponentHomeServiceContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeServiceContactFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomeServiceContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeServiceContactFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  phone_displayed?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeServiceContactInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_displayed?: InputMaybe<Scalars['String']>;
};

export type ComponentIntroduceCoreValues = {
  __typename?: 'ComponentIntroduceCoreValues';
  center_customer_content?: Maybe<Scalars['String']>;
  center_customer_title: Scalars['String'];
  id: Scalars['ID'];
  images: UploadFileRelationResponseCollection;
  kindness_content: Array<Maybe<ComponentCommonAdvantage>>;
  kindness_title: Scalars['String'];
};


export type ComponentIntroduceCoreValuesImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentIntroduceCoreValuesKindness_ContentArgs = {
  filters?: InputMaybe<ComponentCommonAdvantageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIntroduceCoreValuesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentIntroduceCoreValuesFiltersInput>>>;
  center_customer_content?: InputMaybe<StringFilterInput>;
  center_customer_title?: InputMaybe<StringFilterInput>;
  kindness_content?: InputMaybe<ComponentCommonAdvantageFiltersInput>;
  kindness_title?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentIntroduceCoreValuesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentIntroduceCoreValuesFiltersInput>>>;
};

export type ComponentIntroduceCoreValuesInput = {
  center_customer_content?: InputMaybe<Scalars['String']>;
  center_customer_title?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  kindness_content?: InputMaybe<Array<InputMaybe<ComponentCommonAdvantageInput>>>;
  kindness_title?: InputMaybe<Scalars['String']>;
};

export type ComponentIntroduceFeature = {
  __typename?: 'ComponentIntroduceFeature';
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  number: Scalars['Int'];
  title: Scalars['String'];
};

export type ComponentIntroduceFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentIntroduceFeatureFiltersInput>>>;
  not?: InputMaybe<ComponentIntroduceFeatureFiltersInput>;
  number?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentIntroduceFeatureFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentIntroduceFeatureInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  number?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentIntroduceGeneral = {
  __typename?: 'ComponentIntroduceGeneral';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  sub_image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentIntroduceGeneralFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentIntroduceGeneralFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentIntroduceGeneralFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentIntroduceGeneralFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentIntroduceGeneralInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  sub_image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentIntroduceMilestones = {
  __typename?: 'ComponentIntroduceMilestones';
  content?: Maybe<Scalars['String']>;
  datetime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  timeline?: Maybe<Scalars['Long']>;
};

export type ComponentIntroduceMilestonesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentIntroduceMilestonesFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  datetime?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentIntroduceMilestonesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentIntroduceMilestonesFiltersInput>>>;
  timeline?: InputMaybe<LongFilterInput>;
};

export type ComponentIntroduceMilestonesInput = {
  content?: InputMaybe<Scalars['String']>;
  datetime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  timeline?: InputMaybe<Scalars['Long']>;
};

export type ComponentIntroduceMission = {
  __typename?: 'ComponentIntroduceMission';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  introduce: Array<Maybe<ComponentIntroduceFeature>>;
  properties?: Maybe<Array<Maybe<ComponentCommonAdvantage>>>;
};


export type ComponentIntroduceMissionIntroduceArgs = {
  filters?: InputMaybe<ComponentIntroduceFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentIntroduceMissionPropertiesArgs = {
  filters?: InputMaybe<ComponentCommonAdvantageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIntroduceMissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentIntroduceMissionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  introduce?: InputMaybe<ComponentIntroduceFeatureFiltersInput>;
  not?: InputMaybe<ComponentIntroduceMissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentIntroduceMissionFiltersInput>>>;
  properties?: InputMaybe<ComponentCommonAdvantageFiltersInput>;
};

export type ComponentIntroduceMissionInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  introduce?: InputMaybe<Array<InputMaybe<ComponentIntroduceFeatureInput>>>;
  properties?: InputMaybe<Array<InputMaybe<ComponentCommonAdvantageInput>>>;
};

export type ComponentIntroduceReasonsChooseWe = {
  __typename?: 'ComponentIntroduceReasonsChooseWe';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  reasons?: Maybe<Array<Maybe<ComponentTruckingIntroduceFeatures>>>;
};


export type ComponentIntroduceReasonsChooseWeReasonsArgs = {
  filters?: InputMaybe<ComponentTruckingIntroduceFeaturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIntroduceReasonsChooseWeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentIntroduceReasonsChooseWeFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentIntroduceReasonsChooseWeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentIntroduceReasonsChooseWeFiltersInput>>>;
  reasons?: InputMaybe<ComponentTruckingIntroduceFeaturesFiltersInput>;
};

export type ComponentIntroduceReasonsChooseWeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  reasons?: InputMaybe<Array<InputMaybe<ComponentTruckingIntroduceFeaturesInput>>>;
};

export type ComponentRailService = {
  __typename?: 'ComponentRailService';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentRailServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentRailServiceFiltersInput>>>;
  not?: InputMaybe<ComponentRailServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRailServiceFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentRailServiceInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSeaFeature = {
  __typename?: 'ComponentSeaFeature';
  from?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type ComponentSeaFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSeaFeatureFiltersInput>>>;
  from?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ComponentSeaFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSeaFeatureFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  to?: InputMaybe<IntFilterInput>;
  unit?: InputMaybe<StringFilterInput>;
};

export type ComponentSeaFeatureInput = {
  from?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Int']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type ComponentSeaService = {
  __typename?: 'ComponentSeaService';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price_table?: Maybe<ComponentCommonPriceTable>;
  properties?: Maybe<Array<Maybe<ComponentRailService>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSeaServicePropertiesArgs = {
  filters?: InputMaybe<ComponentRailServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSeaServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSeaServiceFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSeaServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSeaServiceFiltersInput>>>;
  price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  properties?: InputMaybe<ComponentRailServiceFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSeaServiceInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  properties?: InputMaybe<Array<InputMaybe<ComponentRailServiceInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentServiceFeature = {
  __typename?: 'ComponentServiceFeature';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['Long']>;
  object?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentServiceFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceFeatureFiltersInput>>>;
  not?: InputMaybe<ComponentServiceFeatureFiltersInput>;
  number?: InputMaybe<LongFilterInput>;
  object?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceFeatureFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServiceFeatureInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  number?: InputMaybe<Scalars['Long']>;
  object?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentServiceInformationService = {
  __typename?: 'ComponentServiceInformationService';
  advantage: Array<Maybe<ComponentCommonAdvantage>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  info_img: UploadFileEntityResponse;
  info_sub_img: UploadFileEntityResponse;
};


export type ComponentServiceInformationServiceAdvantageArgs = {
  filters?: InputMaybe<ComponentCommonAdvantageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentServiceInformationServiceFiltersInput = {
  advantage?: InputMaybe<ComponentCommonAdvantageFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentServiceInformationServiceFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceInformationServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceInformationServiceFiltersInput>>>;
};

export type ComponentServiceInformationServiceInput = {
  advantage?: InputMaybe<Array<InputMaybe<ComponentCommonAdvantageInput>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  info_img?: InputMaybe<Scalars['ID']>;
  info_sub_img?: InputMaybe<Scalars['ID']>;
};

export type ComponentServiceTransportation = {
  __typename?: 'ComponentServiceTransportation';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentServiceTransportationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceTransportationFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceTransportationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceTransportationFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServiceTransportationInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String'];
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
  structuredData?: InputMaybe<Scalars['JSON']>;
};

export type ComponentTruckingFeature = {
  __typename?: 'ComponentTruckingFeature';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentTruckingFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTruckingFeatureFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTruckingFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTruckingFeatureFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentTruckingFeatureInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentTruckingIntroduceFeatures = {
  __typename?: 'ComponentTruckingIntroduceFeatures';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentTruckingIntroduceFeaturesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTruckingIntroduceFeaturesFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTruckingIntroduceFeaturesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTruckingIntroduceFeaturesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentTruckingIntroduceFeaturesInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentTruckingOtherService = {
  __typename?: 'ComponentTruckingOtherService';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentTruckingOtherServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTruckingOtherServiceFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTruckingOtherServiceFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentTruckingOtherServiceInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  SEO?: Maybe<ComponentSharedSeo>;
  banner: UploadFileEntityResponse;
  contacts: Array<Maybe<ComponentContactContact>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContactRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContactContactsArgs = {
  filters?: InputMaybe<ComponentContactContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContactLocalizationsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  contacts?: InputMaybe<ComponentContactContactFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ContactFiltersInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  contacts?: InputMaybe<Array<InputMaybe<ComponentContactContactInput>>>;
};

export type ContactRelationResponseCollection = {
  __typename?: 'ContactRelationResponseCollection';
  data: Array<ContactEntity>;
};

export type Country = {
  __typename?: 'Country';
  createdAt?: Maybe<Scalars['DateTime']>;
  fullname?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CountryRelationResponseCollection>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CountryLocalizationsArgs = {
  filters?: InputMaybe<CountryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CountryEntity = {
  __typename?: 'CountryEntity';
  attributes?: Maybe<Country>;
  id?: Maybe<Scalars['ID']>;
};

export type CountryEntityResponse = {
  __typename?: 'CountryEntityResponse';
  data?: Maybe<CountryEntity>;
};

export type CountryEntityResponseCollection = {
  __typename?: 'CountryEntityResponseCollection';
  data: Array<CountryEntity>;
  meta: ResponseCollectionMeta;
};

export type CountryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CountryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fullname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CountryFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CountryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CountryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CountryInput = {
  fullname?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CountryRelationResponseCollection = {
  __typename?: 'CountryRelationResponseCollection';
  data: Array<CountryEntity>;
};

export type Custom = {
  __typename?: 'Custom';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  bg_price?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  infomation?: Maybe<ComponentServiceInformationService>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CustomRelationResponseCollection>;
  price_table?: Maybe<ComponentCommonPriceTable>;
  procedures?: Maybe<Array<Maybe<ComponentCustomProcedure>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CustomLocalizationsArgs = {
  filters?: InputMaybe<CustomFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CustomProceduresArgs = {
  filters?: InputMaybe<ComponentCustomProcedureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CustomEntity = {
  __typename?: 'CustomEntity';
  attributes?: Maybe<Custom>;
  id?: Maybe<Scalars['ID']>;
};

export type CustomEntityResponse = {
  __typename?: 'CustomEntityResponse';
  data?: Maybe<CustomEntity>;
};

export type CustomEntityResponseCollection = {
  __typename?: 'CustomEntityResponseCollection';
  data: Array<CustomEntity>;
  meta: ResponseCollectionMeta;
};

export type CustomFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CustomFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  infomation?: InputMaybe<ComponentServiceInformationServiceFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CustomFiltersInput>;
  not?: InputMaybe<CustomFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CustomFiltersInput>>>;
  price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  procedures?: InputMaybe<ComponentCustomProcedureFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CustomInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  bg_price?: InputMaybe<Scalars['ID']>;
  infomation?: InputMaybe<ComponentServiceInformationServiceInput>;
  price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  procedures?: InputMaybe<Array<InputMaybe<ComponentCustomProcedureInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CustomRelationResponseCollection = {
  __typename?: 'CustomRelationResponseCollection';
  data: Array<CustomEntity>;
};

export type CustomerContact = {
  __typename?: 'CustomerContact';
  address?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CustomerContactRelationResponseCollection>;
  phone_number?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CustomerContactLocalizationsArgs = {
  filters?: InputMaybe<CustomerContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CustomerContactEntity = {
  __typename?: 'CustomerContactEntity';
  attributes?: Maybe<CustomerContact>;
  id?: Maybe<Scalars['ID']>;
};

export type CustomerContactEntityResponse = {
  __typename?: 'CustomerContactEntityResponse';
  data?: Maybe<CustomerContactEntity>;
};

export type CustomerContactEntityResponseCollection = {
  __typename?: 'CustomerContactEntityResponseCollection';
  data: Array<CustomerContactEntity>;
  meta: ResponseCollectionMeta;
};

export type CustomerContactFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CustomerContactFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  fullname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CustomerContactFiltersInput>;
  not?: InputMaybe<CustomerContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CustomerContactFiltersInput>>>;
  phone_number?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CustomerContactInput = {
  address?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CustomerContactRelationResponseCollection = {
  __typename?: 'CustomerContactRelationResponseCollection';
  data: Array<CustomerContactEntity>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Telegram = 'Telegram',
  Twitter = 'Twitter',
  Zalo = 'Zalo'
}

export enum Enum_Listnew_Type {
  InternalNews = 'internal_news',
  MarketNews = 'market_news',
  Recruitment = 'recruitment',
  SpecializedNews = 'specialized_news'
}

export enum Enum_News_Type {
  InternalNews = 'internal_news',
  MarketNews = 'market_news',
  Recruitment = 'recruitment',
  SpecializedNews = 'specialized_news'
}

export enum Enum_Order_Service_Type {
  AirTransportDomestic = 'air_transport_domestic',
  AirTransportInternational = 'air_transport_international',
  BulkSeaTransport = 'bulk_sea_transport',
  FclSeaTransport = 'fcl_sea_transport',
  LclSeaTransport = 'lcl_sea_transport',
  RailTransport = 'rail_transport',
  SeaTransport = 'sea_transport',
  TruckingDomestic = 'trucking_domestic',
  TruckingInternational = 'trucking_international'
}

export type EndpointDelivery = {
  __typename?: 'EndpointDelivery';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  bg_price?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  infomation?: Maybe<ComponentServiceInformationService>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<EndpointDeliveryRelationResponseCollection>;
  price_table?: Maybe<ComponentCommonPriceTable>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EndpointDeliveryLocalizationsArgs = {
  filters?: InputMaybe<EndpointDeliveryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EndpointDeliveryEntity = {
  __typename?: 'EndpointDeliveryEntity';
  attributes?: Maybe<EndpointDelivery>;
  id?: Maybe<Scalars['ID']>;
};

export type EndpointDeliveryEntityResponse = {
  __typename?: 'EndpointDeliveryEntityResponse';
  data?: Maybe<EndpointDeliveryEntity>;
};

export type EndpointDeliveryEntityResponseCollection = {
  __typename?: 'EndpointDeliveryEntityResponseCollection';
  data: Array<EndpointDeliveryEntity>;
  meta: ResponseCollectionMeta;
};

export type EndpointDeliveryFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<EndpointDeliveryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  infomation?: InputMaybe<ComponentServiceInformationServiceFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EndpointDeliveryFiltersInput>;
  not?: InputMaybe<EndpointDeliveryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EndpointDeliveryFiltersInput>>>;
  price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EndpointDeliveryInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  bg_price?: InputMaybe<Scalars['ID']>;
  infomation?: InputMaybe<ComponentServiceInformationServiceInput>;
  price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EndpointDeliveryRelationResponseCollection = {
  __typename?: 'EndpointDeliveryRelationResponseCollection';
  data: Array<EndpointDeliveryEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']>;
  infos?: Maybe<Array<Maybe<ComponentFooterFooterInfo>>>;
  links?: Maybe<Array<Maybe<ComponentFooterFooterColumn>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  socials?: Maybe<Array<Maybe<ComponentFooterSocialLink>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_bo_cong_thuong?: Maybe<Scalars['String']>;
};


export type FooterInfosArgs = {
  filters?: InputMaybe<ComponentFooterFooterInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FooterLinksArgs = {
  filters?: InputMaybe<ComponentFooterFooterColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FooterLocalizationsArgs = {
  filters?: InputMaybe<FooterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FooterSocialsArgs = {
  filters?: InputMaybe<ComponentFooterSocialLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterEntityResponseCollection = {
  __typename?: 'FooterEntityResponseCollection';
  data: Array<FooterEntity>;
  meta: ResponseCollectionMeta;
};

export type FooterFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  infos?: InputMaybe<ComponentFooterFooterInfoFiltersInput>;
  links?: InputMaybe<ComponentFooterFooterColumnFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<FooterFiltersInput>;
  not?: InputMaybe<FooterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  socials?: InputMaybe<ComponentFooterSocialLinkFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_bo_cong_thuong?: InputMaybe<StringFilterInput>;
};

export type FooterInput = {
  infos?: InputMaybe<Array<InputMaybe<ComponentFooterFooterInfoInput>>>;
  links?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  socials?: InputMaybe<Array<InputMaybe<ComponentFooterSocialLinkInput>>>;
  url_bo_cong_thuong?: InputMaybe<Scalars['String']>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type GenericMorph = AirTransport | ComponentAirFeature | ComponentCommonAdvantage | ComponentCommonGroupImageContent | ComponentCommonPriceTable | ComponentContactContact | ComponentCustomProcedure | ComponentFooterFooterColumn | ComponentFooterFooterInfo | ComponentFooterFooterLink | ComponentFooterSocialLink | ComponentHomeAbout | ComponentHomeBanner | ComponentHomeFeature | ComponentHomeHomeLookup | ComponentHomeHomePartner | ComponentHomeHomeService | ComponentHomeHomeSubService | ComponentHomeHomeTab | ComponentHomeServiceContact | ComponentIntroduceCoreValues | ComponentIntroduceFeature | ComponentIntroduceGeneral | ComponentIntroduceMilestones | ComponentIntroduceMission | ComponentIntroduceReasonsChooseWe | ComponentRailService | ComponentSeaFeature | ComponentSeaService | ComponentServiceFeature | ComponentServiceInformationService | ComponentServiceTransportation | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentTruckingFeature | ComponentTruckingIntroduceFeatures | ComponentTruckingOtherService | Contact | Country | Custom | CustomerContact | EndpointDelivery | Footer | Home | I18NLocale | Introduce | ListNew | Milestone | News | Order | Packing | Province | RailTransportation | SeaTransport | Service | SlugifySlug | Trucking | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Warehouse;

export type Home = {
  __typename?: 'Home';
  SEO?: Maybe<ComponentSharedSeo>;
  abouts: Array<Maybe<ComponentHomeAbout>>;
  banners?: Maybe<Array<Maybe<ComponentHomeBanner>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  features: Array<Maybe<ComponentHomeFeature>>;
  home_tabs: Array<Maybe<ComponentHomeHomeTab>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomeRelationResponseCollection>;
  lookups: Array<Maybe<ComponentHomeHomeLookup>>;
  partners: Array<Maybe<ComponentHomeHomePartner>>;
  services: Array<Maybe<ComponentHomeHomeService>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomeAboutsArgs = {
  filters?: InputMaybe<ComponentHomeAboutFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeBannersArgs = {
  filters?: InputMaybe<ComponentHomeBannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeFeaturesArgs = {
  filters?: InputMaybe<ComponentHomeFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeHome_TabsArgs = {
  filters?: InputMaybe<ComponentHomeHomeTabFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeLocalizationsArgs = {
  filters?: InputMaybe<HomeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeLookupsArgs = {
  filters?: InputMaybe<ComponentHomeHomeLookupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomePartnersArgs = {
  filters?: InputMaybe<ComponentHomeHomePartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeServicesArgs = {
  filters?: InputMaybe<ComponentHomeHomeServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeEntityResponseCollection = {
  __typename?: 'HomeEntityResponseCollection';
  data: Array<HomeEntity>;
  meta: ResponseCollectionMeta;
};

export type HomeFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  abouts?: InputMaybe<ComponentHomeAboutFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<HomeFiltersInput>>>;
  banners?: InputMaybe<ComponentHomeBannerFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  features?: InputMaybe<ComponentHomeFeatureFiltersInput>;
  home_tabs?: InputMaybe<ComponentHomeHomeTabFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<HomeFiltersInput>;
  lookups?: InputMaybe<ComponentHomeHomeLookupFiltersInput>;
  not?: InputMaybe<HomeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomeFiltersInput>>>;
  partners?: InputMaybe<ComponentHomeHomePartnerFiltersInput>;
  services?: InputMaybe<ComponentHomeHomeServiceFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomeInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  abouts?: InputMaybe<Array<InputMaybe<ComponentHomeAboutInput>>>;
  banners?: InputMaybe<Array<InputMaybe<ComponentHomeBannerInput>>>;
  features?: InputMaybe<Array<InputMaybe<ComponentHomeFeatureInput>>>;
  home_tabs?: InputMaybe<Array<InputMaybe<ComponentHomeHomeTabInput>>>;
  lookups?: InputMaybe<Array<InputMaybe<ComponentHomeHomeLookupInput>>>;
  partners?: InputMaybe<Array<InputMaybe<ComponentHomeHomePartnerInput>>>;
  services?: InputMaybe<Array<InputMaybe<ComponentHomeHomeServiceInput>>>;
};

export type HomeRelationResponseCollection = {
  __typename?: 'HomeRelationResponseCollection';
  data: Array<HomeEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type Introduce = {
  __typename?: 'Introduce';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  core_values?: Maybe<ComponentIntroduceCoreValues>;
  createdAt?: Maybe<Scalars['DateTime']>;
  general?: Maybe<ComponentIntroduceGeneral>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<IntroduceRelationResponseCollection>;
  mission?: Maybe<ComponentIntroduceMission>;
  other?: Maybe<Array<Maybe<ComponentCommonGroupImageContent>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reasons_choose_we?: Maybe<ComponentIntroduceReasonsChooseWe>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type IntroduceLocalizationsArgs = {
  filters?: InputMaybe<IntroduceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IntroduceOtherArgs = {
  filters?: InputMaybe<ComponentCommonGroupImageContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IntroduceEntity = {
  __typename?: 'IntroduceEntity';
  attributes?: Maybe<Introduce>;
  id?: Maybe<Scalars['ID']>;
};

export type IntroduceEntityResponse = {
  __typename?: 'IntroduceEntityResponse';
  data?: Maybe<IntroduceEntity>;
};

export type IntroduceEntityResponseCollection = {
  __typename?: 'IntroduceEntityResponseCollection';
  data: Array<IntroduceEntity>;
  meta: ResponseCollectionMeta;
};

export type IntroduceFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<IntroduceFiltersInput>>>;
  core_values?: InputMaybe<ComponentIntroduceCoreValuesFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  general?: InputMaybe<ComponentIntroduceGeneralFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<IntroduceFiltersInput>;
  mission?: InputMaybe<ComponentIntroduceMissionFiltersInput>;
  not?: InputMaybe<IntroduceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IntroduceFiltersInput>>>;
  other?: InputMaybe<ComponentCommonGroupImageContentFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reasons_choose_we?: InputMaybe<ComponentIntroduceReasonsChooseWeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IntroduceInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  core_values?: InputMaybe<ComponentIntroduceCoreValuesInput>;
  general?: InputMaybe<ComponentIntroduceGeneralInput>;
  mission?: InputMaybe<ComponentIntroduceMissionInput>;
  other?: InputMaybe<Array<InputMaybe<ComponentCommonGroupImageContentInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  reasons_choose_we?: InputMaybe<ComponentIntroduceReasonsChooseWeInput>;
};

export type IntroduceRelationResponseCollection = {
  __typename?: 'IntroduceRelationResponseCollection';
  data: Array<IntroduceEntity>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type ListNew = {
  __typename?: 'ListNew';
  banner: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ListNewRelationResponseCollection>;
  type: Enum_Listnew_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ListNewLocalizationsArgs = {
  filters?: InputMaybe<ListNewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListNewEntity = {
  __typename?: 'ListNewEntity';
  attributes?: Maybe<ListNew>;
  id?: Maybe<Scalars['ID']>;
};

export type ListNewEntityResponse = {
  __typename?: 'ListNewEntityResponse';
  data?: Maybe<ListNewEntity>;
};

export type ListNewEntityResponseCollection = {
  __typename?: 'ListNewEntityResponseCollection';
  data: Array<ListNewEntity>;
  meta: ResponseCollectionMeta;
};

export type ListNewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ListNewFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ListNewFiltersInput>;
  not?: InputMaybe<ListNewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ListNewFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ListNewInput = {
  banner?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Listnew_Type>;
};

export type ListNewRelationResponseCollection = {
  __typename?: 'ListNewRelationResponseCollection';
  data: Array<ListNewEntity>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type Milestone = {
  __typename?: 'Milestone';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  bg_image?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MilestoneRelationResponseCollection>;
  milestones?: Maybe<Array<Maybe<ComponentIntroduceMilestones>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MilestoneLocalizationsArgs = {
  filters?: InputMaybe<MilestoneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MilestoneMilestonesArgs = {
  filters?: InputMaybe<ComponentIntroduceMilestonesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MilestoneEntity = {
  __typename?: 'MilestoneEntity';
  attributes?: Maybe<Milestone>;
  id?: Maybe<Scalars['ID']>;
};

export type MilestoneEntityResponse = {
  __typename?: 'MilestoneEntityResponse';
  data?: Maybe<MilestoneEntity>;
};

export type MilestoneEntityResponseCollection = {
  __typename?: 'MilestoneEntityResponseCollection';
  data: Array<MilestoneEntity>;
  meta: ResponseCollectionMeta;
};

export type MilestoneFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<MilestoneFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MilestoneFiltersInput>;
  milestones?: InputMaybe<ComponentIntroduceMilestonesFiltersInput>;
  not?: InputMaybe<MilestoneFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MilestoneFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MilestoneInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  bg_image?: InputMaybe<Scalars['ID']>;
  milestones?: InputMaybe<Array<InputMaybe<ComponentIntroduceMilestonesInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MilestoneRelationResponseCollection = {
  __typename?: 'MilestoneRelationResponseCollection';
  data: Array<MilestoneEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAirTransport?: Maybe<AirTransportEntityResponse>;
  createAirTransportLocalization?: Maybe<AirTransportEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createContactLocalization?: Maybe<ContactEntityResponse>;
  createCountry?: Maybe<CountryEntityResponse>;
  createCountryLocalization?: Maybe<CountryEntityResponse>;
  createCustom?: Maybe<CustomEntityResponse>;
  createCustomLocalization?: Maybe<CustomEntityResponse>;
  createCustomerContact?: Maybe<CustomerContactEntityResponse>;
  createCustomerContactLocalization?: Maybe<CustomerContactEntityResponse>;
  createEndpointDelivery?: Maybe<EndpointDeliveryEntityResponse>;
  createEndpointDeliveryLocalization?: Maybe<EndpointDeliveryEntityResponse>;
  createFooter?: Maybe<FooterEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createHome?: Maybe<HomeEntityResponse>;
  createHomeLocalization?: Maybe<HomeEntityResponse>;
  createIntroduce?: Maybe<IntroduceEntityResponse>;
  createIntroduceLocalization?: Maybe<IntroduceEntityResponse>;
  createListNew?: Maybe<ListNewEntityResponse>;
  createListNewLocalization?: Maybe<ListNewEntityResponse>;
  createMilestone?: Maybe<MilestoneEntityResponse>;
  createMilestoneLocalization?: Maybe<MilestoneEntityResponse>;
  createNews?: Maybe<NewsEntityResponse>;
  createNewsLocalization?: Maybe<NewsEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createPacking?: Maybe<PackingEntityResponse>;
  createPackingLocalization?: Maybe<PackingEntityResponse>;
  createProvince?: Maybe<ProvinceEntityResponse>;
  createProvinceLocalization?: Maybe<ProvinceEntityResponse>;
  createRailTransportation?: Maybe<RailTransportationEntityResponse>;
  createRailTransportationLocalization?: Maybe<RailTransportationEntityResponse>;
  createSeaTransport?: Maybe<SeaTransportEntityResponse>;
  createSeaTransportLocalization?: Maybe<SeaTransportEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createServiceLocalization?: Maybe<ServiceEntityResponse>;
  createSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  createTrucking?: Maybe<TruckingEntityResponse>;
  createTruckingLocalization?: Maybe<TruckingEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWarehouse?: Maybe<WarehouseEntityResponse>;
  createWarehouseLocalization?: Maybe<WarehouseEntityResponse>;
  deleteAirTransport?: Maybe<AirTransportEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteCountry?: Maybe<CountryEntityResponse>;
  deleteCustom?: Maybe<CustomEntityResponse>;
  deleteCustomerContact?: Maybe<CustomerContactEntityResponse>;
  deleteEndpointDelivery?: Maybe<EndpointDeliveryEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteIntroduce?: Maybe<IntroduceEntityResponse>;
  deleteListNew?: Maybe<ListNewEntityResponse>;
  deleteMilestone?: Maybe<MilestoneEntityResponse>;
  deleteNews?: Maybe<NewsEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deletePacking?: Maybe<PackingEntityResponse>;
  deleteProvince?: Maybe<ProvinceEntityResponse>;
  deleteRailTransportation?: Maybe<RailTransportationEntityResponse>;
  deleteSeaTransport?: Maybe<SeaTransportEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  deleteTrucking?: Maybe<TruckingEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWarehouse?: Maybe<WarehouseEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAirTransport?: Maybe<AirTransportEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateCountry?: Maybe<CountryEntityResponse>;
  updateCustom?: Maybe<CustomEntityResponse>;
  updateCustomerContact?: Maybe<CustomerContactEntityResponse>;
  updateEndpointDelivery?: Maybe<EndpointDeliveryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateIntroduce?: Maybe<IntroduceEntityResponse>;
  updateListNew?: Maybe<ListNewEntityResponse>;
  updateMilestone?: Maybe<MilestoneEntityResponse>;
  updateNews?: Maybe<NewsEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updatePacking?: Maybe<PackingEntityResponse>;
  updateProvince?: Maybe<ProvinceEntityResponse>;
  updateRailTransportation?: Maybe<RailTransportationEntityResponse>;
  updateSeaTransport?: Maybe<SeaTransportEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  updateTrucking?: Maybe<TruckingEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWarehouse?: Maybe<WarehouseEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAirTransportArgs = {
  data: AirTransportInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateAirTransportLocalizationArgs = {
  data?: InputMaybe<AirTransportInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContactLocalizationArgs = {
  data?: InputMaybe<ContactInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCountryArgs = {
  data: CountryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCountryLocalizationArgs = {
  data?: InputMaybe<CountryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCustomArgs = {
  data: CustomInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCustomLocalizationArgs = {
  data?: InputMaybe<CustomInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCustomerContactArgs = {
  data: CustomerContactInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCustomerContactLocalizationArgs = {
  data?: InputMaybe<CustomerContactInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEndpointDeliveryArgs = {
  data: EndpointDeliveryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEndpointDeliveryLocalizationArgs = {
  data?: InputMaybe<EndpointDeliveryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFooterLocalizationArgs = {
  data?: InputMaybe<FooterInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomeArgs = {
  data: HomeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomeLocalizationArgs = {
  data?: InputMaybe<HomeInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateIntroduceArgs = {
  data: IntroduceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateIntroduceLocalizationArgs = {
  data?: InputMaybe<IntroduceInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateListNewArgs = {
  data: ListNewInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateListNewLocalizationArgs = {
  data?: InputMaybe<ListNewInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateMilestoneArgs = {
  data: MilestoneInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateMilestoneLocalizationArgs = {
  data?: InputMaybe<MilestoneInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateNewsArgs = {
  data: NewsInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateNewsLocalizationArgs = {
  data?: InputMaybe<NewsInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreatePackingArgs = {
  data: PackingInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePackingLocalizationArgs = {
  data?: InputMaybe<PackingInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProvinceArgs = {
  data: ProvinceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProvinceLocalizationArgs = {
  data?: InputMaybe<ProvinceInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateRailTransportationArgs = {
  data: RailTransportationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateRailTransportationLocalizationArgs = {
  data?: InputMaybe<RailTransportationInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSeaTransportArgs = {
  data: SeaTransportInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSeaTransportLocalizationArgs = {
  data?: InputMaybe<SeaTransportInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateServiceLocalizationArgs = {
  data?: InputMaybe<ServiceInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSlugifySlugArgs = {
  data: SlugifySlugInput;
};


export type MutationCreateTruckingArgs = {
  data: TruckingInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTruckingLocalizationArgs = {
  data?: InputMaybe<TruckingInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWarehouseArgs = {
  data: WarehouseInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateWarehouseLocalizationArgs = {
  data?: InputMaybe<WarehouseInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAirTransportArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCustomArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCustomerContactArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteEndpointDeliveryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFooterArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteIntroduceArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteListNewArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteMilestoneArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteNewsArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePackingArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteProvinceArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteRailTransportationArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSeaTransportArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSlugifySlugArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTruckingArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAirTransportArgs = {
  data: AirTransportInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCountryArgs = {
  data: CountryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCustomArgs = {
  data: CustomInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCustomerContactArgs = {
  data: CustomerContactInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateEndpointDeliveryArgs = {
  data: EndpointDeliveryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateIntroduceArgs = {
  data: IntroduceInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateListNewArgs = {
  data: ListNewInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateMilestoneArgs = {
  data: MilestoneInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateNewsArgs = {
  data: NewsInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID'];
};


export type MutationUpdatePackingArgs = {
  data: PackingInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateProvinceArgs = {
  data: ProvinceInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateRailTransportationArgs = {
  data: RailTransportationInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSeaTransportArgs = {
  data: SeaTransportInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSlugifySlugArgs = {
  data: SlugifySlugInput;
  id: Scalars['ID'];
};


export type MutationUpdateTruckingArgs = {
  data: TruckingInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateWarehouseArgs = {
  data: WarehouseInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type News = {
  __typename?: 'News';
  SEO?: Maybe<ComponentSharedSeo>;
  contents: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dislike?: Maybe<Scalars['Long']>;
  featured_image: UploadFileEntityResponse;
  is_hot?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['Long']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<NewsRelationResponseCollection>;
  news?: Maybe<NewsRelationResponseCollection>;
  page_view?: Maybe<Scalars['Long']>;
  preview_content: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  relevants?: Maybe<NewsEntityResponse>;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: Enum_News_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NewsLocalizationsArgs = {
  filters?: InputMaybe<NewsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NewsNewsArgs = {
  filters?: InputMaybe<NewsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsEntity = {
  __typename?: 'NewsEntity';
  attributes?: Maybe<News>;
  id?: Maybe<Scalars['ID']>;
};

export type NewsEntityResponse = {
  __typename?: 'NewsEntityResponse';
  data?: Maybe<NewsEntity>;
};

export type NewsEntityResponseCollection = {
  __typename?: 'NewsEntityResponseCollection';
  data: Array<NewsEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<NewsFiltersInput>>>;
  contents?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dislike?: InputMaybe<LongFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  is_hot?: InputMaybe<BooleanFilterInput>;
  like?: InputMaybe<LongFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NewsFiltersInput>;
  news?: InputMaybe<NewsFiltersInput>;
  not?: InputMaybe<NewsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsFiltersInput>>>;
  page_view?: InputMaybe<LongFilterInput>;
  preview_content?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  relevants?: InputMaybe<NewsFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewsInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  contents?: InputMaybe<Scalars['String']>;
  dislike?: InputMaybe<Scalars['Long']>;
  featured_image?: InputMaybe<Scalars['ID']>;
  is_hot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['Long']>;
  news?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  page_view?: InputMaybe<Scalars['Long']>;
  preview_content?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  relevants?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_News_Type>;
};

export type NewsRelationResponseCollection = {
  __typename?: 'NewsRelationResponseCollection';
  data: Array<NewsEntity>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  service_type?: Maybe<Enum_Order_Service_Type>;
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  from?: InputMaybe<StringFilterInput>;
  fullname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  note?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  phone_number?: InputMaybe<StringFilterInput>;
  service?: InputMaybe<StringFilterInput>;
  service_type?: InputMaybe<StringFilterInput>;
  to?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  weight?: InputMaybe<FloatFilterInput>;
};

export type OrderInput = {
  email?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
  service_type?: InputMaybe<Enum_Order_Service_Type>;
  to?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Packing = {
  __typename?: 'Packing';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  bg_price?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  infomation?: Maybe<ComponentServiceInformationService>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PackingRelationResponseCollection>;
  price_table?: Maybe<ComponentCommonPriceTable>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PackingLocalizationsArgs = {
  filters?: InputMaybe<PackingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PackingEntity = {
  __typename?: 'PackingEntity';
  attributes?: Maybe<Packing>;
  id?: Maybe<Scalars['ID']>;
};

export type PackingEntityResponse = {
  __typename?: 'PackingEntityResponse';
  data?: Maybe<PackingEntity>;
};

export type PackingEntityResponseCollection = {
  __typename?: 'PackingEntityResponseCollection';
  data: Array<PackingEntity>;
  meta: ResponseCollectionMeta;
};

export type PackingFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<PackingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  infomation?: InputMaybe<ComponentServiceInformationServiceFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PackingFiltersInput>;
  not?: InputMaybe<PackingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PackingFiltersInput>>>;
  price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PackingInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  bg_price?: InputMaybe<Scalars['ID']>;
  infomation?: InputMaybe<ComponentServiceInformationServiceInput>;
  price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PackingRelationResponseCollection = {
  __typename?: 'PackingRelationResponseCollection';
  data: Array<PackingEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Province = {
  __typename?: 'Province';
  createdAt?: Maybe<Scalars['DateTime']>;
  fullname?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ProvinceRelationResponseCollection>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProvinceLocalizationsArgs = {
  filters?: InputMaybe<ProvinceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProvinceEntity = {
  __typename?: 'ProvinceEntity';
  attributes?: Maybe<Province>;
  id?: Maybe<Scalars['ID']>;
};

export type ProvinceEntityResponse = {
  __typename?: 'ProvinceEntityResponse';
  data?: Maybe<ProvinceEntity>;
};

export type ProvinceEntityResponseCollection = {
  __typename?: 'ProvinceEntityResponseCollection';
  data: Array<ProvinceEntity>;
  meta: ResponseCollectionMeta;
};

export type ProvinceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProvinceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fullname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProvinceFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProvinceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProvinceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProvinceInput = {
  fullname?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProvinceRelationResponseCollection = {
  __typename?: 'ProvinceRelationResponseCollection';
  data: Array<ProvinceEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  airTransport?: Maybe<AirTransportEntityResponse>;
  airTransports?: Maybe<AirTransportEntityResponseCollection>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  countries?: Maybe<CountryEntityResponseCollection>;
  country?: Maybe<CountryEntityResponse>;
  custom?: Maybe<CustomEntityResponse>;
  customerContact?: Maybe<CustomerContactEntityResponse>;
  customerContacts?: Maybe<CustomerContactEntityResponseCollection>;
  customs?: Maybe<CustomEntityResponseCollection>;
  endpointDeliveries?: Maybe<EndpointDeliveryEntityResponseCollection>;
  endpointDelivery?: Maybe<EndpointDeliveryEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  footers?: Maybe<FooterEntityResponseCollection>;
  home?: Maybe<HomeEntityResponse>;
  homes?: Maybe<HomeEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  introduce?: Maybe<IntroduceEntityResponse>;
  introduces?: Maybe<IntroduceEntityResponseCollection>;
  listNew?: Maybe<ListNewEntityResponse>;
  listNews?: Maybe<ListNewEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  milestone?: Maybe<MilestoneEntityResponse>;
  milestones?: Maybe<MilestoneEntityResponseCollection>;
  news?: Maybe<NewsEntityResponse>;
  newss?: Maybe<NewsEntityResponseCollection>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  packing?: Maybe<PackingEntityResponse>;
  packings?: Maybe<PackingEntityResponseCollection>;
  province?: Maybe<ProvinceEntityResponse>;
  provinces?: Maybe<ProvinceEntityResponseCollection>;
  railTransportation?: Maybe<RailTransportationEntityResponse>;
  railTransportations?: Maybe<RailTransportationEntityResponseCollection>;
  seaTransport?: Maybe<SeaTransportEntityResponse>;
  seaTransports?: Maybe<SeaTransportEntityResponseCollection>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  slugifySlug?: Maybe<SlugifySlugEntityResponse>;
  slugifySlugs?: Maybe<SlugifySlugEntityResponseCollection>;
  trucking?: Maybe<TruckingEntityResponse>;
  truckings?: Maybe<TruckingEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  warehouse?: Maybe<WarehouseEntityResponse>;
  warehouses?: Maybe<WarehouseEntityResponseCollection>;
};


export type QueryAirTransportArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryAirTransportsArgs = {
  filters?: InputMaybe<AirTransportFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCountriesArgs = {
  filters?: InputMaybe<CountryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCustomArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCustomerContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCustomerContactsArgs = {
  filters?: InputMaybe<CustomerContactFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCustomsArgs = {
  filters?: InputMaybe<CustomFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEndpointDeliveriesArgs = {
  filters?: InputMaybe<EndpointDeliveryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEndpointDeliveryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryFooterArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryFootersArgs = {
  filters?: InputMaybe<FooterFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomesArgs = {
  filters?: InputMaybe<HomeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIntroduceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryIntroducesArgs = {
  filters?: InputMaybe<IntroduceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListNewArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryListNewsArgs = {
  filters?: InputMaybe<ListNewFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMilestoneArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryMilestonesArgs = {
  filters?: InputMaybe<MilestoneFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNewsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryNewssArgs = {
  filters?: InputMaybe<NewsFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPackingArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPackingsArgs = {
  filters?: InputMaybe<PackingFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProvinceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryProvincesArgs = {
  filters?: InputMaybe<ProvinceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRailTransportationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryRailTransportationsArgs = {
  filters?: InputMaybe<RailTransportationFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeaTransportArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QuerySeaTransportsArgs = {
  filters?: InputMaybe<SeaTransportFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySlugifySlugArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySlugifySlugsArgs = {
  filters?: InputMaybe<SlugifySlugFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTruckingArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTruckingsArgs = {
  filters?: InputMaybe<TruckingFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWarehouseArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryWarehousesArgs = {
  filters?: InputMaybe<WarehouseFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RailTransportation = {
  __typename?: 'RailTransportation';
  SEO?: Maybe<ComponentSharedSeo>;
  advantag_image?: Maybe<UploadFileEntityResponse>;
  advantages?: Maybe<Array<Maybe<ComponentRailService>>>;
  banner?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentServiceFeature>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<RailTransportationRelationResponseCollection>;
  others?: Maybe<Array<Maybe<ComponentTruckingOtherService>>>;
  price_table?: Maybe<ComponentCommonPriceTable>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  service_image?: Maybe<UploadFileEntityResponse>;
  services?: Maybe<Array<Maybe<ComponentRailService>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type RailTransportationAdvantagesArgs = {
  filters?: InputMaybe<ComponentRailServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RailTransportationFeaturesArgs = {
  filters?: InputMaybe<ComponentServiceFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RailTransportationLocalizationsArgs = {
  filters?: InputMaybe<RailTransportationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RailTransportationOthersArgs = {
  filters?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RailTransportationServicesArgs = {
  filters?: InputMaybe<ComponentRailServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RailTransportationEntity = {
  __typename?: 'RailTransportationEntity';
  attributes?: Maybe<RailTransportation>;
  id?: Maybe<Scalars['ID']>;
};

export type RailTransportationEntityResponse = {
  __typename?: 'RailTransportationEntityResponse';
  data?: Maybe<RailTransportationEntity>;
};

export type RailTransportationEntityResponseCollection = {
  __typename?: 'RailTransportationEntityResponseCollection';
  data: Array<RailTransportationEntity>;
  meta: ResponseCollectionMeta;
};

export type RailTransportationFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  advantages?: InputMaybe<ComponentRailServiceFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<RailTransportationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  features?: InputMaybe<ComponentServiceFeatureFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<RailTransportationFiltersInput>;
  not?: InputMaybe<RailTransportationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RailTransportationFiltersInput>>>;
  others?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  services?: InputMaybe<ComponentRailServiceFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RailTransportationInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  advantag_image?: InputMaybe<Scalars['ID']>;
  advantages?: InputMaybe<Array<InputMaybe<ComponentRailServiceInput>>>;
  banner?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Array<InputMaybe<ComponentServiceFeatureInput>>>;
  others?: InputMaybe<Array<InputMaybe<ComponentTruckingOtherServiceInput>>>;
  price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  service_image?: InputMaybe<Scalars['ID']>;
  services?: InputMaybe<Array<InputMaybe<ComponentRailServiceInput>>>;
};

export type RailTransportationRelationResponseCollection = {
  __typename?: 'RailTransportationRelationResponseCollection';
  data: Array<RailTransportationEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SeaTransport = {
  __typename?: 'SeaTransport';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  domestic_image?: Maybe<UploadFileEntityResponse>;
  domestic_price?: Maybe<ComponentCommonPriceTable>;
  domestic_services?: Maybe<Array<Maybe<ComponentRailService>>>;
  features?: Maybe<Array<Maybe<ComponentSeaFeature>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<SeaTransportRelationResponseCollection>;
  others?: Maybe<Array<Maybe<ComponentTruckingOtherService>>>;
  services?: Maybe<Array<Maybe<ComponentSeaService>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SeaTransportDomestic_ServicesArgs = {
  filters?: InputMaybe<ComponentRailServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeaTransportFeaturesArgs = {
  filters?: InputMaybe<ComponentSeaFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeaTransportLocalizationsArgs = {
  filters?: InputMaybe<SeaTransportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeaTransportOthersArgs = {
  filters?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeaTransportServicesArgs = {
  filters?: InputMaybe<ComponentSeaServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeaTransportEntity = {
  __typename?: 'SeaTransportEntity';
  attributes?: Maybe<SeaTransport>;
  id?: Maybe<Scalars['ID']>;
};

export type SeaTransportEntityResponse = {
  __typename?: 'SeaTransportEntityResponse';
  data?: Maybe<SeaTransportEntity>;
};

export type SeaTransportEntityResponseCollection = {
  __typename?: 'SeaTransportEntityResponseCollection';
  data: Array<SeaTransportEntity>;
  meta: ResponseCollectionMeta;
};

export type SeaTransportFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<SeaTransportFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  domestic_price?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  domestic_services?: InputMaybe<ComponentRailServiceFiltersInput>;
  features?: InputMaybe<ComponentSeaFeatureFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SeaTransportFiltersInput>;
  not?: InputMaybe<SeaTransportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SeaTransportFiltersInput>>>;
  others?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  services?: InputMaybe<ComponentSeaServiceFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SeaTransportInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  domestic_image?: InputMaybe<Scalars['ID']>;
  domestic_price?: InputMaybe<ComponentCommonPriceTableInput>;
  domestic_services?: InputMaybe<Array<InputMaybe<ComponentRailServiceInput>>>;
  features?: InputMaybe<Array<InputMaybe<ComponentSeaFeatureInput>>>;
  others?: InputMaybe<Array<InputMaybe<ComponentTruckingOtherServiceInput>>>;
  services?: InputMaybe<Array<InputMaybe<ComponentSeaServiceInput>>>;
};

export type SeaTransportRelationResponseCollection = {
  __typename?: 'SeaTransportRelationResponseCollection';
  data: Array<SeaTransportEntity>;
};

export type Service = {
  __typename?: 'Service';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  bg_service?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  description_service?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentServiceFeature>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ServiceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  transportations?: Maybe<Array<Maybe<ComponentServiceTransportation>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ServiceFeaturesArgs = {
  filters?: InputMaybe<ComponentServiceFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ServiceLocalizationsArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ServiceTransportationsArgs = {
  filters?: InputMaybe<ComponentServiceTransportationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  description_service?: InputMaybe<StringFilterInput>;
  features?: InputMaybe<ComponentServiceFeatureFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ServiceFiltersInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  transportations?: InputMaybe<ComponentServiceTransportationFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  bg_service?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  description_service?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Array<InputMaybe<ComponentServiceFeatureInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  transportations?: InputMaybe<Array<InputMaybe<ComponentServiceTransportationInput>>>;
};

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection';
  data: Array<ServiceEntity>;
};

export type SlugifySlug = {
  __typename?: 'SlugifySlug';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SlugifySlugEntity = {
  __typename?: 'SlugifySlugEntity';
  attributes?: Maybe<SlugifySlug>;
  id?: Maybe<Scalars['ID']>;
};

export type SlugifySlugEntityResponse = {
  __typename?: 'SlugifySlugEntityResponse';
  data?: Maybe<SlugifySlugEntity>;
};

export type SlugifySlugEntityResponseCollection = {
  __typename?: 'SlugifySlugEntityResponseCollection';
  data: Array<SlugifySlugEntity>;
  meta: ResponseCollectionMeta;
};

export type SlugifySlugFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  count?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SlugifySlugFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SlugifySlugInput = {
  count?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Trucking = {
  __typename?: 'Trucking';
  SEO?: Maybe<ComponentSharedSeo>;
  banner?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  internal_features?: Maybe<Array<Maybe<ComponentTruckingFeature>>>;
  internal_img?: Maybe<UploadFileEntityResponse>;
  internal_price_table?: Maybe<ComponentCommonPriceTable>;
  international_features?: Maybe<Array<Maybe<ComponentTruckingFeature>>>;
  international_img?: Maybe<UploadFileEntityResponse>;
  international_price_table?: Maybe<ComponentCommonPriceTable>;
  intro_features?: Maybe<Array<Maybe<ComponentTruckingIntroduceFeatures>>>;
  intro_img?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TruckingRelationResponseCollection>;
  other?: Maybe<Array<Maybe<ComponentTruckingOtherService>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sub_intro_img?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TruckingInternal_FeaturesArgs = {
  filters?: InputMaybe<ComponentTruckingFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TruckingInternational_FeaturesArgs = {
  filters?: InputMaybe<ComponentTruckingFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TruckingIntro_FeaturesArgs = {
  filters?: InputMaybe<ComponentTruckingIntroduceFeaturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TruckingLocalizationsArgs = {
  filters?: InputMaybe<TruckingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TruckingOtherArgs = {
  filters?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TruckingEntity = {
  __typename?: 'TruckingEntity';
  attributes?: Maybe<Trucking>;
  id?: Maybe<Scalars['ID']>;
};

export type TruckingEntityResponse = {
  __typename?: 'TruckingEntityResponse';
  data?: Maybe<TruckingEntity>;
};

export type TruckingEntityResponseCollection = {
  __typename?: 'TruckingEntityResponseCollection';
  data: Array<TruckingEntity>;
  meta: ResponseCollectionMeta;
};

export type TruckingFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<TruckingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  internal_features?: InputMaybe<ComponentTruckingFeatureFiltersInput>;
  internal_price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  international_features?: InputMaybe<ComponentTruckingFeatureFiltersInput>;
  international_price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  intro_features?: InputMaybe<ComponentTruckingIntroduceFeaturesFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TruckingFiltersInput>;
  not?: InputMaybe<TruckingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TruckingFiltersInput>>>;
  other?: InputMaybe<ComponentTruckingOtherServiceFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TruckingInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  internal_features?: InputMaybe<Array<InputMaybe<ComponentTruckingFeatureInput>>>;
  internal_img?: InputMaybe<Scalars['ID']>;
  internal_price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  international_features?: InputMaybe<Array<InputMaybe<ComponentTruckingFeatureInput>>>;
  international_img?: InputMaybe<Scalars['ID']>;
  international_price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  intro_features?: InputMaybe<Array<InputMaybe<ComponentTruckingIntroduceFeaturesInput>>>;
  intro_img?: InputMaybe<Scalars['ID']>;
  other?: InputMaybe<Array<InputMaybe<ComponentTruckingOtherServiceInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sub_intro_img?: InputMaybe<Scalars['ID']>;
};

export type TruckingRelationResponseCollection = {
  __typename?: 'TruckingRelationResponseCollection';
  data: Array<TruckingEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  SEO?: Maybe<ComponentSharedSeo>;
  banner: UploadFileEntityResponse;
  bg_price: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  infomation?: Maybe<ComponentServiceInformationService>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<WarehouseRelationResponseCollection>;
  price_table: ComponentCommonPriceTable;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WarehouseLocalizationsArgs = {
  filters?: InputMaybe<WarehouseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WarehouseEntity = {
  __typename?: 'WarehouseEntity';
  attributes?: Maybe<Warehouse>;
  id?: Maybe<Scalars['ID']>;
};

export type WarehouseEntityResponse = {
  __typename?: 'WarehouseEntityResponse';
  data?: Maybe<WarehouseEntity>;
};

export type WarehouseEntityResponseCollection = {
  __typename?: 'WarehouseEntityResponseCollection';
  data: Array<WarehouseEntity>;
  meta: ResponseCollectionMeta;
};

export type WarehouseFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<WarehouseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  infomation?: InputMaybe<ComponentServiceInformationServiceFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<WarehouseFiltersInput>;
  not?: InputMaybe<WarehouseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WarehouseFiltersInput>>>;
  price_table?: InputMaybe<ComponentCommonPriceTableFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WarehouseInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  banner?: InputMaybe<Scalars['ID']>;
  bg_price?: InputMaybe<Scalars['ID']>;
  infomation?: InputMaybe<ComponentServiceInformationServiceInput>;
  price_table?: InputMaybe<ComponentCommonPriceTableInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WarehouseRelationResponseCollection = {
  __typename?: 'WarehouseRelationResponseCollection';
  data: Array<WarehouseEntity>;
};

export type GetAirTransportQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetAirTransportQuery = { __typename?: 'Query', airTransports?: { __typename?: 'AirTransportEntityResponseCollection', data: Array<{ __typename?: 'AirTransportEntity', attributes?: { __typename?: 'AirTransport', description?: string | null, SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, features?: Array<{ __typename?: 'ComponentAirFeature', title?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, domestic_services?: Array<{ __typename?: 'ComponentRailService', title?: string | null } | null> | null, domestic_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, domestic_price?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null, international_services?: Array<{ __typename?: 'ComponentRailService', title?: string | null } | null> | null, international_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, international_price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null, others?: Array<{ __typename?: 'ComponentTruckingOtherService', title?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null } | null }> } | null };

export type GetContactsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetContactsQuery = { __typename?: 'Query', contacts?: { __typename?: 'ContactEntityResponseCollection', data: Array<{ __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, contacts: Array<{ __typename?: 'ComponentContactContact', title: string, description: string, role: string, hotline: string, formatted_hotline: string, email: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> } | null }> } | null };

export type CreateCustomerContactMutationVariables = Exact<{
  data: CustomerContactInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type CreateCustomerContactMutation = { __typename?: 'Mutation', createCustomerContact?: { __typename?: 'CustomerContactEntityResponse', data?: { __typename?: 'CustomerContactEntity', id?: string | null, attributes?: { __typename?: 'CustomerContact', title?: string | null, fullname?: string | null, phone_number?: string | null, email?: string | null, content?: string | null, address?: string | null } | null } | null } | null };

export type GetCustomsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetCustomsQuery = { __typename?: 'Query', customs?: { __typename?: 'CustomEntityResponseCollection', data: Array<{ __typename?: 'CustomEntity', attributes?: { __typename?: 'Custom', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, infomation?: { __typename?: 'ComponentServiceInformationService', description: string, info_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, info_sub_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, advantage: Array<{ __typename?: 'ComponentCommonAdvantage', title: string } | null> } | null, procedures?: Array<{ __typename?: 'ComponentCustomProcedure', text?: string | null, is_active?: boolean | null } | null> | null, bg_price?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null } | null }> } | null };

export type GetEndpointDeliverysQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetEndpointDeliverysQuery = { __typename?: 'Query', endpointDeliveries?: { __typename?: 'EndpointDeliveryEntityResponseCollection', data: Array<{ __typename?: 'EndpointDeliveryEntity', attributes?: { __typename?: 'EndpointDelivery', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, infomation?: { __typename?: 'ComponentServiceInformationService', description: string, info_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, info_sub_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, advantage: Array<{ __typename?: 'ComponentCommonAdvantage', title: string } | null> } | null, bg_price?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null } | null }> } | null };

export type GetHomeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetHomeQuery = { __typename?: 'Query', homes?: { __typename?: 'HomeEntityResponseCollection', data: Array<{ __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banners?: Array<{ __typename?: 'ComponentHomeBanner', url?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null> | null, abouts: Array<{ __typename?: 'ComponentHomeAbout', is_plus?: boolean | null, heading: number, subject: string, detail: string } | null>, features: Array<{ __typename?: 'ComponentHomeFeature', title: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null>, home_tabs: Array<{ __typename?: 'ComponentHomeHomeTab', title: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null>, services: Array<{ __typename?: 'ComponentHomeHomeService', title: string, url?: string | null, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, background: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, subs?: Array<{ __typename?: 'ComponentHomeHomeSubService', title?: string | null, url?: string | null } | null> | null } | null>, lookups: Array<{ __typename?: 'ComponentHomeHomeLookup', title: string, background: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, contacts: Array<{ __typename?: 'ComponentHomeServiceContact', name: string, phone: string, phone_displayed: string } | null> } | null>, partners: Array<{ __typename?: 'ComponentHomeHomePartner', image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null> } | null }> } | null };

export type GetFooterQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetFooterQuery = { __typename?: 'Query', footers?: { __typename?: 'FooterEntityResponseCollection', data: Array<{ __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', url_bo_cong_thuong?: string | null, links?: Array<{ __typename?: 'ComponentFooterFooterColumn', title?: string | null, links?: Array<{ __typename?: 'ComponentFooterFooterLink', title?: string | null, url?: string | null, is_external_link?: boolean | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null> | null, infos?: Array<{ __typename?: 'ComponentFooterFooterInfo', title?: string | null, url?: string | null } | null> | null, socials?: Array<{ __typename?: 'ComponentFooterSocialLink', url?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null }> } | null };

export type GetIntroducesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetIntroducesQuery = { __typename?: 'Query', introduces?: { __typename?: 'IntroduceEntityResponseCollection', data: Array<{ __typename?: 'IntroduceEntity', attributes?: { __typename?: 'Introduce', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, general?: { __typename?: 'ComponentIntroduceGeneral', title?: string | null, content?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, sub_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, mission?: { __typename?: 'ComponentIntroduceMission', description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, properties?: Array<{ __typename?: 'ComponentCommonAdvantage', title: string } | null> | null, introduce: Array<{ __typename?: 'ComponentIntroduceFeature', number: number, title: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> } | null, core_values?: { __typename?: 'ComponentIntroduceCoreValues', center_customer_title: string, center_customer_content?: string | null, kindness_title: string, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> }, kindness_content: Array<{ __typename?: 'ComponentCommonAdvantage', title: string } | null> } | null, reasons_choose_we?: { __typename?: 'ComponentIntroduceReasonsChooseWe', description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, reasons?: Array<{ __typename?: 'ComponentTruckingIntroduceFeatures', title?: string | null, description?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null, other?: Array<{ __typename?: 'ComponentCommonGroupImageContent', link?: string | null, title?: string | null, content?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null }> } | null };

export type GetCountryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetCountryQuery = { __typename?: 'Query', countries?: { __typename?: 'CountryEntityResponseCollection', data: Array<{ __typename?: 'CountryEntity', attributes?: { __typename?: 'Country', name?: string | null, fullname?: string | null } | null }> } | null };

export type GetProvinceQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetProvinceQuery = { __typename?: 'Query', provinces?: { __typename?: 'ProvinceEntityResponseCollection', data: Array<{ __typename?: 'ProvinceEntity', attributes?: { __typename?: 'Province', name?: string | null, fullname?: string | null } | null }> } | null };

export type GetMilestonesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetMilestonesQuery = { __typename?: 'Query', milestones?: { __typename?: 'MilestoneEntityResponseCollection', data: Array<{ __typename?: 'MilestoneEntity', attributes?: { __typename?: 'Milestone', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, bg_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, milestones?: Array<{ __typename?: 'ComponentIntroduceMilestones', timeline?: any | null, datetime?: string | null, content?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null }> } | null };

export type GetBannerNewQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  filter?: InputMaybe<ListNewFiltersInput>;
}>;


export type GetBannerNewQuery = { __typename?: 'Query', listNews?: { __typename?: 'ListNewEntityResponseCollection', data: Array<{ __typename?: 'ListNewEntity', attributes?: { __typename?: 'ListNew', type: Enum_Listnew_Type, banner: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null };

export type GetNewsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  filter?: InputMaybe<NewsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetNewsQuery = { __typename?: 'Query', newss?: { __typename?: 'NewsEntityResponseCollection', data: Array<{ __typename?: 'NewsEntity', id?: string | null, attributes?: { __typename?: 'News', title: string, contents: string, preview_content: string, updatedAt?: any | null, type: Enum_News_Type, is_hot?: boolean | null, slug: string, page_view?: any | null, like?: any | null, dislike?: any | null, SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, news?: { __typename?: 'NewsRelationResponseCollection', data: Array<{ __typename?: 'NewsEntity', attributes?: { __typename?: 'News', title: string, preview_content: string, page_view?: any | null, type: Enum_News_Type, is_hot?: boolean | null, like?: any | null, dislike?: any | null, updatedAt?: any | null, slug: string, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetDetailNewsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  filter?: InputMaybe<NewsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetDetailNewsQuery = { __typename?: 'Query', newss?: { __typename?: 'NewsEntityResponseCollection', data: Array<{ __typename?: 'NewsEntity', id?: string | null, attributes?: { __typename?: 'News', title: string, contents: string, preview_content: string, updatedAt?: any | null, type: Enum_News_Type, is_hot?: boolean | null, slug: string, page_view?: any | null, like?: any | null, dislike?: any | null, SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, news?: { __typename?: 'NewsRelationResponseCollection', data: Array<{ __typename?: 'NewsEntity', attributes?: { __typename?: 'News', title: string, preview_content: string, page_view?: any | null, type: Enum_News_Type, is_hot?: boolean | null, like?: any | null, dislike?: any | null, updatedAt?: any | null, slug: string, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type UpdatePageNewMutationVariables = Exact<{
  id: Scalars['ID'];
  data: NewsInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type UpdatePageNewMutation = { __typename?: 'Mutation', updateNews?: { __typename?: 'NewsEntityResponse', data?: { __typename?: 'NewsEntity', id?: string | null, attributes?: { __typename?: 'News', page_view?: any | null, like?: any | null, dislike?: any | null } | null } | null } | null };

export type GetPackingsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetPackingsQuery = { __typename?: 'Query', packings?: { __typename?: 'PackingEntityResponseCollection', data: Array<{ __typename?: 'PackingEntity', attributes?: { __typename?: 'Packing', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, infomation?: { __typename?: 'ComponentServiceInformationService', description: string, info_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, info_sub_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, advantage: Array<{ __typename?: 'ComponentCommonAdvantage', title: string } | null> } | null, bg_price?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null } | null }> } | null };

export type GetRailsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetRailsQuery = { __typename?: 'Query', railTransportations?: { __typename?: 'RailTransportationEntityResponseCollection', data: Array<{ __typename?: 'RailTransportationEntity', attributes?: { __typename?: 'RailTransportation', description?: string | null, SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null, features?: Array<{ __typename?: 'ComponentServiceFeature', number?: any | null, object?: string | null, title?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, services?: Array<{ __typename?: 'ComponentRailService', title?: string | null } | null> | null, service_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, advantag_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, advantages?: Array<{ __typename?: 'ComponentRailService', title?: string | null } | null> | null, others?: Array<{ __typename?: 'ComponentTruckingOtherService', title?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null } | null }> } | null };

export type GetSeaTransportQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetSeaTransportQuery = { __typename?: 'Query', seaTransports?: { __typename?: 'SeaTransportEntityResponseCollection', data: Array<{ __typename?: 'SeaTransportEntity', attributes?: { __typename?: 'SeaTransport', description?: string | null, SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, features?: Array<{ __typename?: 'ComponentSeaFeature', from?: number | null, to?: number | null, unit?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, domestic_services?: Array<{ __typename?: 'ComponentRailService', title?: string | null } | null> | null, domestic_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, services?: Array<{ __typename?: 'ComponentSeaService', title?: string | null, name?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null, properties?: Array<{ __typename?: 'ComponentRailService', title?: string | null } | null> | null } | null> | null, others?: Array<{ __typename?: 'ComponentTruckingOtherService', title?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, domestic_price?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null } | null }> } | null };

export type GetServiceQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetServiceQuery = { __typename?: 'Query', services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', attributes?: { __typename?: 'Service', description?: string | null, description_service?: string | null, SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, bg_service?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, features?: Array<{ __typename?: 'ComponentServiceFeature', title?: string | null, number?: any | null, object?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, transportations?: Array<{ __typename?: 'ComponentServiceTransportation', title?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null } | null }> } | null };

export type CreateOrderServiceMutationVariables = Exact<{
  data: OrderInput;
}>;


export type CreateOrderServiceMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'OrderEntityResponse', data?: { __typename?: 'OrderEntity', id?: string | null, attributes?: { __typename?: 'Order', fullname?: string | null, phone_number?: string | null, email?: string | null, service?: string | null, from?: string | null, to?: string | null, note?: string | null, weight?: number | null, service_type?: Enum_Order_Service_Type | null } | null } | null } | null };

export type GetTruckingsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetTruckingsQuery = { __typename?: 'Query', truckings?: { __typename?: 'TruckingEntityResponseCollection', data: Array<{ __typename?: 'TruckingEntity', attributes?: { __typename?: 'Trucking', description?: string | null, SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, intro_img?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, sub_intro_img?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, internal_img?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, international_img?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, intro_features?: Array<{ __typename?: 'ComponentTruckingIntroduceFeatures', title?: string | null, description?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, internal_features?: Array<{ __typename?: 'ComponentTruckingFeature', title?: string | null, description?: string | null } | null> | null, international_features?: Array<{ __typename?: 'ComponentTruckingFeature', title?: string | null, description?: string | null } | null> | null, other?: Array<{ __typename?: 'ComponentTruckingOtherService', title?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, internal_price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null, international_price_table?: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } | null } | null }> } | null };

export type GetWarehousesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetWarehousesQuery = { __typename?: 'Query', warehouses?: { __typename?: 'WarehouseEntityResponseCollection', data: Array<{ __typename?: 'WarehouseEntity', attributes?: { __typename?: 'Warehouse', SEO?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, banner: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, infomation?: { __typename?: 'ComponentServiceInformationService', description: string, info_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, info_sub_img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, advantage: Array<{ __typename?: 'ComponentCommonAdvantage', title: string } | null> } | null, bg_price: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, price_table: { __typename?: 'ComponentCommonPriceTable', title?: string | null, price_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } } } | null }> } | null };


export const GetAirTransportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAirTransport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"airTransports"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"domestic_services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"domestic_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domestic_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"international_services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"international_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"international_price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"others"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAirTransportQuery, GetAirTransportQueryVariables>;
export const GetContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContacts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"hotline"}},{"kind":"Field","name":{"kind":"Name","value":"formatted_hotline"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContactsQuery, GetContactsQueryVariables>;
export const CreateCustomerContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCustomerContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerContactInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateCustomerContactMutation, CreateCustomerContactMutationVariables>;
export const GetCustomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustoms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infomation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"info_sub_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"advantage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"procedures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bg_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomsQuery, GetCustomsQueryVariables>;
export const GetEndpointDeliverysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEndpointDeliverys"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endpointDeliveries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infomation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"info_sub_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"advantage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bg_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEndpointDeliverysQuery, GetEndpointDeliverysQueryVariables>;
export const GetHomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHome"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"abouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_plus"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"detail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"home_tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lookups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phone_displayed"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHomeQuery, GetHomeQueryVariables>;
export const GetFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFooter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"is_external_link"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url_bo_cong_thuong"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFooterQuery, GetFooterQueryVariables>;
export const GetIntroducesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIntroduces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introduces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"general"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sub_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"introduce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"core_values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"center_customer_title"}},{"kind":"Field","name":{"kind":"Name","value":"center_customer_content"}},{"kind":"Field","name":{"kind":"Name","value":"kindness_title"}},{"kind":"Field","name":{"kind":"Name","value":"kindness_content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reasons_choose_we"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"other"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetIntroducesQuery, GetIntroducesQueryVariables>;
export const GetCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"1000"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCountryQuery, GetCountryQueryVariables>;
export const GetProvinceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProvince"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provinces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"1000"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProvinceQuery, GetProvinceQueryVariables>;
export const GetMilestonesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMilestones"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"milestones"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bg_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"milestones"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeline"}},{"kind":"Field","name":{"kind":"Name","value":"datetime"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMilestonesQuery, GetMilestonesQueryVariables>;
export const GetBannerNewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBannerNew"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ListNewFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBannerNewQuery, GetBannerNewQueryVariables>;
export const GetNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newss"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"preview_content"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_hot"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"page_view"}},{"kind":"Field","name":{"kind":"Name","value":"like"}},{"kind":"Field","name":{"kind":"Name","value":"dislike"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"preview_content"}},{"kind":"Field","name":{"kind":"Name","value":"page_view"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_hot"}},{"kind":"Field","name":{"kind":"Name","value":"like"}},{"kind":"Field","name":{"kind":"Name","value":"dislike"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNewsQuery, GetNewsQueryVariables>;
export const GetDetailNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDetailNews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newss"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"preview_content"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_hot"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"page_view"}},{"kind":"Field","name":{"kind":"Name","value":"like"}},{"kind":"Field","name":{"kind":"Name","value":"dislike"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"preview_content"}},{"kind":"Field","name":{"kind":"Name","value":"page_view"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_hot"}},{"kind":"Field","name":{"kind":"Name","value":"like"}},{"kind":"Field","name":{"kind":"Name","value":"dislike"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDetailNewsQuery, GetDetailNewsQueryVariables>;
export const UpdatePageNewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePageNew"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page_view"}},{"kind":"Field","name":{"kind":"Name","value":"like"}},{"kind":"Field","name":{"kind":"Name","value":"dislike"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePageNewMutation, UpdatePageNewMutationVariables>;
export const GetPackingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPackings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infomation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"info_sub_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"advantage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bg_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPackingsQuery, GetPackingsQueryVariables>;
export const GetRailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"railTransportations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"object"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"service_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"advantag_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"advantages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"others"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRailsQuery, GetRailsQueryVariables>;
export const GetSeaTransportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSeaTransport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seaTransports"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domestic_services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"domestic_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"others"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"domestic_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSeaTransportQuery, GetSeaTransportQueryVariables>;
export const GetServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bg_service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"description_service"}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"object"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transportations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceQuery, GetServiceQueryVariables>;
export const CreateOrderServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOrderService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"service"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"service_type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOrderServiceMutation, CreateOrderServiceMutationVariables>;
export const GetTruckingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTruckings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"truckings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"intro_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sub_intro_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"internal_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"international_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"intro_features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"internal_features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"international_features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"other"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"internal_price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"international_price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTruckingsQuery, GetTruckingsQueryVariables>;
export const GetWarehousesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWarehouses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SEO"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infomation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"info_sub_img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"advantage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bg_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWarehousesQuery, GetWarehousesQueryVariables>;