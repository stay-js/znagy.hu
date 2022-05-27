import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import navItems from '../../../utils/providers/navItems';
import style from './Hamburger.module.scss';

interface Props {}

const Hamburger: React.FC<Props> = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHamburger = () => setIsToggled(!isToggled);
  const closeHamburger = () => setIsToggled(false);

  return (
    <>
      <nav className={style.navigation}>
        <div className={style.logo}>
          <Link href='/'>
            <div className={style['logo-image']}>
              <Image src='/images/me.png' alt='' width={48} height={48} />
            </div>
          </Link>
        </div>

        <div
          className={isToggled ? style.icon + ' ' + style.active : style.icon}
          onClick={toggleHamburger}
        >
          <span className={style.bar} />
          <span className={style.bar} />
          <span className={style.bar} />
        </div>
      </nav>

      <nav>
        <ul
          className={
            isToggled ? style.hamburger + ' ' + style.active : style.hamburger
          }
        >
          {navItems.map((item, index) => (
            <li key={index} id={index.toString()}>
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
