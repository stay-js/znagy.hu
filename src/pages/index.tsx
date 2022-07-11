import type { NextPage } from 'next';
import Head from 'next/head';
import { Title, AboutMe, Projects, GetInTouch } from '../components/LandingPage';

const LandingPage: NextPage = () => (
  <>
    <Head>
      <title>Zétény Nagy</title>
      <meta property="og:title" content="Zétény Nagy" key="title" />
      <meta name="twitter:title" content="Zétény Nagy" />

      <meta name="url" content="https://znagy.hu/" />
      <meta property="og:url" content="https://znagy.hu/" />
      <meta property="twitter:url" content="https://znagy.hu/" />

      <meta
        name="description"
        content="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
      />
      <meta
        property="og:description"
        content="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
      />
      <meta
        name="twitter:description"
        content="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
      />
    </Head>

    <main>
      <Title />
      <AboutMe />
      <Projects />
      <GetInTouch />
    </main>
  </>
);

export default LandingPage;
