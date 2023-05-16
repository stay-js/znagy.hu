import Link from 'next/link';
export const Anchor: React.FC<{
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
  children: React.ReactNode;
}> = ({ href, target, className = '', children }) => (
  <Link
    className={`bg-gradient-to-r from-green-400 to-green-700 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-200 hover:bg-[length:100%_2px] ${className}`}
    href={href}
    target={target}
    {...(target === '_blank' && { rel: 'noopener noreferrer' })}
  >
    {children}
  </Link>
);
