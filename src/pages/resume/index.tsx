import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import style from './Resume.module.scss';

const Resume: NextPage = () => (
  <>
    <Head>
      <title>Resume - Zétény Nagy</title>
      <meta property="og:title" content="Resume - Zétény Nagy" key="title" />
      <meta name="twitter:title" content="Resume - Zétény Nagy" />

      <meta name="url" content="https://znagy.hu/resume" />
      <meta property="og:url" content="https://znagy.hu/resume" />
      <meta property="twitter:url" content="https://znagy.hu/resume" />

      <meta
        name="description"
        content="I consider myself as a Web Developer, but I am interested in
          several areas of IT, eg. Web Development, Data modeling /
          structuring, DevOps, Cloud and Networking."
      />
      <meta
        property="og:description"
        content="I consider myself as a Web Developer, but I am interested in
          several areas of IT, eg. Web Development, Data modeling /
          structuring, DevOps, Cloud and Networking."
      />
      <meta
        name="twitter:description"
        content="I consider myself as a Web Developer, but I am interested in
          several areas of IT, eg. Web Development, Data modeling /
          structuring, DevOps, Cloud and Networking."
      />
    </Head>

    <style jsx global>
      {`
        body {
          background: white;
        }
      `}
    </style>

    <main className={style.resume}>
      <div className="content">
        <section className={style.header}>
          <h1 className={style['header-title']}>Zétény Nagy</h1>
          <Link href="https://github.com/stay-js">
            <a className={`${style['header-link']} link`} target="_blank">
              github.com/stay-js
            </a>
          </Link>
          <p className={style['header-content']}>
            I consider myself as a Web Developer, but I am interested in several areas of IT, eg.
            Web Development, Data modeling / structuring, DevOps, Cloud and Networking.
          </p>
        </section>

        <section>
          <h1 className={style.title}>Skills</h1>
          <div className={style.skills}>
            <div>
              <p>Languages & Libraries</p>
              <ul className="no-list-style">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React</li>
                <li>Express.js</li>
                <li>Sass</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
            </div>
            <div>
              <p>Technologies</p>
              <ul className="no-list-style">
                <li>Node.js</li>
                <li>Yarn</li>
                <li>NPM</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div>
              <p>Platforms</p>
              <ul className="no-list-style">
                <li>DigitalOcean</li>
                <li>Linode</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h1 className={style.title}>Education</h1>
          <div className={style.education}>
            <h3>Elementary School</h3>
            <div>
              <h4>Újlaki Általános Iskola</h4>
              <p>01/09/2013 - 15/06/2021</p>
              <p>
                <b>Address:</b> Ürömi utca 64, 1023, Budapest, Hungary
              </p>
              <Link href="http://ujlaki.ultranet.hu/">
                <a className="link" target="_blank">
                  ujlaki.ultranet.hu
                </a>
              </Link>
            </div>

            <h3>High school</h3>
            <div>
              <h4>BMSzC Neumann János Informatikai Technikum</h4>
              <p> 01/09/2021 - Current</p>
              <p>
                <b>Address:</b> Kerepesi út 124, 1144, Budapest, Hungary
              </p>
              <Link href="http://www.njszki.hu/">
                <a className="link" target="_blank">
                  www.njszki.hu
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h1 className={style.title}>Hobbies</h1>

          <p className={style.hobbies}>
            My hobbies are sports, video games, and of course IT, especially Web Dev.
          </p>
          <p className={style.hobbies}>
            I do Kyokushin Karate (2.kyu - brown belt) since 2013, and I started doing Thai-Boxing
            (Muay Thai) in 2021.
          </p>
        </section>
      </div>
    </main>
  </>
);

export default Resume;
