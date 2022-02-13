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
              <p>Single page web app built using Next.js and Sass.</p>
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
            <a className="project-image order-2" target="_blank">
              <div className="project-image-blur" />
              <Image src={anything} layout="responsive" />
            </a>
          </Link>

          <div className="project-content">
            <h1 className="project-title">REGALE Energy Zrt.</h1>
            <div className="project-description">
              <p>
                This is my current project. A company website for REGALE Energy
                Zrt.
              </p>
              <p>Single page web app built using Next.js and Sass.</p>
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
      </div>
    </section>
  );
};

export default Projects;
