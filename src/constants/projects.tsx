import { Anchor } from '~/components/anchor';

export const projects = [
  {
    title: 'REGALE Energy Zrt.',
    url: 'https://www.regale.hu',
    github: null,
    desc: (
      <div className="flex flex-col gap-4">
        <p className="text-neutral-200">A marketing website for REGALE Energy Zrt.</p>
        <div>
          <p className="text-neutral-200">
            Front-end:{' '}
            <Anchor href="https://nextjs.org" target="_blank">
              Next.js
            </Anchor>
            ,{' '}
            <Anchor href="https://tailwindcss.com" target="_blank">
              Tailwind CSS
            </Anchor>
            , and{' '}
            <Anchor href="https://headlessui.com" target="_blank">
              Headless UI
            </Anchor>
            , deployed to{' '}
            <Anchor href="https://vercel.com" target="_blank">
              Vercel
            </Anchor>
            .
          </p>
          <p className="text-neutral-200">
            Back-end:{' '}
            <Anchor href="https://aws.amazon.com/lambda" target="_blank">
              AWS Lambda
            </Anchor>
            ,{' '}
            <Anchor href="https://aws.amazon.com/ses" target="_blank">
              Amazon SES
            </Anchor>
            ,{' '}
            <Anchor href="https://nodemailer.com" target="_blank">
              Nodemailer
            </Anchor>
            ,{' '}
            <Anchor href="https://planetscale.com" target="_blank">
              PlanetScale
            </Anchor>{' '}
            (MySQL),{' '}
            <Anchor href="https://www.prisma.io" target="_blank">
              Prisma
            </Anchor>
            ,{' '}
            <Anchor href="https://upstash.com" target="_blank">
              Upstash
            </Anchor>{' '}
            (Redis), and{' '}
            <Anchor href="https://github.com/upstash/ratelimit" target="_blank">
              Upstash Rate Limiter
            </Anchor>{' '}
            running on{' '}
            <Anchor href="https://aws.amazon.com/lambda" target="_blank">
              AWS Lambda
            </Anchor>
            .
          </p>
        </div>

        <p className="text-neutral-200">Admin Dashboard:</p>
        <div>
          <p className="text-neutral-200">
            Front-end:{' '}
            <Anchor href="https://nextjs.org" target="_blank">
              Next.js
            </Anchor>
            ,{' '}
            <Anchor href="https://tailwindcss.com" target="_blank">
              Tailwind CSS
            </Anchor>
            , and{' '}
            <Anchor href="https://headlessui.com" target="_blank">
              Headless UI
            </Anchor>
            , deployed to{' '}
            <Anchor href="https://vercel.com" target="_blank">
              Vercel
            </Anchor>
            .
          </p>
          <p className="text-neutral-200">
            Back-end:{' '}
            <Anchor href="https://trpc.io" target="_blank">
              tRPC
            </Anchor>
            ,{' '}
            <Anchor href="https://authjs.dev" target="_blank">
              Auth.js
            </Anchor>{' '}
            (NextAuth) ,{' '}
            <Anchor href="https://planetscale.com" target="_blank">
              PlanetScale
            </Anchor>{' '}
            (MySQL), and{' '}
            <Anchor href="https://www.prisma.io" target="_blank">
              Prisma
            </Anchor>
            , running on{' '}
            <Anchor
              href="https://vercel.com/docs/concepts/functions/serverless-functions"
              target="_blank"
            >
              Vercel Serverless
            </Anchor>{' '}
            (Next.js /api).
          </p>
        </div>
      </div>
    ),
    tags: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Headless UI',
      'tRPC',
      'Auth.js',
      'Nodemailer',
      'Amazon SES',
      'MySQL',
      'Prisma',
      'PlanetScale',
      'Vercel',
      'AWS Lambda',
    ],
  },
  {
    title: 'Flashcards App',
    url: 'https://flashcards.znagy.hu',
    github: 'https://github.com/stay-js/flashcards',
    desc: (
      <div className="flex flex-col gap-4">
        <p className="text-neutral-200">
          Quizlet like Flashcards App with{' '}
          <Anchor href="https://github.com" target="_blank">
            GitHub
          </Anchor>{' '}
          authentication.
        </p>

        <div>
          <p className="text-neutral-200">
            Front-end:{' '}
            <Anchor href="https://nextjs.org" target="_blank">
              Next.js
            </Anchor>
            ,{' '}
            <Anchor href="https://tailwindcss.com" target="_blank">
              Tailwind CSS
            </Anchor>
            , and{' '}
            <Anchor href="https://headlessui.com" target="_blank">
              Headless UI
            </Anchor>
            , deployed to{' '}
            <Anchor href="https://vercel.com" target="_blank">
              Vercel
            </Anchor>
            .
          </p>
          <p className="text-neutral-200">
            Back-end:{' '}
            <Anchor href="https://trpc.io" target="_blank">
              tRPC
            </Anchor>
            ,{' '}
            <Anchor href="https://authjs.dev" target="_blank">
              Auth.js
            </Anchor>{' '}
            (NextAuth) ,{' '}
            <Anchor href="https://planetscale.com" target="_blank">
              PlanetScale
            </Anchor>{' '}
            (MySQL), and{' '}
            <Anchor href="https://www.prisma.io" target="_blank">
              Prisma
            </Anchor>
            , running on{' '}
            <Anchor
              href="https://vercel.com/docs/concepts/functions/serverless-functions"
              target="_blank"
            >
              Vercel Serverless
            </Anchor>{' '}
            (Next.js /api).
          </p>
        </div>
      </div>
    ),
    tags: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Headless UI',
      'tRPC',
      'Auth.js',
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
          Made with{' '}
          <Anchor href="https://nextjs.org" target="_blank">
            Next.js
          </Anchor>
          , and{' '}
          <Anchor href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </Anchor>
          , deployed to{' '}
          <Anchor href="https://vercel.com" target="_blank">
            Vercel
          </Anchor>
          .
        </p>
      </>
    ),
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Todo App',
    url: 'https://todo.znagy.hu',
    github: 'https://github.com/stay-js/todo',
    desc: (
      <div className="flex flex-col gap-4">
        <p className="text-neutral-200">
          Simple Todo App with{' '}
          <Anchor href="https://github.com" target="_blank">
            GitHub
          </Anchor>{' '}
          authentication.
        </p>

        <div>
          <p className="text-neutral-200">
            Front-end:{' '}
            <Anchor href="https://nextjs.org" target="_blank">
              Next.js
            </Anchor>
            ,{' '}
            <Anchor href="https://tailwindcss.com" target="_blank">
              Tailwind CSS
            </Anchor>
            , and{' '}
            <Anchor href="https://headlessui.com" target="_blank">
              Headless UI
            </Anchor>
            , deployed to{' '}
            <Anchor href="https://vercel.com" target="_blank">
              Vercel
            </Anchor>
            .
          </p>
          <p className="text-neutral-200">
            Back-end:{' '}
            <Anchor href="https://trpc.io" target="_blank">
              tRPC
            </Anchor>
            ,{' '}
            <Anchor href="https://authjs.dev" target="_blank">
              Auth.js
            </Anchor>{' '}
            (NextAuth) ,{' '}
            <Anchor href="https://planetscale.com" target="_blank">
              PlanetScale
            </Anchor>{' '}
            (MySQL),{' '}
            <Anchor href="https://www.prisma.io" target="_blank">
              Prisma
            </Anchor>
            ,{' '}
            <Anchor href="https://upstash.com" target="_blank">
              Upstash
            </Anchor>{' '}
            (Redis), and{' '}
            <Anchor href="https://github.com/upstash/ratelimit" target="_blank">
              Upstash Rate Limiter
            </Anchor>{' '}
            running on{' '}
            <Anchor
              href="https://vercel.com/docs/concepts/functions/serverless-functions"
              target="_blank"
            >
              Vercel Serverless
            </Anchor>{' '}
            (Next.js /api).
          </p>
        </div>
      </div>
    ),
    tags: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Headless UI',
      'tRPC',
      'Auth.js',
      'MySQL',
      'Prisma',
      'PlanetScale',
      'Vercel',
    ],
  },
  {
    title: 'Portfolio (znagy.hu)',
    url: 'https://znagy.hu',
    github: 'https://github.com/stay-js/stay',
    desc: (
      <div className="flex flex-col gap-4">
        <p className="text-neutral-200">My portfolio website.</p>

        <div>
          <p className="text-neutral-200">
            Front-end:{' '}
            <Anchor href="https://nextjs.org" target="_blank">
              Next.js
            </Anchor>
            ,{' '}
            <Anchor href="https://tailwindcss.com" target="_blank">
              Tailwind CSS
            </Anchor>
            , and{' '}
            <Anchor href="https://headlessui.com" target="_blank">
              Headless UI
            </Anchor>
            , deployed to{' '}
            <Anchor href="https://vercel.com" target="_blank">
              Vercel
            </Anchor>
            .
          </p>
          <p className="text-neutral-200">
            Back-end:{' '}
            <Anchor href="https://nodemailer.com" target="_blank">
              Nodemailer
            </Anchor>
            , and{' '}
            <Anchor href="https://aws.amazon.com/ses" target="_blank">
              Amazon SES
            </Anchor>
            ,{' '}
            <Anchor href="https://upstash.com" target="_blank">
              Upstash
            </Anchor>{' '}
            (Redis), and{' '}
            <Anchor href="https://github.com/upstash/ratelimit" target="_blank">
              Upstash Rate Limiter
            </Anchor>{' '}
            running on{' '}
            <Anchor
              href="https://vercel.com/docs/concepts/functions/serverless-functions"
              target="_blank"
            >
              Vercel Serverless
            </Anchor>{' '}
            (Next.js /api).
          </p>
        </div>
      </div>
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
    title: 'Anything',
    url: 'https://anything.znagy.hu',
    github: null,
    desc: (
      <>
        <p className="text-neutral-200">
          A Discord BOT build back in 2020, with{' '}
          <Anchor href="https://discord.js.org" target="_blank">
            Discord.js
          </Anchor>
          , and{' '}
          <Anchor href="https://www.mongodb.com" target="_blank">
            MondoDB
          </Anchor>
          , currently not deployed, since Heroku free tier died.
        </p>
        <p className="text-neutral-200">
          All 70+ commands are listed on the website, which is built with{' '}
          <Anchor href="https://astro.build" target="_blank">
            Astro
          </Anchor>
          , and{' '}
          <Anchor href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </Anchor>
          , deployed to{' '}
          <Anchor href="https://netlify.com" target="_blank">
            Netlify
          </Anchor>
          .
        </p>
        <p className="text-neutral-200">
          Later on I&rsquo;ll migrate the BOT to{' '}
          <Anchor href="https://www.typescriptlang.org" target="_blank">
            TypeScript
          </Anchor>
          , update to the latest version of{' '}
          <Anchor href="https://discord.js.org" target="_blank">
            Discord.js
          </Anchor>
          , and maybe I&rsquo;ll open source the project.
        </p>
      </>
    ),
    tags: ['JavaScript', 'Discord.js', 'MongoDB', 'Heroku', 'Astro', 'Tailwind CSS', 'Netlify'],
  },
] as const;
