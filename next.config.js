/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: false,
  swcMinify: true,





  
}

module.exports = nextConfig




