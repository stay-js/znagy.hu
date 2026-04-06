'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '~/components/ui/button';
import { NAV_ITEMS } from '~/constants/nav-items';
import { useMounted } from '~/hooks/use-mounted';
import { cn } from '~/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'lg:supports-backdrop-filter:bg-background/60 fixed top-0 left-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/95 translate-y-0 border-b backdrop-blur-md'
          : '-translate-y-full bg-transparent',
      )}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <ThemeToggleButton />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Item key={item.href} {...item} />
          ))}
        </nav>

        <button
          className="size-6 cursor-pointer lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          title="Toggle Hamburger"
          type="button"
        >
          <span
            className={cn(
              'absolute block h-0.5 w-6 bg-current transition-all duration-300',
              isMobileMenuOpen ? 'rotate-45' : '-translate-y-2',
            )}
          />
          <span
            className={cn(
              'absolute block h-0.5 w-4 bg-current transition-all duration-300',
              isMobileMenuOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'absolute block h-0.5 bg-current transition-all duration-300',
              isMobileMenuOpen ? 'w-6 -rotate-45' : 'w-2 translate-y-2',
            )}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Item key={item.href} {...item} onClick={() => setIsMobileMenuOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Item({ href, label, onClick }: { onClick?: () => void } & (typeof NAV_ITEMS)[number]) {
  return (
    <Link
      className="text-foreground/70 hover:text-foreground transition-colors"
      href={href}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function ThemeToggleButton() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return <div />;

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      size="icon"
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
      type="button"
      variant="ghost"
    >
      {resolvedTheme === 'dark' ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
    </Button>
  );
}
