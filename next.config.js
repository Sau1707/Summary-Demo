/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: env == "development" ? null : "/Summary-Demo"
}

module.exports = nextConfig
