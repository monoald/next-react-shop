/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    mode: "production",
    disable: false,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
  reactStrictMode: true,
  images: {
    domains: [
    "placeimg.com", 
    "api.lorem.space", 
    "store.storeimages.cdn-apple.com", 
    "w7.pngwing.com", 
    "http2.mlstatic.com",
    "encrypted-tbn0.gstatic.com", 
  ],
  },
});
