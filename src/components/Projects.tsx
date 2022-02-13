import Link from 'next/link';
import Image from 'next/image';
import regale from '../assets/images/regale.png';
import anything from '../assets/images/anything.png';
import flappy from '../assets/images/flappy.png';
import calc from '../assets/images/calc.png';

interface Props {}

const Projects: React.FC<Props> = (props) => {
  return (
    <section className="projects content" id="projects">
      <h2 className="section-title">
        <span className="section-number">2.</span>Projects
      </h2>
      <div className="projects-container">
        <article className="project">
          <Link href="https://regale.vercel.app/">
            <a className="project-image" target="_blank">
              <div className="project-image-blur" />
              <Image src={regale} layout="responsive" />
            </a>
          </Link>

          <div className="project-content">
            <h1 className="project-title">REGALE Energy Zrt.</h1>
            <div className="project-description">
              <p>This is my current project.</p>
              <p>A company website for REGALE Energy Zrt.</p>
              <p>
                Single page web app built using{' '}
                <Link href="https://nextjs.org/">
                  <a target="_blank" className="link">
                    Next.js
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://sass-lang.com/">
                  <a target="_blank" className="link">
                    Sass
                  </a>
                </Link>
                .
              </p>
            </div>
            <ul className="project-tools no-list-style">
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Vercel</li>
              <li>Express</li>
              <li>Nodemailer</li>
              <li>Heroku</li>
            </ul>
          </div>
        </article>

        <article className="project">
          <Link href="https://anything.stayy.xyz">
            <a target="_blank" className="project-image order-2">
              <div className="project-image-blur" />
              <Image src={anything} layout="responsive" />
            </a>
          </Link>

          <div className="project-content">
            <h1 className="project-title">Anything</h1>
            <div className="project-description">
              <p>
                A Discord BOT build back in 2020, with{' '}
                <Link href="https://www.javascript.com/">
                  <a target="_blank" className="link">
                    JavaScript
                  </a>
                </Link>
                , and{' '}
                <Link href="https://discord.js.org/">
                  <a target="_blank" className="link">
                    Discord.js
                  </a>
                </Link>
                .
              </p>
              <p>
                All 70+ commands are listed on the website, which is built with
                plain HTML and CSS.
              </p>
              <p>
                Later on I&rsquo;ll transfer the BOT from{' '}
                <Link href="https://www.javascript.com/">
                  <a target="_blank" className="link">
                    JavaScript
                  </a>
                </Link>{' '}
                to{' '}
                <Link href="https://www.typescriptlang.org/">
                  <a target="_blank" className="link">
                    TypeScript
                  </a>
                </Link>
                , update to the latest version of{' '}
                <Link href="https://discord.js.org/">
                  <a target="_blank" className="link">
                    Discord.js
                  </a>
                </Link>
                , and maybe I&rsquo;ll open source the project.
              </p>
            </div>
            <ul className="project-tools no-list-style">
              <li>JavaScript</li>
              <li>Discord.js</li>
              <li>Heroku</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Netlify</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
