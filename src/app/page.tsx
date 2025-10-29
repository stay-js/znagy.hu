import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { Projects } from '~/components/projects';
import { Skills } from '~/components/skills';
import { Experience } from '~/components/expreience';
import { Contact } from '~/components/contact';

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
