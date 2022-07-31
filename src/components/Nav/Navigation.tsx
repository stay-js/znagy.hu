import { useEffect, useState } from 'react';
import { Burger, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import navItems from '../../utils/navItems';

const Navigation: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  if (!width || width < 1024) {
    return (
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
    );
  }

  return (
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
  );
};

export default Navigation;
