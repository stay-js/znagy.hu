import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { TbArrowNarrowDown } from 'react-icons/tb';

const Title: React.FC = () => (
  <section
    className="flex flex-col justify-center content"
    style={{
      minHeight: 'calc(100vh - 5rem)',
    }}
  >
    <h1 className="text-4xl sm:text-5xl md:text-[5rem] mb-2 font-bold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
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
          className="grid w-10 h-10 text-white transition-colors rounded-full place-items-center dark:border-0 border border-neutral-700 bg-neutral-700 hover:bg-white hover:text-zinc-900"
        >
          <FaGithub />
        </a>
      </Link>

      <Link href="https://twitter.com/stay0y0">
        <a
          target="_blank"
          title="Twitter"
          className="grid w-10 h-10 text-white transition-colors rounded-full place-items-center dark:border-0 border border-neutral-700 bg-neutral-700 hover:bg-white hover:text-zinc-900"
        >
          <FaTwitter />
        </a>
      </Link>

      <Link href="mailto:nagyzeteny6@gmail.com">
        <a
          target="_blank"
          title="E-mail"
          className="grid w-10 h-10 text-white transition-colors rounded-full place-items-center dark:border-0 border border-neutral-700 bg-neutral-700 hover:bg-white hover:text-zinc-900"
        >
          <FaEnvelope />
        </a>
      </Link>

      <Link href="https://www.youtube.com/channel/UCEGp1S_QTS3goAVX1cVw-tQ">
        <a
          title="YouTube"
          className="grid w-10 h-10 text-white transition-colors rounded-full place-items-center dark:border-0 border border-neutral-700 bg-neutral-700 hover:bg-white hover:text-zinc-900"
        >
          <FaYoutube />
        </a>
      </Link>
    </div>

    <Link href="#about">
      <a className="mt-8 flex gap-1 items-center px-6 py-4 text-green-500 rounded outline outline-1 hover:outline-0 outline-green-500 transition-colors duration-500 hover:text-neutral-100 dark:hover:text-slate-900 hover:bg-gradient-to-r from-teal-400 to-green-500 w-fit">
        <TbArrowNarrowDown size={18} />
        More About Me
      </a>
    </Link>
  </section>
);

export default Title;
