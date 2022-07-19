import Link from 'next/link';

const Button: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href}>
    <a className="mt-8 px-8 py-4 text-green-600 border-[1px] border-green-600 transition-all duration-500 hover:text-slate-900 hover:bg-green-600 w-fit">
      {children}
    </a>
  </Link>
);

export default Button;
