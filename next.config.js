/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "localhost", "inwebsale-events-prod.vercel.app"],
  },
  output: "export"
};

module.exports = nextConfig;
