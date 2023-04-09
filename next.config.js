/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: false },
  images: {
    domains: ['media.giphy.com', 'cdn.jsdelivr.net'],
  },
}

module.exports = nextConfig
