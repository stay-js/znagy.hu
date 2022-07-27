import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => (
  <section className="relative mb-20 content" id="projects">
    <SectionTitle title="Projects" number={2} />

    <div className="flex flex-col gap-16 item">
      <article>
        <div className="flex text-gray-400">
          <h1>Todo App</h1>
          <Link href="https://github.com/stay-js/todo">
            <a
              target="_blank"
              className="flex items-center ml-3 transition-colors hover:text-green-500"
            >
              <FaGithub />
            </a>
          </Link>
          <Link href="https://todo.znagy.hu/">
            <a
              target="_blank"
              className="flex items-center ml-3 transition-colors hover:text-green-500"
            >
              <FaExternalLinkAlt />
            </a>
          </Link>
        </div>

        <div className="p-4 my-4 bg-slate-700 rounded max-w-[60ch]">
          <p className="m-0">Simple Todo App with GitHub authentication.</p>
          <p className="m-0">
            Front-end:{' '}
            <Link href="https://nextjs.org/">
              <a target="_blank" className="link">
                Next.js
              </a>
            </Link>
            ,{' '}
            <Link href="https://tailwindcss.com/">
              <a target="_blank" className="link">
                Tailwind CSS
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://mantine.dev/">
              <a target="_blank" className="link">
                Mantine
              </a>
            </Link>
            .
          </p>
          <p className="m-0">
            Back-end:{' '}
            <Link href="https://trpc.io/">
              <a target="_blank" className="link">
                tRPC
              </a>
            </Link>
            ,{' '}
            <Link href="https://next-auth.js.org">
              <a target="_blank" className="link">
                NextAuth.js
              </a>
            </Link>
            ,{' '}
            <Link href="https://planetscale.com">
              <a target="_blank" className="link">
                PlanetScale
              </a>
            </Link>{' '}
            (MySQL) and{' '}
            <Link href="https://www.prisma.io/">
              <a target="_blank" className="link">
                Prisma
              </a>
            </Link>
            , running on{' '}
            <Link href="https://vercel.com/docs/concepts/functions/serverless-functions">
              <a target="_blank" className="link">
                Vercel Serverless
              </a>
            </Link>{' '}
            (/api).
          </p>
        </div>
        <ul className="flex gap-4 text-gray-400 text-[0.8rem] flex-wrap max-w-[70ch] font-mono">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Mantine</li>
          <li>tRPC</li>
          <li>NextAuth.js</li>
          <li>MySQL</li>
          <li>Prisma</li>
          <li>Vercel</li>
        </ul>
      </article>

      <article>
        <div className="flex text-gray-400">
          <h1>Stay Random</h1>
          <Link href="https://github.com/stay-js/random">
            <a
              target="_blank"
              className="flex items-center ml-3 transition-colors hover:text-green-500"
            >
              <FaGithub />
            </a>
          </Link>
          <Link href="https://random.znagy.hu/">
            <a
              target="_blank"
              className="flex items-center ml-3 transition-colors hover:text-green-500"
            >
              <FaExternalLinkAlt />
            </a>
          </Link>
        </div>

        <div className="p-4 my-4 bg-slate-700 rounded max-w-[60ch]">
          <p className="m-0">Random Generator (CUID, GUID, UUID, Number, Color, etc.).</p>
          <p className="m-0">
            Front-end:{' '}
            <Link href="https://nextjs.org/">
              <a target="_blank" className="link">
                Next.js
              </a>
            </Link>
            ,{' '}
            <Link href="https://tailwindcss.com/">
              <a target="_blank" className="link">
                Tailwind CSS
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://mantine.dev/">
              <a target="_blank" className="link">
                Mantine
              </a>
            </Link>
            .
          </p>
        </div>
        <ul className="flex gap-4 text-gray-400 text-[0.8rem] flex-wrap max-w-[70ch] font-mono">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Mantine</li>
          <li>Vercel</li>
        </ul>
      </article>

      <article>
        <div className="flex text-gray-400">
          <h1>Portfolio (znagy.hu)</h1>
          <Link href="https://github.com/stay-js/stay">
            <a
              target="_blank"
              className="flex items-center ml-3 transition-colors hover:text-green-500"
            >
              <FaGithub />
            </a>
          </Link>
          <Link href="https://znagy.hu/">
            <a
              target="_blank"
              className="flex items-center ml-3 transition-colors hover:text-green-500"
            >
              <FaExternalLinkAlt />
            </a>
          </Link>
        </div>

        <div className="p-4 my-4 bg-slate-700 rounded max-w-[60ch]">
          <p className="m-0">Simple portfolio website.</p>
          <p className="m-0">
            Front-end:{' '}
            <Link href="https://nextjs.org/">
              <a target="_blank" className="link">
                Next.js
              </a>
            </Link>
            ,{' '}
            <Link href="https://tailwindcss.com/">
              <a target="_blank" className="link">
                Tailwind CSS
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://mantine.dev/">
              <a target="_blank" className="link">
                Mantine
              </a>
            </Link>
            .
          </p>
          <p className="m-0">
            Back-end:{' '}
            <Link href="https://trpc.io/">
              <a target="_blank" className="link">
                tRPC
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://nodemailer.com/">
              <a target="_blank" className="link">
                Nodemailer
              </a>
            </Link>
            , running on{' '}
            <Link href="https://vercel.com/docs/concepts/functions/serverless-functions">
              <a target="_blank" className="link">
                Vercel Serverless
              </a>
            </Link>{' '}
            (/api).
          </p>
        </div>
        <ul className="flex gap-4 text-gray-400 text-[0.8rem] flex-wrap max-w-[70ch] font-mono">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Mantine</li>
          <li>tRPC</li>
          <li>Nodemailer</li>
          <li>Vercel</li>
        </ul>
      </article>

      <article>
        <div className="flex text-gray-400">
          <h1>Anything</h1>
          <Link href="https://anything.znagy.hu/">
            <a
              target="_blank"
              className="flex items-center ml-3 transition-colors hover:text-green-500"
            >
              <FaExternalLinkAlt />
            </a>
          </Link>
        </div>

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
        <ul className="flex gap-4 text-gray-400 text-[0.8rem] flex-wrap max-w-[70ch] font-mono">
          <li>JavaScript</li>
          <li>Discord.js</li>
          <li>Heroku</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Netlify</li>
        </ul>
      </article>

      <article>
        <div className="flex text-gray-400">
          <h1>REGALE Energy Zrt.</h1>
        </div>

        <div className="p-4 my-4 bg-slate-700 rounded max-w-[60ch]">
          <p className="m-0">
            This is my current project. (I&rsquo;ll publish the link when it&rsquo;s done.)
          </p>
          <p className="m-0">A company website for REGALE Energy Zrt.</p>
          <p className="m-0">
            Front-end:{' '}
            <Link href="https://nextjs.org/">
              <a target="_blank" className="link">
                Next.js
              </a>
            </Link>
            ,{' '}
            <Link href="https://tailwindcss.com/">
              <a target="_blank" className="link">
                Tailwind CSS
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://mantine.dev/">
              <a target="_blank" className="link">
                Mantine
              </a>
            </Link>
            .
          </p>
          <p className="m-0">
            Back-end:{' '}
            <Link href="https://trpc.io/">
              <a target="_blank" className="link">
                tRPC
              </a>
            </Link>
            ,{' '}
            <Link href="https://nodemailer.com/">
              <a target="_blank" className="link">
                Nodemailer
              </a>
            </Link>
            ,{' '}
            <Link href="https://planetscale.com">
              <a target="_blank" className="link">
                PlanetScale
              </a>
            </Link>{' '}
            (MySQL) and{' '}
            <Link href="https://www.prisma.io/">
              <a target="_blank" className="link">
                Prisma
              </a>
            </Link>
            , running on{' '}
            <Link href="https://vercel.com/docs/concepts/functions/serverless-functions">
              <a target="_blank" className="link">
                Vercel Serverless
              </a>
            </Link>{' '}
            (/api).
          </p>
        </div>
        <ul className="flex gap-4 text-gray-400 text-[0.8rem] flex-wrap max-w-[70ch] font-mono">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Mantine</li>
          <li>tRPC</li>
          <li>Nodemailer</li>
          <li>MySQL</li>
          <li>Prisma</li>
          <li>Vercel</li>
        </ul>
      </article>
    </div>
  </section>
);

export default Projects;
