import Link from 'next/link';

const Chip: React.FC<{
  children: React.ReactNode;
  color: string;
  href: string;
}> = ({ children, color, href }) => (
  <Link
    className="flex w-fit items-center gap-2 rounded-full border-2 border-current px-4 py-1 ring-current transition-all hover:bg-neutral-200 hover:ring dark:hover:bg-neutral-700"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color }}
  >
    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
    <span className="font-mono text-xs font-medium text-neutral-600 dark:text-neutral-200">
      {children}
    </span>
  </Link>
);

const Chips: React.FC<{ variant: string }> = ({ variant }) => {
  if (variant === 'JavaScript')
    return (
      <Chip color="#fcdc00" href="https://www.javascript.com/">
        JavaScript
      </Chip>
    );

  if (variant === 'TypeScript')
    return (
      <Chip color="#3078c6" href="https://www.typescriptlang.org/">
        TypeScript
      </Chip>
    );

  if (variant === 'React')
    return (
      <Chip color="#61dafb" href="https://reactjs.org/">
        React
      </Chip>
    );

  if (variant === 'Next.js')
    return (
      <Chip color="#000000" href="https://nextjs.org/">
        Next.js
      </Chip>
    );

  if (variant === 'Vite')
    return (
      <Chip color="#646cff" href="https://vitejs.dev/">
        Vite
      </Chip>
    );

  if (variant === 'Astro')
    return (
      <Chip color="#ff5d01" href="https://astro.build/">
        Astro
      </Chip>
    );

  if (variant === 'tRPC')
    return (
      <Chip color="#368ccb" href="https://trpc.io/">
        tRPC
      </Chip>
    );

  if (variant === 'NextAuth.js')
    return (
      <Chip color="#000000" href="https://next-auth.js.org/">
        NextAuth.js
      </Chip>
    );

  if (variant === 'Tailwind CSS')
    return (
      <Chip color="##38b2ac" href="https://tailwindcss.com/">
        Tailwind CSS
      </Chip>
    );

  if (variant === 'Headless UI')
    return (
      <Chip color="#9ca3af" href="https://headlessui.dev/">
        Headless UI
      </Chip>
    );

  if (variant === 'Discord.js')
    return (
      <Chip color="#5765f2" href="https://discord.js.org/">
        Discord.js
      </Chip>
    );

  if (variant === 'Nodemailer')
    return (
      <Chip color="#23b574" href="https://nodemailer.com/">
        Nodemailer
      </Chip>
    );

  if (variant === 'MongoDB')
    return (
      <Chip color="#01ec64" href="https://www.mongodb.com/">
        MongoDB
      </Chip>
    );

  if (variant === 'MySQL')
    return (
      <Chip color="#0275bf" href="https://www.mysql.com/">
        MySQL
      </Chip>
    );

  if (variant === 'PostgreSQL')
    return (
      <Chip color="#336791" href="https://www.postgresql.org/">
        PostgreSQL
      </Chip>
    );

  if (variant === 'Prisma')
    return (
      <Chip color="#2d3748" href="https://www.prisma.io/">
        Prisma
      </Chip>
    );

  if (variant === 'Vercel')
    return (
      <Chip color="#000000" href="https://vercel.com/">
        Vercel
      </Chip>
    );

  if (variant === 'Heroku')
    return (
      <Chip color="#79589f" href="https://www.heroku.com/">
        Heroku
      </Chip>
    );

  if (variant === 'Netlify')
    return (
      <Chip color="#02ad9f" href="https://www.netlify.com/">
        Netlify
      </Chip>
    );

  return <p>no chip for {variant}</p>;
};

export default Chips;
