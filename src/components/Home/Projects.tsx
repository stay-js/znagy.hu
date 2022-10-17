import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => (
  <section className="content flex flex-col gap-4" id="projects">
    <SectionTitle title="Projects" number={2} />

    <div className="flex flex-col gap-16">
      {[
        {
          title: 'Todo App',
          url: 'https://todo.znagy.hu/',
          github: 'https://github.com/stay-js/todo',
          desc: (
            <>
              <p className="text-neutral-200">Simple Todo App with GitHub authentication.</p>
              <p className="text-neutral-200">
                Front-end:{' '}
                <Link href="https://nextjs.org/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Next.js
                  </a>
                </Link>
                ,{' '}
                <Link href="https://tailwindcss.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://headlessui.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Headless UI
                  </a>
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Back-end:{' '}
                <Link href="https://trpc.io/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    tRPC
                  </a>
                </Link>
                ,{' '}
                <Link href="https://next-auth.js.org">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    NextAuth.js
                  </a>
                </Link>
                ,{' '}
                <Link href="https://planetscale.com">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    PlanetScale
                  </a>
                </Link>{' '}
                (MySQL) and{' '}
                <Link href="https://www.prisma.io/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Prisma
                  </a>
                </Link>
                , running on{' '}
                <Link href="https://vercel.com/docs/concepts/functions/serverless-functions">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Vercel Serverless
                  </a>
                </Link>{' '}
                (/api).
              </p>
            </>
          ),
          tags: [
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Headless UI',
            'tRPC',
            'NextAuth.js',
            'MySQL',
            'Prisma',
            'Vercel',
          ],
        },
        {
          title: 'Stay Random',
          url: 'https://random.znagy.hu/',
          github: 'https://github.com/stay-js/random',
          desc: (
            <>
              <p className="text-neutral-200">
                Random Generator (CUID, GUID, UUID, Number, Color, etc.).
              </p>
              <p className="text-neutral-200">
                Made with{' '}
                <Link href="https://nextjs.org/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Next.js
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </Link>
                .
              </p>
            </>
          ),
          tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
        },
        {
          title: 'Portfolio (znagy.hu)',
          url: 'https://znagy.hu/',
          github: 'https://github.com/stay-js/stay',
          desc: (
            <>
              <p className="text-neutral-200">Simple portfolio website.</p>
              <p className="text-neutral-200">
                Front-end:{' '}
                <Link href="https://nextjs.org/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Next.js
                  </a>
                </Link>
                ,{' '}
                <Link href="https://tailwindcss.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://headlessui.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Headless UI
                  </a>
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Back-end:{' '}
                <Link href="https://trpc.io/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    tRPC
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://nodemailer.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Nodemailer
                  </a>
                </Link>
                , running on{' '}
                <Link href="https://vercel.com/docs/concepts/functions/serverless-functions">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Vercel Serverless
                  </a>
                </Link>{' '}
                (/api).
              </p>
            </>
          ),
          tags: [
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Headless UI',
            'tRPC',
            'Nodemailer',
            'Vercel',
          ],
        },
        {
          title: 'Flappy Matykusz',
          url: 'https://flappy.znagy.hu/',
          github: 'https://github.com/stay-js/flappy-matykusz',
          desc: (
            <>
              <p className="text-neutral-200">Flappy Matykusz a cheap flappy bird clone...</p>
              <p className="text-neutral-200">
                Made with{' '}
                <Link href="https://vitejs.dev/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Vite
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </Link>
                .
              </p>
            </>
          ),
          tags: ['TypeScript', 'Vite', 'Tailwind CSS', 'Netlify'],
        },
        {
          title: 'Anything',
          url: 'https://anything.znagy.hu/',
          desc: (
            <>
              <p className="text-neutral-200">
                A Discord BOT build back in 2020, with{' '}
                <Link href="https://discord.js.org/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Discord.js
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://www.mongodb.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    MondoDB
                  </a>
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                All 70+ commands are listed on the website, which is built with{' '}
                <Link href="https://astro.build/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Astro
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Later on I&rsquo;ll migrate the BOT from{' '}
                <Link href="https://www.javascript.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    JavaScript
                  </a>
                </Link>{' '}
                to{' '}
                <Link href="https://www.typescriptlang.org/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    TypeScript
                  </a>
                </Link>
                , update to the latest version of{' '}
                <Link href="https://discord.js.org/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Discord.js
                  </a>
                </Link>
                , and maybe I&rsquo;ll open source the project.
              </p>
            </>
          ),
          tags: [
            'JavaScript',
            'Discord.js',
            'MongoDB',
            'Heroku',
            'Astro',
            'Tailwind CSS',
            'Netlify',
          ],
        },
        {
          title: 'REGALE Energy Zrt.',
          desc: (
            <>
              <p className="text-neutral-200">A marketing website for REGALE Energy Zrt.</p>
              <p className="text-neutral-200">
                Front-end:{' '}
                <Link href="https://nextjs.org/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Next.js
                  </a>
                </Link>{' '}
                ,{' '}
                <Link href="https://tailwindcss.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://headlessui.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Headless UI
                  </a>
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Back-end:{' '}
                <Link href="https://trpc.io/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    tRPC
                  </a>
                </Link>
                ,{' '}
                <Link href="https://nodemailer.com/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Nodemailer
                  </a>
                </Link>
                ,{' '}
                <Link href="https://planetscale.com">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    PlanetScale
                  </a>
                </Link>{' '}
                (MySQL) and{' '}
                <Link href="https://www.prisma.io/">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Prisma
                  </a>
                </Link>
                , running on{' '}
                <Link href="https://vercel.com/docs/concepts/functions/serverless-functions">
                  <a className="link" target="_blank" rel="noopener noreferrer">
                    Vercel Serverless
                  </a>
                </Link>{' '}
                (/api).
              </p>
            </>
          ),
          tags: [
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Headless UI',
            'tRPC',
            'Nodemailer',
            'MySQL',
            'Prisma',
            'Vercel',
          ],
        },
      ].map(({ title, url, github, desc, tags }) => (
        <article key={title} className="flex max-w-[60ch] flex-col gap-4">
          <div className="flex gap-3">
            <h1 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              {title}
            </h1>

            {github && (
              <Link href={github}>
                <a
                  target="_blank"
                  className="flex items-center transition-colors hover:text-green-500"
                >
                  <FaGithub />
                </a>
              </Link>
            )}

            {url && (
              <Link href={url}>
                <a
                  target="_blank"
                  className="flex items-center transition-colors hover:text-green-500"
                >
                  <FaExternalLinkAlt />
                </a>
              </Link>
            )}
          </div>

          <div className="rounded bg-slate-700 p-4 font-medium">{desc}</div>

          <ul className="flex flex-wrap gap-4 font-mono text-xs text-neutral-600 dark:text-neutral-300">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
