// eslint-disable-next-line @typescript-eslint/no-require-imports
const i18nConfig = require('./src/next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig.i18n,
};

module.exports = nextConfig;
