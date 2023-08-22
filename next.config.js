const path = require("path");

const withRemoteRefresh = require("next-remote-refresh")({
  paths: [path.resolve(__dirname, "src", "posts")],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withRemoteRefresh(nextConfig);
