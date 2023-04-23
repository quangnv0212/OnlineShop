/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-ecom.duthanhduoc.com",
      },
    ],
  },
};

module.exports = nextConfig;
