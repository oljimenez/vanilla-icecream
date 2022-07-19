const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextTranslate(nextConfig));
// module.exports = withVanillaExtract(nextConfig);
