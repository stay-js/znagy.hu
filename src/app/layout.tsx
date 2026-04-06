import '~/styles/globals.css';

import type { Viewport } from 'next/types';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';

import { Toaster } from '~/components/ui/sonner';
import { Navigation } from '~/components/navigation';
import { cn } from '~/lib/utils';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
};

const fontSans = Geist({
  subsets: ['latin-ext'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin-ext'],
  variable: '--font-mono',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(fontMono.variable, 'font-sans', fontSans.variable)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden antialiased">
        <ThemeProvider
          storageKey="theme"
          defaultTheme="dark"
          attribute="class"
          enableColorScheme
          disableTransitionOnChange
        >
          <Navigation />

          <main>
            <Suspense>{children}</Suspense>
          </main>

          <Toaster position="top-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}
