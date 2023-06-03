/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vt-logistic-asset.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vtl-cms.grandsways.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./configs/i18n.ts"
);

module.exports = withNextIntl({
  ...nextConfig,
  experimental: { appDir: true },
});
