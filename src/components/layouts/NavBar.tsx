import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {}

const NavBar: React.FC<Props> = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHamburger = () => setIsToggled(!isToggled);
  const closeHamburger = () => setIsToggled(false);

  return (
    <header>
      <nav className="navigation no-select">
        <div className="navigation-logo">
          <Link href="/">
            <div className="navigation-logo-image">
              <Image src="/images/me.png" width={48} height={48} />
            </div>
          </Link>
        </div>
        <ol className="navigation-list">
          <li className="navigation-item">
            <Link href="/#about">
              <a className="navigation-link">About</a>
            </Link>
          </li>
          <li className="navigation-item">
            <Link href="/#projects">
              <a className="navigation-link">Projects</a>
            </Link>
          </li>
          <li className="navigation-item">
            <Link href="/contact">
              <a className="navigation-link">Get In Touch</a>
            </Link>
          </li>
          <Link href="/resume">
            <a className="navigation-btn no-dec">Resume</a>
          </Link>
        </ol>

        <div
          className={isToggled ? 'hamburger-icon active' : 'hamburger-icon'}
          onClick={toggleHamburger}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </nav>

      <nav className="hamburger no-select">
        <ul
          className={
            isToggled
              ? 'hamburger-navigation-list active'
              : 'hamburger-navigation-list'
          }
        >
          <li className="hamburger-navigation-item">
            <Link href="/#about">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                About
              </a>
            </Link>
          </li>
          <li className="hamburger-navigation-item">
            <Link href="/#projects">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Projects
              </a>
            </Link>
          </li>
          <li className="hamburger-navigation-item">
            <Link href="/contact">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Get In Touch
              </a>
            </Link>
          </li>
          <li className="hamburger-navigation-item">
            <Link href="/resume">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Resume
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
