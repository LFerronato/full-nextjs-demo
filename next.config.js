/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: false },
  images: {
    domains: ['media.giphy.com'],
  },
}

module.exports = nextConfig
