import type { MetadataRoute } from 'next';

const routes = ['/', '/links'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: `https://znagy.hu${route}`,
  }));
}
