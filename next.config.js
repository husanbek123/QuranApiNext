/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return[{
      source: "/",
      destination: '/surahs',
      permanent: false
    
    }]
  }
};

module.exports = nextConfig;
