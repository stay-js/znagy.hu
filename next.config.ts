import './src/env.js';

import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        destination: '/#experience',
        permanent: true,
        source: '/resume',
      },
      {
        destination: '/#contact',
        permanent: true,
        source: '/contact',
      },
    ];
  },
};

export default nextConfig;
