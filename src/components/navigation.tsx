'use client';

import { useState, useEffect } from 'react';
import { Button } from '~/components/ui/button';
import { Moon, Sun, ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '~/lib/utils';
import Link from 'next/link';
import { NAV_ITEMS } from '~/constants/nav-items';

const ThemeToggleButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  return (
    <Button
      size="icon"
      variant="ghost"
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
    </Button>
  );
};

const Item: React.FC<(typeof NAV_ITEMS)[number] & { onClick?: () => void }> = ({
  label,
  href,
  onClick,
}) => (
  <Link
    href={href}
    className="text-foreground/70 hover:text-foreground transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);
export const Navigation: React.FC = () => {
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
      <div className="flex items-center justify-between p-4">
        <ThemeToggleButton />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Item key={item.href} {...item} />
          ))}
        </nav>

        <button
          className="h-6 w-6 cursor-pointer lg:hidden"
          title="Toggle Hamburger"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
        <div className="border-t p-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Item key={item.href} {...item} onClick={() => setIsMobileMenuOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
