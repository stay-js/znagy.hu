/** @type {import("next").NextConfig} */

await import('./src/env/server.mjs');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
