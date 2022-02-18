import type { NextPage } from 'next';
import Head from 'next/head';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import GetInTouch from '../components/GetInTouch';

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>stay</title>
        <meta property="og:title" content="stay" />
        <meta name="twitter:title" content="stay" />

        <meta name="url" content="https://stayy.xyz/" />
        <meta property="og:url" content="https://stayy.xyz/" />
        <meta property="twitter:url" content="https://stayy.xyz/" />

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

      <main className="landing-page">
        <Title />
        <AboutMe />
        <Projects />
        <GetInTouch />
      </main>
    </>
  );
};

export default Home;
