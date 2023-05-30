import Link from 'next/link';

const Chip: React.FC<{
  children: React.ReactNode;
  color: string;
  href: string;
}> = ({ children, color, href }) => (
  <Link
    className="flex w-fit items-center gap-2 rounded-full border-2 border-current px-4 py-1 ring-current transition hover:bg-neutral-200 hover:ring dark:hover:bg-neutral-800"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color }}
  >
    <div className="h-2 w-2 rounded-full bg-current" />
    <span className="font-mono text-xs font-medium text-neutral-600 dark:text-neutral-200">
      {children}
    </span>
  </Link>
);

export const Chips: React.FC<{ variant: string }> = ({ variant }) => {
  switch (variant) {
    case 'JavaScript':
      return (
        <Chip color="#fcdc00" href="https://www.javascript.com">
          JavaScript
        </Chip>
      );

    case 'TypeScript':
      return (
        <Chip color="#3078c6" href="https://www.typescriptlang.org">
          TypeScript
        </Chip>
      );

    case 'Next.js':
      return (
        <Chip color="#000" href="https://nextjs.org">
          Next.js
        </Chip>
      );

    case 'Vite':
      return (
        <Chip color="#646cff" href="https://vitejs.dev">
          Vite
        </Chip>
      );

    case 'Astro':
      return (
        <Chip color="#ff5d01" href="https://astro.build">
          Astro
        </Chip>
      );

    case 'tRPC':
      return (
        <Chip color="#368ccb" href="https://trpc.io">
          tRPC
        </Chip>
      );

    case 'Auth.js':
      return (
        <Chip color="#000" href="https://authjs.dev">
          Auth.js
        </Chip>
      );

    case 'Tailwind CSS':
      return (
        <Chip color="#38b2ac" href="https://tailwindcss.com">
          Tailwind CSS
        </Chip>
      );

    case 'Headless UI':
      return (
        <Chip color="#9ca3af" href="https://headlessui.dev">
          Headless UI
        </Chip>
      );

    case 'Discord.js':
      return (
        <Chip color="#5765f2" href="https://discord.js.org">
          Discord.js
        </Chip>
      );

    case 'Nodemailer':
      return (
        <Chip color="#23b574" href="https://nodemailer.com">
          Nodemailer
        </Chip>
      );

    case 'Amazon SES':
      return (
        <Chip color="#ec7211" href="https://aws.amazon.com/ses">
          Amazon SES
        </Chip>
      );

    case 'MongoDB':
      return (
        <Chip color="#01ec64" href="https://www.mongodb.com">
          MongoDB
        </Chip>
      );

    case 'MySQL':
      return (
        <Chip color="#0275bf" href="https://www.mysql.com">
          MySQL
        </Chip>
      );

    case 'Prisma':
      return (
        <Chip color="#2d3748" href="https://www.prisma.io">
          Prisma
        </Chip>
      );

    case 'Vercel':
      return (
        <Chip color="#000" href="https://vercel.com">
          Vercel
        </Chip>
      );

    case 'Netlify':
      return (
        <Chip color="#02ad9f" href="https://www.netlify.com">
          Netlify
        </Chip>
      );

    case 'Heroku':
      return (
        <Chip color="#79589f" href="https://www.heroku.com">
          Heroku
        </Chip>
      );

    case 'AWS Lambda':
      return (
        <Chip color="#ec7211" href="https://aws.amazon.com/lambda">
          AWS Lambda
        </Chip>
      );

    case 'PlanetScale':
      return (
        <Chip color="#000" href="https://planetscale.com">
          PlanetScale
        </Chip>
      );

    default:
      return null;
  }
};
