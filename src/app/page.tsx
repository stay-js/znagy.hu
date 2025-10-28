import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { Projects } from '~/components/projects';
import { Skills } from '~/components/skills';
import { Experience } from '~/components/expreience';

const Page: React.FC = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Experience />
  </>
);

export default Page;
