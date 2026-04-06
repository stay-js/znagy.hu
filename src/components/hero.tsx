import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import Link from 'next/link';

import { Button } from '~/components/ui/button';

export function Hero() {
  return (
    <section className="container flex min-h-screen flex-col justify-center gap-12 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-foreground text-5xl font-bold text-balance md:text-7xl">Zétény Nagy</h1>
        <h2 className="text-muted-foreground text-xl md:text-2xl">Full-stack Developer</h2>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
          I build digital experiences with modern technologies and thoughtful engineering. Currently
          studying at BMSzC Neumann János Informatikai Technikum in Budapest, Hungary.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/#contact">Get In Touch</Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/#projects">View Projects</Link>
          </Button>
        </div>

        <div className="flex gap-4">
          {[
            {
              href: 'https://github.com/stay-js',
              icon: SiGithub,
              label: 'GitHub',
            },
            {
              href: 'https://instagram.com/zeteny_ngy',
              icon: SiInstagram,
              label: 'Instagram',
            },
            {
              href: 'mailto:znagy@znagy.hu',
              icon: Mail,
              label: 'Email',
            },
          ].map((item) => (
            <Link
              className="text-muted-foreground hover:text-foreground transition-colors"
              href={item.href}
              key={item.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <item.icon className="size-5.5" />
              <span className="sr-only">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
