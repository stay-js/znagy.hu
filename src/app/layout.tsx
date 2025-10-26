import type { Viewport } from 'next/types';
import { Geist } from 'next/font/google';

import '~/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

const geist = Geist({
  subsets: ['latin-ext'],
  variable: '--font-geist-sans',
});

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => (
  <html lang="en" className={`${geist.variable}`}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
