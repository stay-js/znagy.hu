import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { Projects } from '~/components/projects';
import { Skills } from '~/components/skills';

const Page: React.FC = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
  </>
);

export default Page;
