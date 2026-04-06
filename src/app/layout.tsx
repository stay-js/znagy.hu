import '~/styles/globals.css';

import type { Viewport } from 'next/types';

import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';

import { Navigation } from '~/components/navigation';
import { ThemeProvider } from '~/components/theme-provider';
import { Toaster } from '~/components/ui/sonner';
import { cn } from '~/lib/utils';

export const viewport: Viewport = {
  colorScheme: 'dark light',
  initialScale: 1,
  width: 'device-width',
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
      className={cn(fontMono.variable, 'font-sans', fontSans.variable)}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden antialiased">
        <ThemeProvider>
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
