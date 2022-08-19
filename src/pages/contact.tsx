import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Form from '@components/Form';
import Title from '@components/Title';

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

    <main className="content">
      <Title title="Send me a message!">
        <p className="m-0">
          Got something you would like to say? Or have a question? Feel free to send me a message
          using the form down below. I&rsquo;m just a few clicks away...
        </p>
        <p className="m-0">
          Or you can just send me an e-mail at:{' '}
          <Link href="mailto:nagyzeteny6@gmail.com">
            <a className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
              nagyzeteny6@gmail.com
            </a>
          </Link>
        </p>
      </Title>

      <Form />
    </main>
  </>
);

export default Contact;
