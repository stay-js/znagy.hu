import { About } from '~/components/about';
import { Contact } from '~/components/contact';
import { Experience } from '~/components/expreience';
import { Hero } from '~/components/hero';
import { Projects } from '~/components/projects';
import { Skills } from '~/components/skills';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  description:
    'I build digital experiences with modern technologies and thoughtful engineering. Currently studying at BMSzC Neumann János Informatikai Technikum in Budapest, Hungary.',
  path: '/',
  title: 'Home',
});

export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
