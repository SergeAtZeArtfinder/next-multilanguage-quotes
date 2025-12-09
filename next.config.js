// eslint-disable-next-line @typescript-eslint/no-require-imports
const i18nConfig = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig.i18n,
};

module.exports = nextConfig;
