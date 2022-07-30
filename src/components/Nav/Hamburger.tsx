import { Burger } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import navItems from '../../utils/navItems';
import ThemeToggle from './ThemeToggle';

const Hamburger: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <nav className="fixed top-0 z-50 px-6 flex items-center w-full h-16 font-sans shadow-md select-none bg-neutral-200 dark:bg-neutral-900 place-content-between">
      <ThemeToggle />

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
    </nav>
  );
};

export default Hamburger;
