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
    <nav className="fixed top-0 z-50 flex items-center w-full h-16 font-sans shadow select-none bg-neutral-100 dark:bg-neutral-900">
      <div className="flex items-center place-content-between content">
        <button
          className="p-2 ring-neutral-400 hover:ring-2 rounded-lg bg-neutral-300 dark:bg-neutral-600 transition-all"
          type="button"
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {colorScheme === 'dark' ? <TbSun size={22} /> : <TbMoon size={22} />}
        </button>

        {!width || width < 1024 ? (
          <>
            <button type="button" className="w-6 h-6" onClick={() => setIsToggled(!isToggled)}>
              <span
                className={`${
                  isToggled ? 'rotate-45' : '-translate-y-2'
                } block absolute h-[2px] w-6 bg-current transition-all duration-500`}
              />
              <span
                className={`${
                  isToggled && 'opacity-0'
                } block absolute h-[2px] w-6 bg-current transition-all duration-500`}
              />
              <span
                className={`${
                  isToggled ? '-rotate-45' : 'translate-y-2'
                } block absolute h-[2px] w-6 bg-current transition-all duration-500`}
              />
            </button>

            <ul
              className={`${
                isToggled ? 'left-0' : 'left-[-100%]'
              } flex flex-col px-8 fixed w-full top-16 h-screen z-50 bg-white dark:bg-neutral-900 transition-all duration-500 ease-in-out select-none`}
            >
              {navItems.map(({ id, path, name }) => (
                <li key={id}>
                  <Link href={path}>
                    <a
                      className="relative block w-full mt-8 text-black font-bold dark:text-white dark:after:bg-neutral-600 after:bg-neutral-300 after:block after:w-full after:h-[1px] after:-bottom-4 after:absolute"
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
                  <a className="px-3 py-2 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-300 transition-colors">
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
