import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { Projects } from '~/components/projects';

const Page: React.FC = () => (
  <>
    <Hero />
    <About />
    <Projects />
  </>
);

export default Page;
