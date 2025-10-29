import './src/env.js';

/** @type {import("next").NextConfig} */
const config = {
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

export default config;
