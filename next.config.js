/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    deviceSizes: [320, 400, 600, 900, 1300, 1400],
    imageSizes: [16, 32, 48, 64, 96, 100, 200, 300, 400, 500, 600, 700, 800],
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "the-wright-designs-website-images.s3.af-south-1.amazonaws.com",
        port: "",
        pathname: "/simone-snoyman-physiotherapy/**",
      },
    ],
  },
};
