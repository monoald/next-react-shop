/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'store.storeimages.cdn-apple.com'],
  },
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://gndx.dev',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig
