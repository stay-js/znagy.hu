import Link from 'next/link';
import style from './Button.module.scss';

interface Props {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => (
  <Link href={props.href}>
    <a className={style.button}>{props.children}</a>
  </Link>
);

export default Button;
