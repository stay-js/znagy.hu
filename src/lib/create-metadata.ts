import type { Metadata } from 'next';

import { keywords } from '~/constants/keywords';

export const createMetadata = ({
  absoluteTitle,
  description,
  noIndex,
  path,
  title,
}: {
  absoluteTitle?: string;
  description: string;
  noIndex?: boolean;
  path: string;
  title: string;
}): Metadata => ({
  metadataBase: new URL('https://znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords: keywords.join(', '),

  description,
  title: absoluteTitle ?? `${title} - Zétény Nagy`,

  applicationName: 'Zétény Nagy',

  robots: noIndex
    ? {
        follow: false,
        index: false,
        'max-image-preview': 'none',
        'max-snippet': -1,
        'max-video-preview': -1,
      }
    : {
        follow: true,
        googleBot: {
          follow: true,
          index: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
        index: true,
      },

  openGraph: {
    description,
    images: [
      {
        alt: 'Zétény Nagy',
        height: 1024,
        type: 'image/jpeg',
        url: '/me.jpg',
        width: 1024,
      },
    ],
    locale: 'en-US',
    siteName: 'Zétény Nagy',
    title: absoluteTitle ?? `${title} - Zétény Nagy`,
    type: 'website',
    url: `https://znagy.hu${path}`,
  },

  twitter: {
    card: 'summary',
    description,
    images: ['/me.jpg'],
    title: absoluteTitle ?? `${title} - Zétény Nagy`,
  },

  icons: {
    icon: '/favicon.ico',
  },
});
