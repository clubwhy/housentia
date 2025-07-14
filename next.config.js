/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yourcdn.com'],
  },
  typescript: {
    ignoreBuildErrors: true, // 👈 타입 오류 무시
  },
  eslint: {
    ignoreDuringBuilds: true, // 🔧 빌드 시 ESLint 오류 무시
  },
  // ...other config options...
};

module.exports = nextConfig;