/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    deviceSizes: [320, 400, 600, 900, 1300, 1400],
    unoptimized: true,
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
