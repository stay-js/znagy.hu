import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Form } from '../components';

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Contact - stay</title>
        <meta property="og:title" content="Contact - stay" key="title" />
        <meta name="twitter:title" content="Contact - stay" />

        <meta name="url" content="https://stayy.xyz/contact" />
        <meta property="og:url" content="https://stayy.xyz/contact" />
        <meta property="twitter:url" content="https://stayy.xyz/contact" />

        <meta
          name="description"
          content="Got something you would like to say? Or have a question? Feel free
          to send me a message using the form down below. I&rsquo;m just a few
          clicks away..."
        />
        <meta
          property="og:description"
          content="Got something you would like to say? Or have a question? Feel free
          to send me a message using the form down below. I&rsquo;m just a few
          clicks away..."
        />
        <meta
          name="twitter:description"
          content="Got something you would like to say? Or have a question? Feel free
          to send me a message using the form down below. I&rsquo;m just a few
          clicks away..."
        />
      </Head>

      <main className="contact-page content">
        <div className="contact-page-content center">
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
