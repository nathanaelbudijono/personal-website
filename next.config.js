const path = require("path");

const withRemoteRefresh = require("next-remote-refresh")({
  paths: [path.resolve(__dirname, "src", "posts")],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withRemoteRefresh(nextConfig);
