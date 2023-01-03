import type { NextPage } from 'next';
import Link from 'next/link';
import { Form } from '@components/Form';
import { Title } from '@components/Title';
import { Meta } from '@components/Meta';

const Page: NextPage = () => (
  <>
    <Meta
      path="/contact"
      title="Contact - Zétény Nagy"
      desc="Got something you would like to say? Or have a question? Feel free to send me a message using the form down below. I&rsquo;m just a few clicks away..."
    />

    <main className="content flex flex-col items-center gap-8">
      <Title title="Send me a message!">
        <p>
          Got something you would like to say? Or have a question? Feel free to send me a message
          using the form down below. I&rsquo;m just a few clicks away...
        </p>
        <p>
          Or you can just send me an e-mail at:{' '}
          <Link
            className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent"
            href="mailto:nagyzeteny6@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nagyzeteny6@gmail.com
          </Link>
        </p>
      </Title>
      <Form />
    </main>
  </>
);

export default Page;
