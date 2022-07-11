import Link from 'next/link';
import style from './Button.module.scss';

interface Props {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ href, children }) => (
  <Link href={href}>
    <a className={style.button}>{children}</a>
  </Link>
);

export default Button;
