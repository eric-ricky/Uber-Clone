/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MAPBOX_API_KEY:
      "pk.eyJ1IjoiZXJpY290aWVubyIsImEiOiJjbDg4ZnNoaWExam96M3BzMjBuc3o4bW55In0.sBB0Avk54qUgsfAmknei7g",
  },
};

module.exports = nextConfig;
