import Link from 'next/link';
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { TbArrowNarrowDown } from 'react-icons/tb';
import { Button } from '@components/Button';

const Icon: React.FC<{
  children: React.ReactNode;
  title: string;
  href: string;
}> = ({ children, title, href }) => (
  <Link
    className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 bg-neutral-700 text-white transition-colors hover:bg-white hover:text-zinc-900 dark:border-0"
    title={title}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

export const Hero: React.FC = () => (
  <section
    className="content flex flex-col justify-center gap-6"
    style={{ minHeight: 'calc(100vh - 5rem)' }}
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
      <Icon title="GitHub" href="https://github.com/stay-js">
        <FaGithub />
      </Icon>

      <Icon title="Twitter" href="https://twitter.com/znagyy">
        <FaTwitter />
      </Icon>

      <Icon title="Instagram" href="https://www.instagram.com/zeteny_ngy">
        <FaInstagram />
      </Icon>

      <Icon title="E-mail" href="mailto:znagy@znagy.hu">
        <FaEnvelope />
      </Icon>
    </div>

    <Button
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <TbArrowNarrowDown size={18} />
      More About Me
    </Button>
  </section>
);
