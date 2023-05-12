import type { Metadata } from 'next';
import { keywords } from '@constants/keywords';

export const createMetadata = ({
  path,
  title,
  absoluteTitle,
  description,
}: {
  path: string;
  title: string;
  absoluteTitle?: string;
  description: string;
}): Metadata => ({
  metadataBase: new URL('https://znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords: keywords.join(', '),

  title: absoluteTitle ?? `${title} - Zétény Nagy`,
  description,

  applicationName: 'Zétény Nagy',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: `https://znagy.hu${path}`,
    title: absoluteTitle ?? `${title} - Zétény Nagy`,
    description,
    siteName: 'Zétény Nagy',
    locale: 'en-US',
  },

  twitter: {
    card: 'summary',
    title: absoluteTitle ?? `${title} - Zétény Nagy`,
    description,
  },

  icons: {
    icon: '/favicon.ico',
  },
});
