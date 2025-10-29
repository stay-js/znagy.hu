import type { Metadata } from 'next';
import { keywords } from '~/constants/keywords';

export const createMetadata = ({
  path,
  title,
  absoluteTitle,
  description,
  noIndex,
}: {
  path: string;
  title: string;
  absoluteTitle?: string;
  description: string;
  noIndex?: boolean;
}): Metadata => ({
  metadataBase: new URL('https://znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords: keywords.join(', '),

  title: absoluteTitle ?? `${title} - Zétény Nagy`,
  description,

  applicationName: 'Zétény Nagy',

  robots: noIndex
    ? {
        index: false,
        follow: false,
        'max-video-preview': -1,
        'max-image-preview': 'none',
        'max-snippet': -1,
      }
    : {
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
    images: [
      {
        url: '/me.jpg',
        width: 1024,
        height: 1024,
        alt: 'Zétény Nagy',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary',
    title: absoluteTitle ?? `${title} - Zétény Nagy`,
    description,
    images: ['/me.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
  },
});
