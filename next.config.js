/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export = pre-rendered HTML served from CDN = ZERO serverless compute on Vercel
  output: 'export',

  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  images: {
    // Required for static export (no Next.js image optimization server)
    unoptimized: true,
  },

  // Aggressively disable telemetry & noisy headers
  experimental: {},
}

module.exports = nextConfig