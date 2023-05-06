import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '@components/Navigation';
import { ScrollTop } from '@components/ScrollTop';
import { ReactQueryWrapper } from '@components/ReactQueryWrapper';

import '@styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
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
