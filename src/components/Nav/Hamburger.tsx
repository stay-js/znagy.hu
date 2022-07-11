import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Burger } from '@mantine/core';
import navItems from '../../utils/navItems';

const Hamburger: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleHamburger = () => setIsToggled(!isToggled);
  const closeHamburger = () => setIsToggled(false);

  return (
    <nav className="fixed top-0 z-50 flex items-center w-full h-16 font-sans shadow-md bg-slate-900 place-content-between no-select">
      <div className="ml-6">
        <Link href="/">
          <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:outline outline-1 outline-white outline-offset-1">
            <Image src="/images/me.png" alt="" width={48} height={48} />
          </div>
        </Link>
      </div>

      <Burger className="mr-6" color="white" opened={isToggled} onClick={toggleHamburger} />

      <ul
        className={`${
          isToggled ? 'right-0' : 'right-[-100%]'
        } flex flex-col fixed w-full top-16 h-screen z-50 items-center bg-white transition-all duration-500 ease-in-out no-select`}
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              <a
                className="block mt-8 transition-colors duration-150 hover:text-green-500"
                onClick={() => setIsToggled(false)}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Hamburger;
