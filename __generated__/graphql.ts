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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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
  detail?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  is_plus?: Maybe<Scalars['Boolean']>;
  subject?: Maybe<Scalars['String']>;
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

export type ComponentHomeFeature = {
  __typename?: 'ComponentHomeFeature';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
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
  background?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentHomeHomeLookupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeHomeLookupFiltersInput>>>;
  not?: InputMaybe<ComponentHomeHomeLookupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeHomeLookupFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeHomeLookupInput = {
  background?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeHomePartner = {
  __typename?: 'ComponentHomeHomePartner';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
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
  background?: Maybe<UploadFileEntityResponse>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  subs?: Maybe<Array<Maybe<ComponentHomeHomeSubService>>>;
  title?: Maybe<Scalars['String']>;
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
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type ComponentHomeServiceContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeServiceContactFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomeServiceContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeServiceContactFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeServiceContactInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
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

export enum Enum_Home_Code {
  Contact = 'contact',
  Country = 'country',
  Customs = 'customs',
  EndpointDelivery = 'endpoint_delivery',
  Footer = 'footer',
  Home = 'home',
  HomePost = 'home_post',
  HotNews = 'hot_news',
  Image = 'image',
  InternalNews = 'internal_news',
  Introduce = 'introduce',
  MarketNews = 'market_news',
  Packing = 'packing',
  PostDetail = 'post_detail',
  Province = 'province',
  Recruitment = 'recruitment',
  Service = 'service',
  SpecializedNews = 'specialized_news',
  Trucking = 'trucking',
  Warehouse = 'warehouse'
}

export enum Enum_Navigationnavigationitem_Type {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
  Wrapper = 'WRAPPER'
}

export enum Enum_News_Type {
  InternalNews = 'internal_news',
  MarketNews = 'market_news'
}

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
  publishedAt?: Maybe<Scalars['DateTime']>;
  socials?: Maybe<Array<Maybe<ComponentFooterSocialLink>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  not?: InputMaybe<FooterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  socials?: InputMaybe<ComponentFooterSocialLinkFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FooterInput = {
  infos?: InputMaybe<Array<InputMaybe<ComponentFooterFooterInfoInput>>>;
  links?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  socials?: InputMaybe<Array<InputMaybe<ComponentFooterSocialLinkInput>>>;
};

export type GenericMorph = ComponentFooterFooterColumn | ComponentFooterFooterInfo | ComponentFooterFooterLink | ComponentFooterSocialLink | ComponentHomeAbout | ComponentHomeFeature | ComponentHomeHomeLookup | ComponentHomeHomePartner | ComponentHomeHomeService | ComponentHomeHomeSubService | ComponentHomeHomeTab | ComponentHomeServiceContact | ComponentSharedMetaSocial | ComponentSharedSeo | Footer | Home | I18NLocale | NavigationAudience | NavigationNavigation | NavigationNavigationItem | NavigationNavigationsItemsRelated | News | Service | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Home = {
  __typename?: 'Home';
  Code?: Maybe<Enum_Home_Code>;
  SEO?: Maybe<ComponentSharedSeo>;
  abouts?: Maybe<Array<Maybe<ComponentHomeAbout>>>;
  banners?: Maybe<UploadFileRelationResponseCollection>;
  contacts?: Maybe<Array<Maybe<ComponentHomeServiceContact>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  features?: Maybe<Array<Maybe<ComponentHomeFeature>>>;
  home_tabs?: Maybe<Array<Maybe<ComponentHomeHomeTab>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomeRelationResponseCollection>;
  lookups?: Maybe<Array<Maybe<ComponentHomeHomeLookup>>>;
  partners?: Maybe<Array<Maybe<ComponentHomeHomePartner>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  services?: Maybe<Array<Maybe<ComponentHomeHomeService>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomeAboutsArgs = {
  filters?: InputMaybe<ComponentHomeAboutFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeBannersArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeContactsArgs = {
  filters?: InputMaybe<ComponentHomeServiceContactFiltersInput>;
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
  publicationState?: InputMaybe<PublicationState>;
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
  Code?: InputMaybe<StringFilterInput>;
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>;
  abouts?: InputMaybe<ComponentHomeAboutFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<HomeFiltersInput>>>;
  contacts?: InputMaybe<ComponentHomeServiceContactFiltersInput>;
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
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  services?: InputMaybe<ComponentHomeHomeServiceFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomeInput = {
  Code?: InputMaybe<Enum_Home_Code>;
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  abouts?: InputMaybe<Array<InputMaybe<ComponentHomeAboutInput>>>;
  banners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contacts?: InputMaybe<Array<InputMaybe<ComponentHomeServiceContactInput>>>;
  features?: InputMaybe<Array<InputMaybe<ComponentHomeFeatureInput>>>;
  home_tabs?: InputMaybe<Array<InputMaybe<ComponentHomeHomeTabInput>>>;
  lookups?: InputMaybe<Array<InputMaybe<ComponentHomeHomeLookupInput>>>;
  partners?: InputMaybe<Array<InputMaybe<ComponentHomeHomePartnerInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createFooter?: Maybe<FooterEntityResponse>;
  createHome?: Maybe<HomeEntityResponse>;
  createHomeLocalization?: Maybe<HomeEntityResponse>;
  createNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  createNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  createNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  createNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  createNews?: Maybe<NewsEntityResponse>;
  createNewsLocalization?: Maybe<NewsEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  deleteNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  deleteNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  deleteNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  deleteNews?: Maybe<NewsEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
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
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  updateNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  updateNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  updateNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  updateNews?: Maybe<NewsEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateFooterArgs = {
  data: FooterInput;
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


export type MutationCreateNavigationAudienceArgs = {
  data: NavigationAudienceInput;
};


export type MutationCreateNavigationNavigationArgs = {
  data: NavigationNavigationInput;
};


export type MutationCreateNavigationNavigationItemArgs = {
  data: NavigationNavigationItemInput;
};


export type MutationCreateNavigationNavigationsItemsRelatedArgs = {
  data: NavigationNavigationsItemsRelatedInput;
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


export type MutationCreateServiceArgs = {
  data: ServiceInput;
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


export type MutationDeleteFooterArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHomeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteNavigationAudienceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationsItemsRelatedArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNewsArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID'];
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


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  id: Scalars['ID'];
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateNavigationAudienceArgs = {
  data: NavigationAudienceInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationArgs = {
  data: NavigationNavigationInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationItemArgs = {
  data: NavigationNavigationItemInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationsItemsRelatedArgs = {
  data: NavigationNavigationsItemsRelatedInput;
  id: Scalars['ID'];
};


export type MutationUpdateNewsArgs = {
  data: NewsInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID'];
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


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavigationAudience = {
  __typename?: 'NavigationAudience';
  createdAt?: Maybe<Scalars['DateTime']>;
  key?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationAudienceEntity = {
  __typename?: 'NavigationAudienceEntity';
  attributes?: Maybe<NavigationAudience>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationAudienceEntityResponse = {
  __typename?: 'NavigationAudienceEntityResponse';
  data?: Maybe<NavigationAudienceEntity>;
};

export type NavigationAudienceEntityResponseCollection = {
  __typename?: 'NavigationAudienceEntityResponseCollection';
  data: Array<NavigationAudienceEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationAudienceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationAudienceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationAudienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationAudienceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationAudienceInput = {
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NavigationAudienceRelationResponseCollection = {
  __typename?: 'NavigationAudienceRelationResponseCollection';
  data: Array<NavigationAudienceEntity>;
};

export type NavigationNavigation = {
  __typename?: 'NavigationNavigation';
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<NavigationNavigationItemRelationResponseCollection>;
  localeCode?: Maybe<Scalars['String']>;
  localizations?: Maybe<NavigationNavigationRelationResponseCollection>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  visible?: Maybe<Scalars['Boolean']>;
};


export type NavigationNavigationItemsArgs = {
  filters?: InputMaybe<NavigationNavigationItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NavigationNavigationLocalizationsArgs = {
  filters?: InputMaybe<NavigationNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationNavigationEntity = {
  __typename?: 'NavigationNavigationEntity';
  attributes?: Maybe<NavigationNavigation>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationEntityResponse = {
  __typename?: 'NavigationNavigationEntityResponse';
  data?: Maybe<NavigationNavigationEntity>;
};

export type NavigationNavigationEntityResponseCollection = {
  __typename?: 'NavigationNavigationEntityResponseCollection';
  data: Array<NavigationNavigationEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<NavigationNavigationItemFiltersInput>;
  localeCode?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NavigationNavigationFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationNavigationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  visible?: InputMaybe<BooleanFilterInput>;
};

export type NavigationNavigationInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  localeCode?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationNavigationItem = {
  __typename?: 'NavigationNavigationItem';
  additionalFields?: Maybe<Scalars['JSON']>;
  audience?: Maybe<NavigationAudienceRelationResponseCollection>;
  collapsed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  externalPath?: Maybe<Scalars['String']>;
  master?: Maybe<NavigationNavigationEntityResponse>;
  menuAttached?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<NavigationNavigationItemEntityResponse>;
  path?: Maybe<Scalars['String']>;
  related?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  title: Scalars['String'];
  type?: Maybe<Enum_Navigationnavigationitem_Type>;
  uiRouterKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavigationNavigationItemAudienceArgs = {
  filters?: InputMaybe<NavigationAudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationNavigationItemEntity = {
  __typename?: 'NavigationNavigationItemEntity';
  attributes?: Maybe<NavigationNavigationItem>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationItemEntityResponse = {
  __typename?: 'NavigationNavigationItemEntityResponse';
  data?: Maybe<NavigationNavigationItemEntity>;
};

export type NavigationNavigationItemEntityResponseCollection = {
  __typename?: 'NavigationNavigationItemEntityResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationItemFiltersInput = {
  additionalFields?: InputMaybe<JsonFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationItemFiltersInput>>>;
  audience?: InputMaybe<NavigationAudienceFiltersInput>;
  collapsed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  externalPath?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  master?: InputMaybe<NavigationNavigationFiltersInput>;
  menuAttached?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<NavigationNavigationItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<NavigationNavigationItemFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  related?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  uiRouterKey?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationNavigationItemInput = {
  additionalFields?: InputMaybe<Scalars['JSON']>;
  audience?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  collapsed?: InputMaybe<Scalars['Boolean']>;
  externalPath?: InputMaybe<Scalars['String']>;
  master?: InputMaybe<Scalars['ID']>;
  menuAttached?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  related?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Navigationnavigationitem_Type>;
  uiRouterKey?: InputMaybe<Scalars['String']>;
};

export type NavigationNavigationItemRelationResponseCollection = {
  __typename?: 'NavigationNavigationItemRelationResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
};

export type NavigationNavigationRelationResponseCollection = {
  __typename?: 'NavigationNavigationRelationResponseCollection';
  data: Array<NavigationNavigationEntity>;
};

export type NavigationNavigationsItemsRelated = {
  __typename?: 'NavigationNavigationsItemsRelated';
  createdAt?: Maybe<Scalars['DateTime']>;
  field: Scalars['String'];
  master: Scalars['String'];
  order: Scalars['Int'];
  related_id: Scalars['String'];
  related_type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationNavigationsItemsRelatedEntity = {
  __typename?: 'NavigationNavigationsItemsRelatedEntity';
  attributes?: Maybe<NavigationNavigationsItemsRelated>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationsItemsRelatedEntityResponse = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponse';
  data?: Maybe<NavigationNavigationsItemsRelatedEntity>;
};

export type NavigationNavigationsItemsRelatedEntityResponseCollection = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponseCollection';
  data: Array<NavigationNavigationsItemsRelatedEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationsItemsRelatedFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  field?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  master?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  related_id?: InputMaybe<StringFilterInput>;
  related_type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationNavigationsItemsRelatedInput = {
  field?: InputMaybe<Scalars['String']>;
  master?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  related_id?: InputMaybe<Scalars['String']>;
  related_type?: InputMaybe<Scalars['String']>;
};

export type News = {
  __typename?: 'News';
  SEO?: Maybe<ComponentSharedSeo>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  featured_image?: Maybe<UploadFileEntityResponse>;
  isVisibleInListView?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<NewsRelationResponseCollection>;
  news?: Maybe<NewsRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  relevants?: Maybe<NewsEntityResponse>;
  title: Scalars['String'];
  type: Enum_News_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
  versionNumber?: Maybe<Scalars['Int']>;
  versions?: Maybe<NewsRelationResponseCollection>;
  vuid?: Maybe<Scalars['String']>;
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


export type NewsVersionsArgs = {
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
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isVisibleInListView?: InputMaybe<BooleanFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NewsFiltersInput>;
  news?: InputMaybe<NewsFiltersInput>;
  not?: InputMaybe<NewsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  relevants?: InputMaybe<NewsFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
  versions?: InputMaybe<NewsFiltersInput>;
  vuid?: InputMaybe<StringFilterInput>;
};

export type NewsInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>;
  content?: InputMaybe<Scalars['String']>;
  featured_image?: InputMaybe<Scalars['ID']>;
  isVisibleInListView?: InputMaybe<Scalars['Boolean']>;
  news?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  relevants?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_News_Type>;
  versionNumber?: InputMaybe<Scalars['Int']>;
  versions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vuid?: InputMaybe<Scalars['String']>;
};

export type NewsRelationResponseCollection = {
  __typename?: 'NewsRelationResponseCollection';
  data: Array<NewsEntity>;
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

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  footer?: Maybe<FooterEntityResponse>;
  footers?: Maybe<FooterEntityResponseCollection>;
  home?: Maybe<HomeEntityResponse>;
  homes?: Maybe<HomeEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  navigationAudiences?: Maybe<NavigationAudienceEntityResponseCollection>;
  navigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  navigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  navigationNavigationItems?: Maybe<NavigationNavigationItemEntityResponseCollection>;
  navigationNavigations?: Maybe<NavigationNavigationEntityResponseCollection>;
  navigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  navigationNavigationsItemsRelateds?: Maybe<NavigationNavigationsItemsRelatedEntityResponseCollection>;
  news?: Maybe<NewsEntityResponse>;
  newss?: Maybe<NewsEntityResponseCollection>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryFooterArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFootersArgs = {
  filters?: InputMaybe<FooterFiltersInput>;
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
  publicationState?: InputMaybe<PublicationState>;
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


export type QueryNavigationAudienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationAudiencesArgs = {
  filters?: InputMaybe<NavigationAudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationItemsArgs = {
  filters?: InputMaybe<NavigationNavigationItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationsArgs = {
  filters?: InputMaybe<NavigationNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationsItemsRelatedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationsItemsRelatedsArgs = {
  filters?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
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

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  banner?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  banner?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
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

export type GetHomeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetHomeQuery = { __typename?: 'Query', homes?: { __typename?: 'HomeEntityResponseCollection', data: Array<{ __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', banners?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null }> } | null, abouts?: Array<{ __typename?: 'ComponentHomeAbout', is_plus?: boolean | null, heading?: number | null, subject?: string | null, detail?: string | null } | null> | null, features?: Array<{ __typename?: 'ComponentHomeFeature', title?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, home_tabs?: Array<{ __typename?: 'ComponentHomeHomeTab', title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, services?: Array<{ __typename?: 'ComponentHomeHomeService', title?: string | null, url?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, subs?: Array<{ __typename?: 'ComponentHomeHomeSubService', title?: string | null, url?: string | null } | null> | null } | null> | null, lookups?: Array<{ __typename?: 'ComponentHomeHomeLookup', title?: string | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null, contacts?: Array<{ __typename?: 'ComponentHomeServiceContact', name?: string | null, phone?: string | null } | null> | null, partners?: Array<{ __typename?: 'ComponentHomeHomePartner', image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null> | null } | null }> } | null };


export const GetHomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHome"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"abouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_plus"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"detail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"home_tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lookups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"partners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHomeQuery, GetHomeQueryVariables>;