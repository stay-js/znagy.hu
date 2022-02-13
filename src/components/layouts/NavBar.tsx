import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import me from '../../assets/images/me.png';

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHamburger = () => setIsToggled(!isToggled);
  const closeHamburger = () => setIsToggled(false);

  return (
    <header>
      <nav className="navigation">
        <div className="navigation-logo">
          <Link href="/">
            <div className="navigation-logo-image">
              <Image src={me} layout="responsive" />
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
            <Link href="/#get-in-touch">
              <a className="navigation-link">Get In Touch</a>
            </Link>
          </li>
          <Link href="/contact">
            <a className="navigation-contact-btn no-dec">Contatct</a>
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

      <nav className="hamburger">
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
            <Link href="/#get-in-touch">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Get In Touch
              </a>
            </Link>
          </li>
          <li className="hamburger-navigation-item">
            <Link href="/contact">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
