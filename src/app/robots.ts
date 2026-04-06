import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    host: 'https://znagy.hu',
    rules: [
      {
        allow: '/',
        userAgent: '*',
      },
    ],
    sitemap: 'https://znagy.hu/sitemap.xml',
  };
}
