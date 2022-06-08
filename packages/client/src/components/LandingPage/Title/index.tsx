import Link from 'next/link';
import style from './Title.module.scss';

const Title: React.FC = () => (
  <section className={`${style.title} content`}>
    <p className={style['first-paragraph']}>Hi, my name is</p>
    <h1 className={style.name}>Zétény Nagy.</h1>
    <p className={style.content}>Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.</p>
    <ul className={style.links}>
      <li>
        <Link href="https://github.com/stay-js">
          <a target="_blank" className={style.link} title="GitHub">
            <i className="fab fa-github" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/nagy.zeteny.06/">
          <a target="_blank" className={style.link} title="Facebook">
            <i className="fab fa-facebook" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="mailto:nagyzeteny6@gmail.com">
          <a target="_blank" className={style.link} title="E-mail">
            <i className="fas fa-envelope" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/channel/UCEGp1S_QTS3goAVX1cVw-tQ">
          <a target="_blank" className={style.link} title="YouTube">
            <i className="fab fa-youtube" />
          </a>
        </Link>
      </li>
    </ul>
    <Link href="#about">
      <a className={style.button}>More About Me</a>
    </Link>
  </section>
);

export default Title;
