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
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  webpack: (config) => {
    // Force a single JS bundle to minimize Edge Requests
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    }
    config.optimization.runtimeChunk = false
    return config
  },
}

module.exports = nextConfig