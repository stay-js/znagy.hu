import { Burger, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TbSun, TbMoon } from 'react-icons/tb';
import navItems from '../utils/navItems';

const Navigation: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
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
            <Burger
              color={colorScheme === 'dark' ? 'white' : 'black'}
              opened={isToggled}
              onClick={() => setIsToggled(!isToggled)}
            />

            <ul
              className={`${
                isToggled ? 'right-0' : 'right-[-100%]'
              } flex flex-col fixed w-full top-16 h-screen z-50 items-center bg-white transition-all duration-500 ease-in-out select-none`}
            >
              {navItems.map(({ id, path, name }) => (
                <li key={id}>
                  <Link href={path}>
                    <a
                      className="block mt-8 text-black transition-colors duration-150 hover:text-green-500"
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
