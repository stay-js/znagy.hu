import disableScroll from 'disable-scroll';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TbSun, TbMoon } from 'react-icons/tb';
import navItems from '@utils/navItems';
import useColorScheme from '@utils/useColorScheme';

const Navigation: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [width, setWidth] = useState<number | null>(null);

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

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full select-none items-center bg-neutral-100 shadow dark:bg-neutral-900">
      <div className="content flex items-center justify-between">
        <button
          className="rounded-lg bg-neutral-300 p-2 ring-neutral-400 transition-all hover:ring-2 dark:bg-neutral-600"
          type="button"
          onClick={toggleColorScheme}
          title="Toggle color scheme"
        >
          {colorScheme === 'dark' ? <TbSun size={22} /> : <TbMoon size={22} />}
        </button>

        {!width || width < 1024 ? (
          <>
            <button type="button" className="h-6 w-6" onClick={handleToggle}>
              <span
                className={`${
                  isToggled ? 'rotate-45' : '-translate-y-2'
                } absolute block h-[2px] w-6 bg-current transition-all duration-500`}
              />
              <span
                className={`${
                  isToggled && 'opacity-0'
                } absolute block h-[2px] w-6 bg-current transition-all duration-500`}
              />
              <span
                className={`${
                  isToggled ? '-rotate-45' : 'translate-y-2'
                } absolute block h-[2px] w-6 bg-current transition-all duration-500`}
              />
            </button>

            <ul
              className={`${
                isToggled ? 'left-0' : 'left-[-100%]'
              } fixed top-16 z-10 flex h-screen w-full flex-col gap-8 bg-white px-8 py-4 transition-all duration-500 ease-in-out dark:bg-neutral-900`}
            >
              {navItems.map(({ id, path, name }) => (
                <li key={id}>
                  <Link
                    className="relative flex font-bold text-black after:absolute after:-bottom-4 after:h-[1px] after:w-full after:bg-neutral-300 dark:text-white dark:after:bg-neutral-600"
                    onClick={handleClose}
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className="flex">
            {navItems.map(({ id, path, name }) => (
              <li key={id}>
                <Link
                  className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-800"
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
