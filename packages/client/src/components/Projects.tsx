import Link from 'next/link';

interface Props {}

const Projects: React.FC<Props> = (props) => {
  return (
    <section className='projects content' id='projects'>
      <h2 className='section-title'>
        <span className='section-number'>2.</span>Projects
      </h2>
      <div className='projects-container'>
        <article className='project'>
          <a className='project-title'>
            <h1 className='project-title'>
              REGALE Energy Zrt.
              <i className='project-link fa-solid fa-arrow-up-right-from-square' />
            </h1>
          </a>
          <div className='project-description'>
            <p>
              This is my current project. (I&rsquo;ll publish the link when
              it&rsquo;s done.)
            </p>
            <p>A company website for REGALE Energy Zrt.</p>
            <p>
              Single page web app built with{' '}
              <Link href='https://nextjs.org/'>
                <a target='_blank' className='link'>
                  Next.js
                </a>
              </Link>{' '}
              and{' '}
              <Link href='https://sass-lang.com/'>
                <a target='_blank' className='link'>
                  Sass
                </a>
              </Link>
              .
            </p>
            <p>
              Backend server built using{' '}
              <Link href='https://expressjs.com/'>
                <a target='_blank' className='link'>
                  Express
                </a>
              </Link>
              ,{' '}
              <Link href='https://nodemailer.com/'>
                <a target='_blank' className='link'>
                  Nodemailer
                </a>
              </Link>{' '}
              and{' '}
              <Link href='https://www.mongodb.com/'>
                <a target='_blank' className='link'>
                  MondoDB
                </a>
              </Link>
              .
            </p>
          </div>
          <ul className='project-tools'>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Vercel</li>
            <li>Express</li>
            <li>Nodemailer</li>
            <li>DigitalOcean</li>
            <li>Ubuntu</li>
          </ul>
        </article>

        <article className='project'>
          <Link href='https://anything.stayy.xyz/'>
            <a target='_blank' className='project-title'>
              <h1 className='project-title'>
                Anything
                <i className='project-link fa-solid fa-arrow-up-right-from-square' />
              </h1>
            </a>
          </Link>
          <div className='project-description'>
            <p>
              A Discord BOT build back in 2020, with{' '}
              <Link href='https://discord.js.org/'>
                <a target='_blank' className='link'>
                  Discord.js
                </a>
              </Link>{' '}
              and{' '}
              <Link href='https://www.mongodb.com/'>
                <a target='_blank' className='link'>
                  MondoDB
                </a>
              </Link>
              .
            </p>
            <p>
              All 70+ commands are listed on the website, which is built with
              plain HTML5 and CSS3.
            </p>
            <p>
              Later on I&rsquo;ll migrate the BOT from{' '}
              <Link href='https://www.javascript.com/'>
                <a target='_blank' className='link'>
                  JavaScript
                </a>
              </Link>{' '}
              to{' '}
              <Link href='https://www.typescriptlang.org/'>
                <a target='_blank' className='link'>
                  TypeScript
                </a>
              </Link>
              , update to the latest version of{' '}
              <Link href='https://discord.js.org/'>
                <a target='_blank' className='link'>
                  Discord.js
                </a>
              </Link>
              , and maybe I&rsquo;ll open source the project.
            </p>
          </div>
          <ul className='project-tools'>
            <li>JavaScript</li>
            <li>Discord.js</li>
            <li>Heroku</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Netlify</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Projects;
