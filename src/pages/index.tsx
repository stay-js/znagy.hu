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
        <meta name="author" content="stay" />
        <meta
          name="description"
          content="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
        />
        <meta
          name="keywords"
          content="stay, Zétény, Nagy, Zétény Nagy, Full stack dev, Full stack developer, IT, IT Student, Kyokushin, Kyokushin Karate, Muay Thai, Thai Box, Thai-Boxing, Hungary, JavaScript, TypeScript, Node.js, Express, React, Next.js, Sass, SCSS, 
          HTML, HTML5, CSS, CSS3 Nodemailer, Vercel, Netlify, Heroku, Discord.js, REGALE Energy Zrt., Anything"
        />
        <meta name="url" content="https://stayy.xyz/" />

        <meta property="og:title" content="stay" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stayy.xyz/" />
        <meta
          property="og:description"
          content="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
        />
        <meta property="og:image" content="https://stayy.xyz/images/me.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stayy.xyz" />
        <meta property="twitter:url" content="https://stayy.xyz/" />
        <meta name="twitter:title" content="stay" />
        <meta
          name="twitter:description"
          content="Full stack developer wannabe. IT Student. Kyokushin. Muay Thai."
        />
        <meta name="twitter:image" content="https://stayy.xyz/images/me.png" />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
      </Head>

      <main>
        <Title />
        <AboutMe />
        <Projects />
        <GetInTouch />
      </main>
    </>
  );
};

export default Home;
