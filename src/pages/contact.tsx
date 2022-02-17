import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Form from '../components/layouts/Form';

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Contact - stay</title>
        <meta name="author" content="stay" />
        <meta
          name="description"
          content="Got something you would like to say? Or have a question? Feel free
            to send me a message using the form down below. I&rsquo;m just a few
            clicks away..."
        />
        <meta
          name="keywords"
          content="stay, Zétény, Nagy, Zétény Nagy, Full stack dev, Full stack developer, IT, IT Student, Kyokushin, Kyokushin Karate, Muay Thai, Thai Box, Thai-Boxing, Hungary, JavaScript, TypeScript, Node.js, Express, React, Next.js, Sass, SCSS, 
          HTML, HTML5, CSS, CSS3 Nodemailer, Vercel, Netlify, Heroku, Discord.js, REGALE Energy Zrt., Anything"
        />
        <meta name="url" content="https://stayy.xyz/contact/" />

        <meta property="og:title" content="Contact - stay" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stayy.xyz/contact/" />
        <meta
          property="og:description"
          content="Got something you would like to say? Or have a question? Feel free
            to send me a message using the form down below. I&rsquo;m just a few
            clicks away..."
        />
        <meta property="og:image" content="https://stayy.xyz/images/me.png" />
        <meta name="theme-color" content="#8f30ea" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stayy.xyz" />
        <meta property="twitter:url" content="https://stayy.xyz/contact/" />
        <meta name="twitter:title" content="Contact - stay" />
        <meta
          name="twitter:description"
          content="Got something you would like to say? Or have a question? Feel free
            to send me a message using the form down below. I&rsquo;m just a few
            clicks away..."
        />
        <meta name="twitter:image" content="https://stayy.xyz/images/me.png" />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
      </Head>

      <main className="contact-page content">
        <div className="contact-page-content text-center center">
          <h1 className="contact-page-title">Send me a message!</h1>
          <p>
            Got something you would like to say? Or have a question? Feel free
            to send me a message using the form down below. I&rsquo;m just a few
            clicks away...
          </p>
          <p>
            Or you can just send me an e-mail at:{' '}
            <Link href="mailto:nagyzeteny6@gmail.com">
              <a className="link">nagyzeteny6@gmail.com</a>
            </Link>
          </p>
        </div>

        <Form />
      </main>
    </>
  );
};

export default Home;
