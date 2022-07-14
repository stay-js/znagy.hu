import Link from 'next/link';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => (
  <section className="relative min-h-[60ch] mb-20 content" id="projects">
    <SectionTitle title="Projects" number={2} />

    <div className="flex flex-col gap-16">
      <article>
        <a className="text-gray-400">
          <h1>
            REGALE Energy Zrt.
            <i className="ml-3 transition-colors hover:text-green-500 fa-solid fa-arrow-up-right-from-square" />
          </h1>
        </a>

        <div className="p-4 my-4 bg-slate-700 rounded max-w-[60ch]">
          <p className="m-0">
            This is my current project. (I&rsquo;ll publish the link when it&rsquo;s done.)
          </p>
          <p className="m-0">A company website for REGALE Energy Zrt.</p>
          <p className="m-0">
            Front-end built with{' '}
            <Link href="https://nextjs.org/">
              <a target="_blank" className="link">
                Next.js
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://tailwindcss.com">
              <a target="_blank" className="link">
                Tailwind CSS
              </a>
            </Link>
            .
          </p>
          <p className="m-0">
            Back-end built using{' '}
            <Link href="https://expressjs.com/">
              <a target="_blank" className="link">
                Express
              </a>
            </Link>
            ,{' '}
            <Link href="https://nodemailer.com/">
              <a target="_blank" className="link">
                Nodemailer
              </a>
            </Link>
            ,{' '}
            <Link href="https://www.mongodb.com/">
              <a target="_blank" className="link">
                MondoDB
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://www.prisma.io">
              <a target="_blank" className="link">
                Prisma
              </a>
            </Link>
            .
          </p>
        </div>
        <ul className="flex gap-4 text-gray-400 text-[0.8rem] flex-wrap max-w-[75ch] font-mono">
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Vercel</li>
          <li>Express</li>
          <li>Nodemailer</li>
          <li>Prisma</li>
          <li>Linode</li>
          <li>Ubuntu</li>
        </ul>
      </article>

      <article>
        <Link href="https://anything.znagy.hu/">
          <a target="_blank" className="text-gray-400">
            <h1>
              Anything
              <i className="ml-3 transition-colors hover:text-green-500 fa-solid fa-arrow-up-right-from-square" />
            </h1>
          </a>
        </Link>

        <div className="p-4 my-4 bg-slate-700 rounded max-w-[60ch]">
          <p className="m-0">
            A Discord BOT build back in 2020, with{' '}
            <Link href="https://discord.js.org/">
              <a target="_blank" className="link">
                Discord.js
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://www.mongodb.com/">
              <a target="_blank" className="link">
                MondoDB
              </a>
            </Link>
            .
          </p>
          <p className="m-0">
            All 70+ commands are listed on the website, which is built with plain HTML5 and CSS3.
          </p>
          <p className="m-0">
            Later on I&rsquo;ll migrate the BOT from{' '}
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
        <ul className="flex gap-4 text-gray-400 text-[0.8rem] flex-wrap max-w-[75ch] font-mono">
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

export default Projects;
