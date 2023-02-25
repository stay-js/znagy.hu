import '@total-typescript/ts-reset';

import type { AppType } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';
import { Navigation } from '@components/Navigation';
import { ScrollTop } from '@components/ScrollTop';
import { trpc } from '@utils/trpc';

import '@styles/globals.css';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <ScrollTop />
    <Navigation route={useRouter().asPath} />
    <Component {...pageProps} />
  </>
);

export default trpc.withTRPC(App);
