import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { TbArrowNarrowDown } from 'react-icons/tb';

const Title: React.FC = () => (
  <section
    className="content flex flex-col justify-center"
    style={{
      minHeight: 'calc(100vh - 5rem)',
    }}
  >
    <h1 className="mb-2 text-4xl font-bold sm:text-5xl md:text-[5rem]">
      <span className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
        Zétény
      </span>{' '}
      Nagy.
    </h1>
    <p className="md:text-xl">Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.</p>

    <div className="flex gap-2">
      <Link href="https://github.com/stay-js">
        <a
          target="_blank"
          title="GitHub"
          className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 bg-neutral-700 text-white transition-colors hover:bg-white hover:text-zinc-900 dark:border-0"
        >
          <FaGithub />
        </a>
      </Link>

      <Link href="https://twitter.com/stay0y0">
        <a
          target="_blank"
          title="Twitter"
          className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 bg-neutral-700 text-white transition-colors hover:bg-white hover:text-zinc-900 dark:border-0"
        >
          <FaTwitter />
        </a>
      </Link>

      <Link href="mailto:nagyzeteny6@gmail.com">
        <a
          target="_blank"
          title="E-mail"
          className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 bg-neutral-700 text-white transition-colors hover:bg-white hover:text-zinc-900 dark:border-0"
        >
          <FaEnvelope />
        </a>
      </Link>

      <Link href="https://www.youtube.com/channel/UCEGp1S_QTS3goAVX1cVw-tQ">
        <a
          title="YouTube"
          className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 bg-neutral-700 text-white transition-colors hover:bg-white hover:text-zinc-900 dark:border-0"
        >
          <FaYoutube />
        </a>
      </Link>
    </div>

    <Link href="#about">
      <a className="mt-8 flex w-fit items-center gap-1 rounded from-teal-400 to-green-500 px-6 py-4 text-green-500 outline outline-1 outline-green-500 transition-colors duration-500 hover:bg-gradient-to-r hover:text-neutral-100 hover:outline-0 dark:hover:text-slate-900">
        <TbArrowNarrowDown size={18} />
        More About Me
      </a>
    </Link>
  </section>
);

export default Title;
