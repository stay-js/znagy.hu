import Link from 'next/link';
import Image from 'next/image';
import navItems from '../../utils/navItems';

const NavBar: React.FC = () => (
  <nav className="fixed top-0 z-50 flex items-center w-full h-16 font-sans shadow-md bg-slate-900 place-content-between no-select">
    <div className="ml-6">
      <Link href="/">
        <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:outline outline-1 outline-white outline-offset-1">
          <Image src="/images/me.png" alt="" width={48} height={48} />
        </div>
      </Link>
    </div>
    <ul className="flex gap-4 mr-6">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link href={item.path!}>
            <a
              className={
                item.button
                  ? 'text-white bg-green-500 px-4 py-2 rounded border-solid border-2 border-green-500 hover:text-green-500 hover:bg-transparent transition-all duration-150'
                  : 'text-white hover:text-green-500 duration-150 transition-colors text-sm md:text-base'
              }
            >
              {item.button ? (
                item.name
              ) : (
                <>
                  <span className="mr-1 text-green-500">{item.number}.</span>
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
