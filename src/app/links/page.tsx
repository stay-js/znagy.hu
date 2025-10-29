import Link from 'next/link';
import Image from 'next/image';
import { Button } from '~/components/ui/button';
import { createMetadata } from '~/lib/create-metadata';
import { LINKS } from '~/constants/links';
import { cn } from '~/lib/utils';

export const metadata = createMetadata({
  path: '/links',
  title: 'Links',
  description: 'Full-stack developer • IT Student • Kyokushin • Muay Thai',
});

const Item: React.FC<(typeof LINKS)[number]['links'][number]> = (item) => (
  <li className="group">
    <Button asChild className="w-full" size="xl" variant="outline">
      <Link href={item.url} target="_blank" rel="noopener noreferrer">
        {'icon' in item && (
          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
            <item.icon size={20} />
          </span>
        )}

        <span>{item.label}</span>
      </Link>
    </Button>
  </li>
);

const Page: React.FC = () => (
  <div className="container flex min-h-screen max-w-2xl flex-col gap-12 py-24">
    <section className="flex flex-col items-center gap-6">
      <Image
        src="/me.jpg"
        alt="Zétény Nagy"
        width="256"
        height="256"
        className="w-40 rounded-full border shadow-sm select-none md:w-48"
      />

      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Zétény Nagy</h1>

        <div className="text-muted-foreground flex flex-col gap-1">
          <p className="text-base font-medium md:text-lg">
            Full-stack developer • IT Student • Kyokushin • Muay Thai
          </p>
          <p className="text-sm">Building digital experiences with modern technologies</p>
        </div>
      </div>
    </section>

    {LINKS.map((section) => (
      <section className="flex flex-col gap-4" key={section.title}>
        <h2 className="text-center text-xl font-semibold md:text-2xl">{section.title}</h2>

        <ul className={cn('gap-2', section.grid ? 'grid sm:grid-cols-2' : 'flex flex-col')}>
          {section.links.map((link) => (
            <Item key={link.url} {...link} />
          ))}
        </ul>
      </section>
    ))}
  </div>
);

export default Page;
