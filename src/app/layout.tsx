import type { Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '~/components/navigation';
import { ScrollTop } from '~/components/scroll-top';
import { ClientProviders } from '~/app/client-providers';

import '~/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className="scroll-pt-20 antialiased">
    <body className="overflow-x-hidden bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white">
      <ClientProviders>
        <Analytics />

        <Navigation />
        {children}
        <ScrollTop />
      </ClientProviders>
    </body>
  </html>
);

export default RootLayout;
