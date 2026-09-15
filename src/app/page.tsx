import { About } from '~/components/about';
import { Contact } from '~/components/contact';
import { Experience } from '~/components/expreience';
import { Hero } from '~/components/hero';
import { Projects } from '~/components/projects';
import { ScrollHint } from '~/components/scroll-hint';
import { Skills } from '~/components/skills';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  description:
    'I build digital experiences with modern technologies and thoughtful engineering. I recently graduated from BMSZC Neumann János Informatikai Technikum, and am currently pursuing my studies at ELTE Faculty of Informatics.',
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

      <ScrollHint />
    </>
  );
}
