/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  optimizeFonts: false,
  images: {
    domains: ['assets.acme.com'],
  },
};
