'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import disableScroll from 'disable-scroll';
import { TbSun, TbMoon } from 'react-icons/tb';
import { navItems } from '@constants/navItems';
import { useTheme } from 'next-themes';

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
      if (value) disableScroll.off();
      else disableScroll.on();

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
            className={`${
              isToggled ? 'rotate-45' : '-translate-y-2'
            } absolute block h-0.5 w-6 bg-current transition-all duration-500`}
          />
          <span
            className={`${
              isToggled ? 'opacity-0' : ''
            } absolute block h-0.5 w-4 bg-current transition-all duration-500`}
          />
          <span
            className={`${
              isToggled ? 'w-6 -rotate-45' : 'w-2 translate-y-2'
            } absolute block h-0.5 bg-current transition-all duration-500`}
          />
        </button>

        <div
          className={`${
            !isToggled ? 'translate-x-full' : ''
          } fixed left-0 top-16 h-screen w-full bg-white py-4 transition duration-500 ease-in-out dark:bg-neutral-900 lg:static lg:flex lg:h-16 lg:w-fit lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:transition-none`}
        >
          <ul className="content flex flex-col gap-8 lg:w-fit lg:flex-row lg:gap-0">
            {navItems.map(({ path, name }) => (
              <li key={path}>
                <Link
                  className={`${
                    path !== pathname ? 'lg:text-neutral-600 lg:dark:text-neutral-400' : ''
                  } relative flex font-bold text-black transition-colors after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-300 dark:text-white dark:after:bg-neutral-600 lg:static lg:block lg:rounded-md lg:px-3 lg:py-2 lg:font-medium lg:after:hidden lg:hover:bg-neutral-300 lg:dark:hover:bg-neutral-800`}
                  onClick={handleClose}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
