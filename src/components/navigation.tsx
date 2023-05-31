'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import disableScroll from 'disable-scroll';
import { TbSun, TbMoon } from 'react-icons/tb';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { navItems } from '~/constants/nav-items';
import { cn } from '~/utils/cn';

const ThemeToggleButton: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

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
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const pathname = usePathname();

  const handleClose = () => {
    setIsToggled(false);
    disableScroll.off();
  };

  const handleToggle = () => {
    setIsToggled((value) => {
      value ? disableScroll.off() : disableScroll.on();

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
              'absolute block h-0.5 w-6 bg-current transition-all duration-500',
              isToggled ? 'rotate-45' : '-translate-y-2',
            )}
          />
          <span
            className={cn(
              'absolute block h-0.5 w-4 bg-current transition-all duration-500',
              isToggled && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'absolute block h-0.5 bg-current transition-all duration-500',
              isToggled ? 'w-6 -rotate-45' : 'w-2 translate-y-2',
            )}
          />
        </button>

        <div
          className={cn(
            'fixed left-0 top-16 h-screen w-full bg-white py-4 transition duration-500 ease-in-out dark:bg-neutral-900 lg:static lg:flex lg:h-fit lg:w-fit lg:translate-x-0 lg:bg-transparent lg:transition-none',
            !isToggled && 'translate-x-full',
          )}
        >
          <ul className="content flex flex-col gap-8 lg:w-fit lg:flex-row lg:gap-0">
            {navItems.map(({ path, name }) => (
              <li key={path}>
                <Link
                  className={cn(
                    'relative flex items-center gap-2 font-bold text-black transition-colors after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-300 dark:text-white dark:after:bg-neutral-600 lg:static lg:rounded-md lg:px-3 lg:py-2 lg:font-medium lg:after:hidden lg:hover:bg-neutral-300 lg:dark:hover:bg-neutral-800',
                    path !== pathname && 'lg:text-neutral-600 lg:dark:text-neutral-400',
                  )}
                  onClick={handleClose}
                  href={path}
                  {...(path.startsWith('https://') && { target: '_blank' })}
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
