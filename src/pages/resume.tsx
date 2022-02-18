import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Resume - stay</title>
        <meta property="og:title" content="Resume - stay" />
        <meta name="twitter:title" content="Resume - stay" />

        <meta name="url" content="https://stayy.xyz/resume" />
        <meta property="og:url" content="https://stayy.xyz/resume" />
        <meta property="twitter:url" content="https://stayy.xyz/resume" />

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

      <style jsx global>{`
        body {
          background: white;
        }
      `}</style>

      <main className="resume">
        <div className="content">
          <section className="resume-title">
            <h1 className="resume-title-title">Zétény Nagy</h1>
            <Link href="https://github.com/stay-js">
              <a className="resume-title-link link" target="_blank">
                github.com/stay-js
              </a>
            </Link>
            <p className="resume-title-content">
              I consider myself as a Web Developer, but I am interested in
              several areas of IT, eg. Web Development, Data modeling /
              structuring, DevOps, Cloud and Networking.
            </p>
          </section>

          <section className="resume-skills">
            <h1 className="resume-skills-title">Skills</h1>
            <div className="resume-skills-content">
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
                  <li>MongoDB</li>
                </ul>
              </div>

              <div>
                <p>Platforms</p>
                <ul className="no-list-style">
                  <li>Heroku</li>
                  <li>Netlify</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="resume-education">
            <h1 className="resume-education-title">Education</h1>
            <div className="resume-education-content">
              <h3>Elementary School</h3>
              <div>
                <h4>Újlaki Általános Iskola</h4>
                <p>01/08/2013 - 15/06/2021</p>
                <p>
                  <b>Address:</b> Ürömi utca 64 , 1023, Budapest, Magyarország
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
                  <b>Address:</b> Kerepesi út 124, 1144, Budapest, Magyarország
                </p>
                <Link href="http://www.njszki.hu/">
                  <a className="link" target="_blank">
                    www.njszki.hu
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <section className="resume-hobbies">
            <h1 className="resume-hobbies-title">Hobbies</h1>

            <p className="resume-hobbies-content">
              My hobbies are sports, video games, and of course IT, especially
              Web Dev.
            </p>
            <p className="resume-hobbies-content">
              I do Kyokushin Karate since 2013, and I started doing Thai-Boxing
              in 2020.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
