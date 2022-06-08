import Link from 'next/link';
import Image from 'next/image';
import style from './AboutMe.module.scss';

const AboutMe: React.FC = () => (
  <section className={`${style.about} content`} id="about">
    <h2 className="section-title">
      <span className="section-number">1.</span>
      About Me
    </h2>
    <div className={style.flex}>
      <div className={style['image-container']}>
        <div className={style.image}>
          <Image src="/images/me.png" alt="me" layout="fill" />
        </div>
      </div>
      <div className={style.content}>
        <p>Glad you are here! </p>
        <p>
          My name is Zétény, I&rsquo;m from Hungary. Currently studying in{' '}
          <Link href="http://njszg.hu">
            <a target="_blank" className="link">
              BMSzC Neumann János Informatikai Technikum
            </a>
          </Link>
          .
        </p>
        <p>
          My intrest in development started in 2015. I love doing Kyokushin Karate and Thai-Boxing.
          My favourite subjects are Maths and Chemistry. I want to be a Full Stack web developer
          when I grow up.
        </p>
        <p>Here are a few technologies I have an understanding of:</p>
        <div className={style.technologies}>
          <ul className={style['technologies-list']}>
            <li>
              <Link href="https://www.javascript.com/">
                <a target="_blank" className="link">
                  JavaScript
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.typescriptlang.org/">
                <a target="_blank" className="link">
                  TypeScript
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://nodejs.org/">
                <a target="_blank" className="link">
                  Node.js
                </a>
              </Link>
            </li>
          </ul>
          <ul className={style['technologies-list']}>
            <li>
              <Link href="https://expressjs.com/">
                <a target="_blank" className="link">
                  Express
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://reactjs.org/">
                <a target="_blank" className="link">
                  React
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://nextjs.org/">
                <a target="_blank" className="link">
                  Next.js
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
