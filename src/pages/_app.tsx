import type { AppType } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '@components/Navigation';
import { ScrollTop } from '@components/ScrollTop';

import '@styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60,
      refetchOnWindowFocus: false,
    },
  },
});

const App: AppType = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <Analytics />
    <ScrollTop />
    <Navigation route={useRouter().asPath} />
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
