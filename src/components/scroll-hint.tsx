'use client';

import { ChevronDown } from 'lucide-react';

import { useIsScrolled } from '~/hooks/use-is-scrolled';
import { cn } from '~/lib/utils';

export function ScrollHint() {
  const isScrolled = useIsScrolled();

  return (
    <div
      className={cn(
        'absolute bottom-5 flex w-full animate-bounce justify-center transition-opacity duration-500 sm:bottom-10',
        !isScrolled ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <span className="sr-only">Scroll down</span>
      <ChevronDown className="text-muted-foreground size-5" />
    </div>
  );
}
