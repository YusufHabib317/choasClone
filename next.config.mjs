/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.chaoscards.co.uk',
        pathname: '/uploads/prod_img/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
