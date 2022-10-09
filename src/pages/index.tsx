import type { NextPage } from 'next';
import Layout from '@layouts/Layout';
import { Hero, AboutMe, Projects, GetInTouch } from '@components/LandingPage';

const LandingPage: NextPage = () => (
  <Layout
    path="/"
    title="Home - Zétény Nagy"
    desc="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
  >
    <main className="flex flex-col gap-20">
      <Hero />
      <AboutMe />
      <Projects />
      <GetInTouch />
    </main>
  </Layout>
);

export default LandingPage;
