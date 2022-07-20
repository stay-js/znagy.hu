import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Form from '../components/Form';

const Contact: NextPage = () => (
  <>
    <Head>
      <title>Contact - Zétény Nagy</title>
      <meta property="og:title" content="Contact - Zétény Nagy" key="title" />
      <meta name="twitter:title" content="Contact - Zétény Nagy" />

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

    <main className="font-sans text-sm content">
      <h1 className="my-4 font-serif text-3xl text-center">Send me a message!</h1>
      <div className="max-w-[75ch] mx-auto text-center">
        <p className="m-0">
          Got something you would like to say? Or have a question? Feel free to send me a message
          using the form down below. I&rsquo;m just a few clicks away...
        </p>
        <p className="m-0">
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

export default Contact;
