/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetHome($locale: I18NLocaleCode) {\n    homes(locale: $locale) {\n      data {\n        attributes {\n          banners {\n            data {\n              attributes {\n                url\n                previewUrl\n              }\n            }\n          }\n          abouts {\n            is_plus\n            heading\n            subject\n            detail\n          }\n          features {\n            icon {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n          }\n          home_tabs {\n            image {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n          }\n          services {\n            icon {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n            url\n            background {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            subs {\n              title\n              url\n            }\n          }\n          lookups {\n            title\n            background {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n          }\n          contacts {\n            name\n            phone\n          }\n          partners {\n            image {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHome($locale: I18NLocaleCode) {\n    homes(locale: $locale) {\n      data {\n        attributes {\n          banners {\n            data {\n              attributes {\n                url\n                previewUrl\n              }\n            }\n          }\n          abouts {\n            is_plus\n            heading\n            subject\n            detail\n          }\n          features {\n            icon {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n          }\n          home_tabs {\n            image {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n          }\n          services {\n            icon {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n            url\n            background {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            subs {\n              title\n              url\n            }\n          }\n          lookups {\n            title\n            background {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n          }\n          contacts {\n            name\n            phone\n          }\n          partners {\n            image {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetHome($locale: I18NLocaleCode) {\n    homes(locale: $locale) {\n      data {\n        attributes {\n          banners {\n            data {\n              attributes {\n                url\n                previewUrl\n              }\n            }\n          }\n          abouts {\n            is_plus\n            heading\n            subject\n            detail\n          }\n          features {\n            icon {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n          }\n          home_tabs {\n            image {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n          }\n          services {\n            icon {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            title\n            url\n            background {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n            subs {\n              title\n              url\n            }\n          }\n          lookups {\n            title\n            background {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n          }\n          contacts {\n            name\n            phone\n          }\n          partners {\n            image {\n              data {\n                attributes {\n                  url\n                  previewUrl\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;