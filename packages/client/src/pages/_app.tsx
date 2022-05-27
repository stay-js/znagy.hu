import '../styles/style.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from '../components/Nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />

        <meta name='author' content='stay' />
        <meta
          name='keywords'
          content='stay, Zétény, Nagy, Zétény Nagy, Full stack dev, Full stack developer, IT, IT Student, Kyokushin, Kyokushin Karate, Muay Thai, Thai Box, Thai-Boxing, Hungary, JavaScript, TypeScript, Node.js, Express, React, Next.js, Sass, SCSS, 
          HTML, HTML5, CSS, CSS3 Nodemailer, Vercel, Netlify, Heroku, Discord.js, REGALE Energy Zrt., Anything, Resume, Education, Skills, Hobbies, IT, Web Development, Web Developer, Data modeling, Data structuring, DevOps, Cloud, Networking, Languages & Libraries, Technologies, Platforms, School, 
          Újlaki Általános Iskola, BMSzC Neumann János Informatikai Technikum'
        />

        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' key='og_type' />
        <meta property='og:site_name' content='Zétény Nagy' key='site_name' />
        <meta
          property='og:image'
          content='https://stayy.xyz/images/me.png'
          key='image'
        />
        <meta name='theme-color' content='#22c55e' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='stayy.xyz' />
        <meta name='twitter:image' content='https://stayy.xyz/images/me.png' />

        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='rating' content='general' />
      </Head>

      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}
