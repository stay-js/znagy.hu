import type { Viewport } from 'next/types';
import { Geist } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '~/components/ui/sonner';
import { Navigation } from '~/components/navigation';

import '~/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
};

const geist = Geist({
  subsets: ['latin-ext'],
  variable: '--font-geist-sans',
});

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => (
  <html lang="en" className={`${geist.variable} scroll-smooth`} suppressHydrationWarning>
    <body className="overflow-x-hidden antialiased">
      <ThemeProvider
        storageKey="theme"
        defaultTheme="dark"
        attribute="class"
        enableColorScheme
        disableTransitionOnChange
      >
        <Navigation />

        <main>{children}</main>

        <Toaster position="top-left" />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
