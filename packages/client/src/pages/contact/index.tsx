import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Form from '../../components/Form';
import style from './Contact.module.scss';

const Contact: NextPage = () => (
  <>
    <Head>
      <title>Contact - Zétény Nagy</title>
      <meta property="og:title" content="Contact - Zétény Nagy" key="title" />
      <meta name="twitter:title" content="Contact - Zétény Nagy" />

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

    <main className={`${style['contact-page']} content`}>
      <h1 className={style.title}>Send me a message!</h1>
      <div className={style.content}>
        <p style={{ margin: 0 }}>
          Got something you would like to say? Or have a question? Feel free to send me a message
          using the form down below. I&rsquo;m just a few clicks away...
        </p>
        <p style={{ margin: 0 }}>
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
