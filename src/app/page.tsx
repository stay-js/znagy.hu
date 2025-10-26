import { Hero } from '~/components/hero';
import { About } from '~/components/about';

const Page: React.FC = () => (
  <>
    <Hero />
    <About />
    <div className="min-h-[200vh]"></div>
  </>
);

export default Page;
