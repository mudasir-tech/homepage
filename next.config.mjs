/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during production builds (like Vercel)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
