import type { AppType } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { trpc } from '@utils/trpc';
import { Navigation } from '@components/Navigation';
import { ScrollTop } from '@components/ScrollTop';

import '@styles/globals.css';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Analytics />
    <ScrollTop />
    <Navigation route={useRouter().asPath} />
    <Component {...pageProps} />
  </>
);

export default trpc.withTRPC(App);
