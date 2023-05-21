import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '@components/Navigation';
import { ScrollTop } from '@components/ScrollTop';
import { NextThemesWrapper, ReactQueryWrapper } from '@components/Wrappers';

import '@styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="antialiased">
      <body className="overflow-x-hidden bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white">
        <Analytics />

        <NextThemesWrapper>
          <ReactQueryWrapper>
            <ScrollTop />
            <Navigation />
            {children}
          </ReactQueryWrapper>
        </NextThemesWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
