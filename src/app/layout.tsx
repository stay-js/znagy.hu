import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '~/components/navigation';
import { ScrollTop } from '~/components/scroll-top';
import { ClientProviders } from '~/app/client-providers';

import { TempScrollToTopFix } from '~/app/temp-scroll-to-top-fix';

import '~/styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="scroll-pt-20 antialiased">
      <body className="overflow-x-hidden bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white">
        <Analytics />

        <TempScrollToTopFix />

        <ClientProviders>
          <ScrollTop />
          <Navigation />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
