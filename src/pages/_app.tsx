import type { AppRouter } from '@server/router';
import type { AppType } from 'next/dist/shared/lib/utils';
import { withTRPC } from '@trpc/next';
import superjson from 'superjson';
import Navigation from '@components/Navigation';
import ScrollTop from '@components/ScrollTop';
import { env } from '@env/client.mjs';
import '@styles/globals.css';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <ScrollTop />
    <Navigation />
    <Component {...pageProps} />
  </>
);

export default withTRPC<AppRouter>({
  config() {
    const url = env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      transformer: superjson,
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  ssr: false,
})(App);
