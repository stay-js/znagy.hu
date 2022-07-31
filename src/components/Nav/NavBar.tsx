import Link from 'next/link';
import navItems from '../../utils/navItems';
import ThemeToggle from './ThemeToggle';

const NavBar: React.FC = () => (
  <nav className="fixed flex items-center top-0 z-50 w-full h-16 font-sans shadow-md select-none bg-neutral-200 dark:bg-neutral-900">
    <div className="content flex items-center place-content-between">
      <ThemeToggle />

      <ul className="flex">
        {navItems.map(({ id, path, name }) => (
          <li key={id}>
            <Link href={path}>
              <a className="px-3 py-2 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-400 transition-colors">
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default NavBar;
