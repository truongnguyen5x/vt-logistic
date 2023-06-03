import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://vtl-cms.grandsways.com/graphql",
  documents: ["app/**/*.tsx", "graphql/**/*.ts"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
