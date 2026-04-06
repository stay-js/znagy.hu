import './src/env.js';

import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: '/resume',
        destination: '/#experience',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
