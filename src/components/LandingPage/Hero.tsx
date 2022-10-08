import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { TbArrowNarrowDown } from 'react-icons/tb';

const Title: React.FC = () => (
  <section
    className="content flex flex-col justify-center gap-6"
    style={{
      minHeight: 'calc(100vh - 5rem)',
    }}
  >
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-[5rem]">
        <span className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
          Zétény
        </span>{' '}
        Nagy.
      </h1>
      <p className="font-medium md:text-xl">
        Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.
      </p>
    </div>

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

      <Link href="https://twitter.com/znagyy">
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

    <button
      className="group flex w-fit items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-[2px] font-medium text-gray-900 hover:from-green-400 hover:to-blue-600 hover:text-white dark:text-white"
      type="button"
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span className="flex w-fit items-center justify-center rounded-md bg-neutral-100 px-6 py-3 transition-all group-hover:bg-opacity-0 dark:bg-neutral-900">
        <TbArrowNarrowDown size={18} />
        More About Me
      </span>
    </button>
  </section>
);

export default Title;
