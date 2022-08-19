import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => (
  <section className="content relative mb-20" id="projects">
    <SectionTitle title="Projects" number={2} />

    <div className="item flex flex-col gap-16">
      {[
        {
          title: 'Todo App',
          url: 'https://todo.znagy.hu/',
          github: 'https://github.com/stay-js/todo',
          desc: (
            <>
              <p className="mb-0 text-neutral-200">Simple Todo App with GitHub authentication.</p>
              <p className="mb-0 text-neutral-200">
                Front-end:{' '}
                <Link href="https://nextjs.org/">
                  <a target="_blank" className="link">
                    Next.js
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/">
                  <a target="_blank" className="link">
                    Tailwind CSS
                  </a>
                </Link>
                .
              </p>
              <p className="mb-0 text-neutral-200">
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
            </>
          ),
          tags: [
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
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
              <p className="mb-0 text-neutral-200">
                Random Generator (CUID, GUID, UUID, Number, Color, etc.).
              </p>
              <p className="mb-0 text-neutral-200">
                Front-end:{' '}
                <Link href="https://nextjs.org/">
                  <a target="_blank" className="link">
                    Next.js
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/">
                  <a target="_blank" className="link">
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
              <p className="mb-0 text-neutral-200">Simple portfolio website.</p>
              <p className="mb-0 text-neutral-200">
                Front-end:{' '}
                <Link href="https://nextjs.org/">
                  <a target="_blank" className="link">
                    Next.js
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/">
                  <a target="_blank" className="link">
                    Tailwind CSS
                  </a>
                </Link>
                .
              </p>
              <p className="mb-0 text-neutral-200">
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
            </>
          ),
          tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'tRPC', 'Nodemailer', 'Vercel'],
        },
        {
          title: 'Anything',
          url: 'https://anything.znagy.hu/',
          desc: (
            <>
              <p className="mb-0 text-neutral-200">
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
              <p className="mb-0 text-neutral-200">
                All 70+ commands are listed on the website, which is built with{' '}
                <Link href="https://astro.build/">
                  <a target="_blank" className="link">
                    Astro
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/">
                  <a target="_blank" className="link">
                    Tailwind CSS
                  </a>
                </Link>
                .
              </p>
              <p className="mb-0 text-neutral-200">
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
              <p className="mb-0 text-neutral-200">
                This is my current project. (I&rsquo;ll publish the link when it&rsquo;s done.)
              </p>
              <p className="mb-0 text-neutral-200">A company website for REGALE Energy Zrt.</p>
              <p className="mb-0 text-neutral-200">
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
              <p className="mb-0 text-neutral-200">
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
            </>
          ),
          tags: [
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Mantine',
            'tRPC',
            'Nodemailer',
            'MySQL',
            'Prisma',
            'Vercel',
          ],
        },
      ].map(({ title, url, github, desc, tags }) => (
        <article key={url}>
          <div className="flex">
            <h1 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              {title}
            </h1>

            {github && (
              <Link href={github}>
                <a
                  target="_blank"
                  className="ml-3 flex items-center transition-colors hover:text-green-500"
                >
                  <FaGithub />
                </a>
              </Link>
            )}

            {url && (
              <Link href={url}>
                <a
                  target="_blank"
                  className="ml-3 flex items-center transition-colors hover:text-green-500"
                >
                  <FaExternalLinkAlt />
                </a>
              </Link>
            )}
          </div>

          <div className="my-4 max-w-[60ch] rounded bg-slate-700 p-4 font-medium">{desc}</div>

          <ul className="flex max-w-[70ch] flex-wrap gap-4 font-mono text-[0.8rem] text-neutral-600 dark:text-neutral-300">
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
