/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static export
    basePath: '/ramashin',  // Set to your repo name
    assetPrefix: '/ramashin/', // Ensures assets load correctly
  };
  
  module.exports = nextConfig;
  