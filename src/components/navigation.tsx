'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbSun, TbMoon } from 'react-icons/tb';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { navItems } from '~/constants/nav-items';
import { cn } from '~/utils/cn';

const ThemeToggleButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  return (
    <button
      className="rounded-lg bg-neutral-300 p-2 ring-neutral-400 transition hover:ring-2 dark:bg-neutral-600"
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <TbSun size={22} /> : <TbMoon size={22} />}
    </button>
  );
};

export const Navigation: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const pathname = usePathname();

  const handleClose = () => {
    setIsToggled(false);

    document.querySelector('main')?.classList.remove('max-lg:hidden');
  };

  const handleToggle = () => {
    setIsToggled((value) => {
      const main = document.querySelector('main');

      if (value) main?.classList.remove('max-lg:hidden');
      else main?.classList.add('max-lg:hidden');

      return !value;
    });
  };

  return (
    <nav className="sticky top-0 z-10 flex h-16 w-full select-none items-center bg-neutral-100 shadow dark:bg-neutral-900">
      <div className="content flex items-center justify-between">
        <ThemeToggleButton />

        <button
          className="h-6 w-6 lg:hidden"
          title="Toggle Hamburger"
          type="button"
          onClick={handleToggle}
        >
          <span
            className={cn(
              'absolute block h-0.5 w-6 bg-current transition-all duration-300',
              isToggled ? 'rotate-45' : '-translate-y-2',
            )}
          />
          <span
            className={cn(
              'absolute block h-0.5 w-4 bg-current transition-all duration-300',
              isToggled && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'absolute block h-0.5 bg-current transition-all duration-300',
              isToggled ? 'w-6 -rotate-45' : 'w-2 translate-y-2',
            )}
          />
        </button>

        <div
          className={cn(
            'fixed left-0 top-16 h-[calc(100vh-4rem)] w-full overflow-y-auto bg-neutral-100 dark:bg-neutral-900 lg:static lg:flex lg:h-fit lg:w-fit',
            !isToggled && 'hidden',
          )}
        >
          <ul className="content flex flex-col gap-8 pb-20 pt-4 lg:w-fit lg:flex-row lg:gap-1 lg:p-0">
            {navItems.map(({ path, name }) => (
              <li
                key={path}
                className="relative after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-300 dark:after:bg-neutral-600 lg:after:hidden"
              >
                <Link
                  className={cn(
                    'flex items-center gap-2 font-bold text-black transition-colors dark:text-white lg:static lg:rounded-md lg:px-3 lg:py-2 lg:font-medium lg:hover:bg-neutral-300 lg:dark:hover:bg-neutral-800',
                    path !== pathname && 'lg:text-neutral-600 lg:dark:text-neutral-400',
                  )}
                  onClick={handleClose}
                  href={path}
                  {...(path.startsWith('https://') && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {name}
                  {path.startsWith('https://') && <FaExternalLinkAlt />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
