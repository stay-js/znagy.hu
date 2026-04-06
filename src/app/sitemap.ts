import type { MetadataRoute } from 'next';

const routes = ['/', '/links'];

const sitemap = (): MetadataRoute.Sitemap => {
  return routes.map((route) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: `https://znagy.hu${route}`,
  }));
};

export default sitemap;
