/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ini akan menyuruh Vercel mengabaikan error ESLint saat deploy
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;