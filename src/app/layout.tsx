import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '@components/Navigation';
import { ScrollTop } from '@components/ScrollTop';
import { ReactQueryWrapper } from '@components/ReactQueryWrapper';

import '@styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="antialiased">
      <body className="overflow-x-hidden bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white">
        <Analytics />

        <ReactQueryWrapper>
          <ScrollTop />
          <Navigation />
          {children}
        </ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
