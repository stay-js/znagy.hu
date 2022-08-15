import Link from 'next/link';
import SectionTitle from './SectionTitle';

const GetInTouch: React.FC = () => (
  <section className="min-h-[40vh] mb-20 content" id="get-in-touch">
    <SectionTitle title="Get In Touch" number={3} />

    <p className="max-w-[60ch] mb-8">
      Got something you would like to say? Or have a question? Feel free to send me a message using
      the form down below. I&rsquo;m just a few clicks away...
    </p>

    <Link href="/contact">
      <a className="mt-8 px-6 py-4 text-green-500 rounded outline outline-1 hover:outline-0 outline-green-500 transition-colors duration-500 hover:text-neutral-100 dark:hover:text-slate-900 hover:bg-gradient-to-r from-teal-400 to-green-500 w-fit">
        Contact
      </a>
    </Link>
  </section>
);

export default GetInTouch;
