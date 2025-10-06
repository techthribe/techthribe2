/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/chiaka/**", // allow all your Cloudinary images
      },
    ],
  },
};

export default nextConfig;

