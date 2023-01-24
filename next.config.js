/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This will compile the app to a standalone output
  output: 'standalone',
  experimental: {
    // This will inline critical css
    optimizeCss: true,
    // Who needs legacy browsers, amirite?
    legacyBrowsers: false
  }
}

module.exports = nextConfig
