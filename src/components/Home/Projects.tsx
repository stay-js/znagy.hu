import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Chips } from '@components/Chips';
import { SectionTitle } from './SectionTitle';

const Anchor: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
  <Link className="link" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export const Projects: React.FC = () => (
  <section className="content flex flex-col gap-4" id="projects">
    <SectionTitle title="Projects" number={2} />

    <div className="flex flex-col gap-16">
      {[
        {
          title: 'Todo App',
          url: 'https://todo.znagy.hu',
          github: 'https://github.com/stay-js/todo',
          desc: (
            <>
              <p className="text-neutral-200">
                Simple Todo App with <Anchor href="https://github.com">GitHub</Anchor>{' '}
                authentication.
              </p>
              <p className="text-neutral-200">
                Front-end: <Anchor href="https://nextjs.org">Next.js</Anchor>,{' '}
                <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor>, and{' '}
                <Anchor href="https://headlessui.com">Headless UI</Anchor>, deployed to{' '}
                <Anchor href="https://vercel.com">Vercel</Anchor>.
              </p>
              <p className="text-neutral-200">
                Back-end: <Anchor href="https://trpc.io">tRPC</Anchor>,{' '}
                <Anchor href="https://next-auth.js.org">NextAuth.js</Anchor>,{' '}
                <Anchor href="https://planetscale.com">PlanetScale</Anchor> (MySQL), and{' '}
                <Anchor href="https://www.prisma.io">Prisma</Anchor>, running on{' '}
                <Anchor href="https://vercel.com/docs/concepts/functions/serverless-functions">
                  Vercel Serverless
                </Anchor>{' '}
                (Next.js /api).
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
            'PlanetScale',
            'Vercel',
          ],
        },
        {
          title: 'Flashcards App',
          url: 'https://flashcards.znagy.hu',
          github: 'https://github.com/stay-js/flashcards',
          desc: (
            <>
              <p className="text-neutral-200">
                Quizlet like Flashcards App with <Anchor href="https://github.com">GitHub</Anchor>{' '}
                authentication.
              </p>
              <p className="text-neutral-200">
                Front-end: <Anchor href="https://nextjs.org">Next.js</Anchor>,{' '}
                <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor>, and{' '}
                <Anchor href="https://headlessui.com">Headless UI</Anchor>, deployed to{' '}
                <Anchor href="https://vercel.com">Vercel</Anchor>.
              </p>
              <p className="text-neutral-200">
                Back-end: <Anchor href="https://trpc.io">tRPC</Anchor>,{' '}
                <Anchor href="https://next-auth.js.org">NextAuth.js</Anchor>,{' '}
                <Anchor href="https://planetscale.com">PlanetScale</Anchor> (MySQL), and{' '}
                <Anchor href="https://www.prisma.io">Prisma</Anchor>, running on{' '}
                <Anchor href="https://vercel.com/docs/concepts/functions/serverless-functions">
                  Vercel Serverless
                </Anchor>{' '}
                (Next.js /api).
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
            'PlanetScale',
            'Vercel',
          ],
        },
        {
          title: 'Stay Random',
          url: 'https://random.znagy.hu',
          github: 'https://github.com/stay-js/random',
          desc: (
            <>
              <p className="text-neutral-200">
                Random Generator (CUID, GUID, UUID, Number, Color, etc.).
              </p>
              <p className="text-neutral-200">
                Made with <Anchor href="https://nextjs.org">Next.js</Anchor>, and{' '}
                <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor>, deployed to{' '}
                <Anchor href="https://vercel.com">Vercel</Anchor>.
              </p>
            </>
          ),
          tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
        },
        {
          title: 'REGALE Energy Zrt.',
          url: 'https://www.regale.hu',
          desc: (
            <>
              <p className="text-neutral-200">A marketing website for REGALE Energy Zrt.</p>
              <p className="text-neutral-200">
                Front-end: <Anchor href="https://nextjs.org">Next.js</Anchor>,{' '}
                <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor>, and{' '}
                <Anchor href="https://headlessui.com">Headless UI</Anchor>, deployed to{' '}
                <Anchor href="https://netlify.com">Netlify</Anchor>.
              </p>
              <p className="text-neutral-200">
                Back-end: <Anchor href="https://trpc.io">tRPC</Anchor>,{' '}
                <Anchor href="https://nodemailer.com">Nodemailer</Anchor>,{' '}
                <Anchor href="https://aws.amazon.com/ses">Amazon SES</Anchor>,{' '}
                <Anchor href="https://planetscale.com">PlanetScale</Anchor> (MySQL), and{' '}
                <Anchor href="https://www.prisma.io">Prisma</Anchor>, running on{' '}
                <Anchor href="https://www.netlify.com/products/functions">Netlify Functions</Anchor>{' '}
                (Next.js /api) and some back-end functions run on{' '}
                <Anchor href="https://aws.amazon.com/lambda">AWS Lambda</Anchor>.
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
            'Amazon SES',
            'MySQL',
            'Prisma',
            'PlanetScale',
            'Netlify',
            'AWS Lambda',
          ],
        },
        {
          title: 'Portfolio (znagy.hu)',
          url: 'https://znagy.hu',
          github: 'https://github.com/stay-js/stay',
          desc: (
            <>
              <p className="text-neutral-200">My portfolio website.</p>
              <p className="text-neutral-200">
                Front-end: <Anchor href="https://nextjs.org">Next.js</Anchor>,{' '}
                <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor>, and{' '}
                <Anchor href="https://headlessui.com">Headless UI</Anchor>, deployed to{' '}
                <Anchor href="https://vercel.com">Vercel</Anchor>.
              </p>
              <p className="text-neutral-200">
                Back-end: <Anchor href="https://nodemailer.com">Nodemailer</Anchor>, and{' '}
                <Anchor href="https://aws.amazon.com/ses">Amazon SES</Anchor>, running on{' '}
                <Anchor href="https://vercel.com/docs/concepts/functions/serverless-functions">
                  Vercel Serverless
                </Anchor>{' '}
                (Next.js /api).
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
            'Amazon SES',
            'Vercel',
          ],
        },
        {
          title: 'Flappy Matykusz',
          url: 'https://flappy.znagy.hu',
          github: 'https://github.com/stay-js/flappy-matykusz',
          desc: (
            <>
              <p className="text-neutral-200">Flappy Matykusz a cheap flappy bird clone...</p>
              <p className="text-neutral-200">
                Made with <Anchor href="https://vitejs.dev">Vite</Anchor>, and{' '}
                <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor>, deployed to{' '}
                <Anchor href="https://netlify.com">Netlify</Anchor>.
              </p>
            </>
          ),
          tags: ['TypeScript', 'Vite', 'Tailwind CSS', 'Netlify'],
        },
        {
          title: 'Anything',
          url: 'https://anything.znagy.hu',
          desc: (
            <>
              <p className="text-neutral-200">
                A Discord BOT build back in 2020, with{' '}
                <Anchor href="https://discord.js.org">Discord.js</Anchor>, and{' '}
                <Anchor href="https://www.mongodb.com">MondoDB</Anchor>, currently not deployed,
                since Heroku free tier died.
              </p>
              <p className="text-neutral-200">
                All 70+ commands are listed on the website, which is built with{' '}
                <Anchor href="https://astro.build">Astro</Anchor>, and{' '}
                <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor>, deployed to{' '}
                <Anchor href="https://netlify.com">Netlify</Anchor>.
              </p>
              <p className="text-neutral-200">
                Later on I&rsquo;ll migrate the BOT to{' '}
                <Anchor href="https://www.typescriptlang.org">TypeScript</Anchor>, update to the
                latest version of <Anchor href="https://discord.js.org">Discord.js</Anchor>, and
                maybe I&rsquo;ll open source the project.
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
      ].map(({ title, url, github, desc, tags }) => (
        <article key={title} className="flex max-w-[60ch] flex-col gap-4">
          <div className="flex gap-3">
            <h1 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              {title}
            </h1>

            {github && (
              <Link
                className="flex items-center transition-colors hover:text-green-500"
                title={`${title} on GitHub`}
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
                title={`${title} on the web`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </Link>
            )}
          </div>

          <div className="rounded bg-slate-700 p-4 font-medium">{desc}</div>

          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Chips key={tag} variant={tag} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
