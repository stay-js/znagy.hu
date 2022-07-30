import Link from 'next/link';
import navItems from '../../utils/navItems';
import ThemeToggle from './ThemeToggle';

const NavBar: React.FC = () => (
  <nav className="fixed flex items-center top-0 z-50 w-full h-16 font-sans shadow-md select-none bg-neutral-200 dark:bg-neutral-900">
    <div className="content flex items-center place-content-between">
      <ThemeToggle />

      <ul className="flex gap-4">
        {navItems.map(({ id, path, button, name }) => (
          <li key={id}>
            <Link href={path}>
              <a
                className={
                  button
                    ? 'bg-green-500 px-4 py-2 rounded border-solid border-2 border-green-500 hover:text-green-500 hover:bg-transparent transition-all duration-150'
                    : 'hover:text-green-500 duration-150 transition-colors text-sm md:text-base'
                }
              >
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
