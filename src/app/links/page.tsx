import Image from 'next/image';
import Link from 'next/link';

import { Button } from '~/components/ui/button';
import { LINKS } from '~/constants/links';
import { createMetadata } from '~/lib/create-metadata';
import { cn } from '~/lib/utils';

export const metadata = createMetadata({
  description: 'Full-stack developer • IT Student • Kyokushin • Muay Thai',
  path: '/links',
  title: 'Links',
});

export default function LinksPage() {
  return (
    <div className="container flex min-h-screen max-w-2xl flex-col gap-12 py-24">
      <section className="flex flex-col items-center gap-6">
        <Image
          alt="Zétény Nagy"
          className="w-40 rounded-full border shadow-sm select-none md:w-48"
          height="256"
          src="/me.jpg"
          width="256"
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
}

function Item(item: (typeof LINKS)[number]['links'][number]) {
  return (
    <li className="group">
      <Button asChild className="w-full" size="xl" variant="outline">
        <Link href={item.url} rel="noopener noreferrer" target="_blank">
          {'icon' in item && (
            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              <item.icon className="size-4" />
            </span>
          )}

          <span>{item.label}</span>
        </Link>
      </Button>
    </li>
  );
}
