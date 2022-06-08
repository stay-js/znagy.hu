import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Burger } from '@mantine/core';
import navItems from '../../../utils/providers/navItems';
import style from './Hamburger.module.scss';

const Hamburger: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHamburger = () => setIsToggled(!isToggled);
  const closeHamburger = () => setIsToggled(false);

  return (
    <>
      <nav className={style.navigation}>
        <div className={style.logo}>
          <Link href="/">
            <div className={style['logo-image']}>
              <Image src="/images/me.png" alt="" width={48} height={48} />
            </div>
          </Link>
        </div>

        <Burger
          className={style.burger}
          color="white"
          opened={isToggled}
          onClick={toggleHamburger}
        />
      </nav>

      <nav>
        <ul className={isToggled ? `${style.hamburger} ${style.active}` : style.hamburger}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>
                <a className={style.item} onClick={closeHamburger}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Hamburger;
