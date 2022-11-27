import Link from 'next/link';
import { SectionTitle } from './SectionTitle';

export const GetInTouch: React.FC = () => (
  <section className="content flex flex-col gap-4">
    <SectionTitle title="Get In Touch" number={3} />

    <div className="flex flex-col gap-6">
      <p className="max-w-[60ch]">
        Got something you would like to say? Or have a question? Feel free to send me a message
        using the form down below. I&rsquo;m just a few clicks away...
      </p>

      <Link
        className="group flex w-fit items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium text-gray-900 hover:from-green-400 hover:to-blue-600 hover:text-white dark:text-white"
        href="/contact"
      >
        <span className="flex w-fit items-center justify-center rounded-md bg-neutral-100 px-6 py-3 transition-all group-hover:bg-opacity-0 dark:bg-neutral-900">
          Contact
        </span>
      </Link>
    </div>
  </section>
);
