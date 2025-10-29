import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { Projects } from '~/components/projects';
import { Skills } from '~/components/skills';
import { Experience } from '~/components/expreience';
import { Contact } from '~/components/contact';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  path: '/',
  title: 'Home',
  description:
    'I build digital experiences with modern technologies and thoughtful engineering. Currently studying at BMSzC Neumann János Informatikai Technikum in Budapest, Hungary.',
});

const Page: React.FC = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </>
);

export default Page;
