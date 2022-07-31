import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Nav: React.FC = () => (
  <nav className="fixed top-0 z-50 flex items-center w-full h-16 font-sans shadow select-none bg-neutral-100 dark:bg-neutral-900">
    <div className="flex items-center place-content-between content">
      <ThemeToggle />
      <Navigation />
    </div>
  </nav>
);

export default Nav;
