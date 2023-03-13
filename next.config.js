/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: false,
  swcMinify: true,


  // TODO remove or change images settings
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"image.tmdb.org",
        // port:'',
        // pathname:'/account123/**'
      }
    ]

  },


  
}

module.exports = nextConfig




