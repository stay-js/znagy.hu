import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Chips from '@components/Chips';
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
                <Link
                  className="link"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </Link>
                ,{' '}
                <Link
                  className="link"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://headlessui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Headless UI
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Back-end:{' '}
                <Link
                  className="link"
                  href="https://trpc.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tRPC
                </Link>
                ,{' '}
                <Link
                  className="link"
                  href="https://next-auth.js.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NextAuth.js
                </Link>
                ,{' '}
                <Link
                  className="link"
                  href="https://planetscale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PlanetScale
                </Link>{' '}
                (MySQL) and{' '}
                <Link
                  className="link"
                  href="https://www.prisma.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prisma
                </Link>
                , running on{' '}
                <Link
                  className="link"
                  href="https://vercel.com/docs/concepts/functions/serverless-functions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel Serverless
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
                <Link
                  className="link"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
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
                <Link
                  className="link"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </Link>
                ,{' '}
                <Link
                  className="link"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://headlessui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Headless UI
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Back-end:{' '}
                <Link
                  className="link"
                  href="https://trpc.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tRPC
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://nodemailer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nodemailer
                </Link>
                , running on{' '}
                <Link
                  className="link"
                  href="https://vercel.com/docs/concepts/functions/serverless-functions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel Serverless
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
                <Link
                  className="link"
                  href="https://vitejs.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
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
                <Link
                  className="link"
                  href="https://discord.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord.js
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MondoDB
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                All 70+ commands are listed on the website, which is built with{' '}
                <Link
                  className="link"
                  href="https://astro.build/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Astro
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Later on I&rsquo;ll migrate the BOT from{' '}
                <Link
                  className="link"
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript
                </Link>{' '}
                to{' '}
                <Link
                  className="link"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TypeScript
                </Link>
                , update to the latest version of{' '}
                <Link
                  className="link"
                  href="https://discord.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord.js
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
                <Link
                  className="link"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </Link>{' '}
                ,{' '}
                <Link
                  className="link"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </Link>{' '}
                and{' '}
                <Link
                  className="link"
                  href="https://headlessui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Headless UI
                </Link>
                .
              </p>
              <p className="text-neutral-200">
                Back-end:{' '}
                <Link
                  className="link"
                  href="https://trpc.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tRPC
                </Link>
                ,{' '}
                <Link
                  className="link"
                  href="https://nodemailer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nodemailer
                </Link>
                ,{' '}
                <Link
                  className="link"
                  href="https://planetscale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PlanetScale
                </Link>{' '}
                (MySQL) and{' '}
                <Link
                  className="link"
                  href="https://www.prisma.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prisma
                </Link>
                , running on{' '}
                <Link
                  className="link"
                  href="https://vercel.com/docs/concepts/functions/serverless-functions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel Serverless
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
              <Link
                className="flex items-center transition-colors hover:text-green-500"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
            )}

            {url && (
              <Link
                className="flex items-center transition-colors hover:text-green-500"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </Link>
            )}
          </div>

          <div className="rounded bg-slate-700 p-4 font-medium">{desc}</div>

          <ul className="flex flex-wrap gap-y-2 gap-x-3">
            {tags.map((tag) => (
              <Chips key={tag} variant={tag} />
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
