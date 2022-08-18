import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => (
  <section className="relative mb-20 content" id="projects">
    <SectionTitle title="Projects" number={2} />

    <div className="flex flex-col gap-16 item">
      {[
        {
          title: 'Todo App',
          url: 'https://todo.znagy.hu/',
          github: 'https://github.com/stay-js/todo',
          desc: (
            <>
              <p className="text-neutral-200 mb-0">Simple Todo App with GitHub authentication.</p>
              <p className="text-neutral-200 mb-0">
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
              <p className="text-neutral-200 mb-0">
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
            'Mantine',
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
              <p className="text-neutral-200 mb-0">
                Random Generator (CUID, GUID, UUID, Number, Color, etc.).
              </p>
              <p className="text-neutral-200 mb-0">
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
            </>
          ),
          tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Mantine', 'Vercel'],
        },
        {
          title: 'Portfolio (znagy.hu)',
          url: 'https://znagy.hu/',
          github: 'https://github.com/stay-js/stay',
          desc: (
            <>
              <p className="text-neutral-200 mb-0">Simple portfolio website.</p>
              <p className="text-neutral-200 mb-0">
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
              <p className="text-neutral-200 mb-0">
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
              <p className="text-neutral-200 mb-0">
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
              <p className="text-neutral-200 mb-0">
                All 70+ commands are listed on the website, which is built with plain HTML5 and
                CSS3.
              </p>
              <p className="text-neutral-200 mb-0">
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
            'Vite',
            'HTML5',
            'Tailwind CSS',
            'Netlify',
          ],
        },
        {
          title: 'REGALE Energy Zrt.',
          desc: (
            <>
              <p className="text-neutral-200 mb-0">
                This is my current project. (I&rsquo;ll publish the link when it&rsquo;s done.)
              </p>
              <p className="text-neutral-200 mb-0">A company website for REGALE Energy Zrt.</p>
              <p className="text-neutral-200 mb-0">
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
              <p className="text-neutral-200 mb-0">
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
            <h1 className="text-lg font-semibold dark:text-neutral-200 text-neutral-800">
              {title}
            </h1>

            {github && (
              <Link href={github}>
                <a
                  target="_blank"
                  className="flex items-center ml-3 transition-colors hover:text-green-500"
                >
                  <FaGithub />
                </a>
              </Link>
            )}

            {url && (
              <Link href={url}>
                <a
                  target="_blank"
                  className="flex items-center ml-3 transition-colors hover:text-green-500"
                >
                  <FaExternalLinkAlt />
                </a>
              </Link>
            )}
          </div>

          <div className="p-4 my-4 bg-slate-700 rounded max-w-[60ch]">{desc}</div>

          <ul className="flex gap-4 text-[0.8rem] flex-wrap max-w-[70ch] text-neutral-600 dark:text-neutral-300 font-mono">
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
