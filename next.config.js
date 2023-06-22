/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
};

module.exports = {
  nextConfig,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
