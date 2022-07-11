import Link from 'next/link';
import Image from 'next/image';
import navItems from '../../../utils/navItems';
import style from './NavBar.module.scss';

const NavBar: React.FC = () => (
  <nav className={style.navigation}>
    <div className={style.logo}>
      <Link href="/">
        <div className={style['logo-image']}>
          <Image src="/images/me.png" alt="" width={48} height={48} />
        </div>
      </Link>
    </div>
    <ul className={style.list}>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link href={item.path!}>
            <a className={item.button ? style.button : style.item}>
              {item.button ? (
                item.name
              ) : (
                <>
                  <span className={style.number}>{item.number}.</span>
                  {item.name}
                </>
              )}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
