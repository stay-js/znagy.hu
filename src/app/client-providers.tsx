'use client';

import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const NextThemesWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider
    storageKey="theme"
    defaultTheme="system"
    attribute="class"
    enableColorScheme
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60,
      refetchOnWindowFocus: false,
    },
  },
});

const ReactQueryWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <NextThemesWrapper>
    <ReactQueryWrapper>{children}</ReactQueryWrapper>
  </NextThemesWrapper>
);
