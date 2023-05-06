import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://znagy.hu',
  sitemap: 'https://znagy.hu/sitemap.xml',
});

export default robots;
