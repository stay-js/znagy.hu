'use client';

import { ThemeProvider } from 'next-themes';

export const NextThemesWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
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
