import Link from 'next/link';
import { Github, Instagram, Mail } from 'lucide-react';
import { Button } from '~/components/ui/button';

export const Hero: React.FC = () => (
  <section className="container flex min-h-screen flex-col justify-center gap-12 py-24">
    <div className="flex flex-col gap-3">
      <h1 className="text-foreground text-5xl font-bold text-balance md:text-7xl">Zétény Nagy</h1>
      <h2 className="text-muted-foreground text-xl md:text-2xl">Full-stack Developer</h2>
      <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
        I build digital experiences with modern technologies and thoughtful engineering. Currently
        studying at BMSzC Neumann János Informatikai Technikum in Budapest, Hungary.
      </p>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg">
          <Link href="/#contact">Get In Touch</Link>
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/#projects">View Projects</Link>
        </Button>
      </div>

      <div className="flex gap-4">
        {[
          {
            href: 'https://github.com/stay-js',
            icon: Github,
            label: 'GitHub',
          },
          {
            href: 'https://instagram.com/zeteny_ngy',
            icon: Instagram,
            label: 'Instagram',
          },
          {
            href: 'mailto:znagy@znagy.hu',
            icon: Mail,
            label: 'Email',
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <item.icon size={24} />
            <span className="sr-only">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
