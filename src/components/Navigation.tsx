import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TbSun, TbMoon } from 'react-icons/tb';
import navItems from '@utils/navItems';
import useColorScheme from '@utils/useColorScheme';

const Navigation: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full select-none items-center bg-neutral-100 shadow dark:bg-neutral-900">
      <div className="content flex place-content-between items-center">
        <button
          className="rounded-lg bg-neutral-300 p-2 ring-neutral-400 transition-all hover:ring-2 dark:bg-neutral-600"
          type="button"
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {colorScheme === 'dark' ? <TbSun size={22} /> : <TbMoon size={22} />}
        </button>

        {!width || width < 1024 ? (
          <>
            <button type="button" className="h-6 w-6" onClick={() => setIsToggled(!isToggled)}>
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
              } fixed top-16 z-50 flex h-screen w-full select-none flex-col bg-white px-8 transition-all duration-500 ease-in-out dark:bg-neutral-900`}
            >
              {navItems.map(({ id, path, name }) => (
                <li key={id}>
                  <Link href={path}>
                    <a
                      className="relative mt-8 block w-full font-bold text-black after:absolute after:-bottom-4 after:block after:h-[1px] after:w-full after:bg-neutral-300 dark:text-white dark:after:bg-neutral-600"
                      onClick={() => setIsToggled(false)}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className="flex">
            {navItems.map(({ id, path, name }) => (
              <li key={id}>
                <Link href={path}>
                  <a className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-800">
                    {name}
                  </a>
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
