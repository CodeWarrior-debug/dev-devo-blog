/** @type {import('next').NextConfig} */


const nextConfig = {
  // experimental: {
  //   fontLoaders: [
  //     { loader: '@next/font/google', options: { subsets: ['latin'] } },
  //   ],
  // },
  reactStrictMode: false,
  // swcMinify: true,

  // images:{
  //   remotePatterns:[
  //     {
  //       protocol:'https',
  //       hostname:"image.tmdb.org",
  //       // port:'',
  //       // pathname:'/account123/**'
  //     }
  //   ]

  // },

  eslint:{
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds:true
  }

  
}

module.exports = nextConfig




