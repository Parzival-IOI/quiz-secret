/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/quiz/export/:path',
        destination: process.env.API + 'api/quiz/export/:path',
      },
    ]
  },
};

export default nextConfig;

