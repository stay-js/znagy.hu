import Image from 'next/image';
import Link from 'next/link';
import navItems from '../../utils/navItems';

const NavBar: React.FC = () => (
  <nav className="fixed top-0 z-50 px-6 flex items-center w-full h-16 font-sans shadow-md select-none bg-slate-900 place-content-between">
    <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:outline outline-1 outline-white outline-offset-1">
      <Link href="/">
        <Image src="/images/me.png" alt="" width={48} height={48} />
      </Link>
    </div>

    <ul className="flex gap-4">
      {navItems.map(({ id, button, path, name, number }) => (
        <li key={id}>
          <Link href={path}>
            <a
              className={
                button
                  ? 'text-white bg-green-500 px-4 py-2 rounded border-solid border-2 border-green-500 hover:text-green-500 hover:bg-transparent transition-all duration-150'
                  : 'text-white hover:text-green-500 duration-150 transition-colors text-sm md:text-base'
              }
            >
              {button ? (
                name
              ) : (
                <>
                  <span className="mr-1 text-green-500">{number}.</span>
                  {name}
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
