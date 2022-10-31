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
      <Chip color="#f7df1e" href="https://www.javascript.com/">
        JavaScript
      </Chip>
    );

  if (variant === 'TypeScript')
    return (
      <Chip color="#3178c6" href="https://www.typescriptlang.org/">
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
      <Chip color="#38b2ac" href="https://tailwindcss.com/">
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
      <Chip color="#7289da" href="https://discord.js.org/">
        Discord.js
      </Chip>
    );

  if (variant === 'Nodemailer')
    return (
      <Chip color="#23b574" href="https://nodemailer.com/">
        Nodemailer
      </Chip>
    );

  if (variant === 'Node.js')
    return (
      <Chip color="#339933" href="https://nodejs.org/">
        Node.js
      </Chip>
    );

  if (variant === 'Express')
    return (
      <Chip color="#000000" href="https://expressjs.com/">
        Express
      </Chip>
    );

  if (variant === 'MongoDB')
    return (
      <Chip color="#47A248" href="https://www.mongodb.com/">
        MongoDB
      </Chip>
    );

  if (variant === 'MySQL')
    return (
      <Chip color="#4479A1" href="https://www.mysql.com/">
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
      <Chip color="#0c344b" href="https://www.prisma.io/">
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
      <Chip color="#430098" href="https://www.heroku.com/">
        Heroku
      </Chip>
    );

  if (variant === 'Netlify')
    return (
      <Chip color="#00C7B7" href="https://www.netlify.com/">
        Netlify
      </Chip>
    );

  return null;
};

export default Chips;
