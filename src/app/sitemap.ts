import type { MetadataRoute } from 'next';

const routes = ['', '/contact', '/resume', '/setup'];

const sitemap = (): MetadataRoute.Sitemap => {
  return routes.map((route) => ({
    url: `https://znagy.hu${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
};

export default sitemap;
