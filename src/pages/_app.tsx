import { Navigation } from '@components/Navigation';
import { ScrollTop } from '@components/ScrollTop';
import { trpc } from '@utils/trpc';
import { Analytics } from '@vercel/analytics/react';
import type { AppType } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';

import '@styles/globals.css';

const App: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Analytics />
      <ScrollTop />
      <Navigation route={router.asPath} />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(App);
