import Link from 'next/link';
import SectionTitle from './SectionTitle';

const GetInTouch: React.FC = () => (
  <section className="content mb-20 min-h-[40vh]" id="get-in-touch">
    <SectionTitle title="Get In Touch" number={3} />

    <p className="mb-8 max-w-[60ch]">
      Got something you would like to say? Or have a question? Feel free to send me a message using
      the form down below. I&rsquo;m just a few clicks away...
    </p>

    <Link href="/contact">
      <a className="mt-8 w-fit rounded from-teal-400 to-green-500 px-6 py-4 text-green-500 outline outline-1 outline-green-500 transition-colors duration-500 hover:bg-gradient-to-r hover:text-neutral-100 hover:outline-0 dark:hover:text-slate-900">
        Contact
      </a>
    </Link>
  </section>
);

export default GetInTouch;
