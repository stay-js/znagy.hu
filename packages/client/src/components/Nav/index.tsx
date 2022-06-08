import { useLayoutEffect, useState } from 'react';
import NavBar from './NavBar';
import Hamburger from './Hamburger';

const Nav: React.FC = () => {
  const [width, setWidth] = useState(Number);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  if (width < 1024) return <Hamburger />;

  return <NavBar />;
};

export default Nav;
