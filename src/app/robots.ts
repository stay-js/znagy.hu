import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  host: 'https://znagy.hu',
  rules: [
    {
      allow: '/',
      userAgent: '*',
    },
  ],
  sitemap: 'https://znagy.hu/sitemap.xml',
});

export default robots;
