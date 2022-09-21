/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "65.2.80.115",
      "localhost",
      "googleusercontent.com",
      "maps.googleapis.com",
      "chawkbazarapi.redq.io",
      "graph.facebook.com",
      "res.cloudinary.com",
      "s3.amazonaws.com",
      "18.141.64.26",
      "via.placeholder.com",
      "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "picsum.photos",
      "cdninstagram.com",
      "scontent.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
