import type { NextPage } from 'next';
import { Hero, AboutMe, Projects, GetInTouch } from '@components/Home';
import { Meta } from '@components/Meta';

const Page: NextPage = () => (
  <>
    <Meta
      path="/"
      title="Home - Zétény Nagy"
      description="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
    />

    <main className="flex flex-col gap-20">
      <Hero />
      <AboutMe />
      <Projects />
      <GetInTouch />
    </main>
  </>
);

export default Page;
