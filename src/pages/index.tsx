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
        <title>Home - stay</title>
        <meta name="description" content="Home - stay" />
        <meta
          name="keywords"
          content="stay, Zétény, Nagy, Zétény Nagy, Full stack dev, Full stack developer, IT, IT Student, Kyokushin, Kyokushin Karate, Muay Thai, Thai Box, Thai-Boxing, Hungary, JavaScript, TypeScript, Node.js, Express, React, Next.js, Sass, SCSS, 
          HTML, HTML5, CSS, CSS3 Nodemailer, Vercel, Netlify, Heroku, Discord.js, REGALE Energy Zrt., Anything"
        />
        <meta property="og:title" content="Home - stay" />
        <meta property="og:url" content="https://stayy.xyz/" />
        <meta property="og:img" content="https://stayy.xyz/images/me.png" />
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
