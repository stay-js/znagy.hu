import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import Button from '../Button';

const Title: React.FC = () => (
  <section
    className="flex flex-col justify-center content"
    style={{
      minHeight: 'calc(100vh - 5rem)',
    }}
  >
    <p className="mb-0 font-serif text-green-500">Hi, my name is</p>
    <h1 className="text-4xl sm:text-5xl md:text-[5rem] mb-2 font-bold">Zétény Nagy.</h1>
    <p className="md:text-xl">Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.</p>

    <div className="flex gap-4">
      <Link href="https://github.com/stay-js">
        <a
          target="_blank"
          title="GitHub"
          className="text-gray-400 transition-colors duration-300 hover:text-white"
        >
          <FaGithub size={32} />
        </a>
      </Link>

      <Link href="https://twitter.com/stay0y0">
        <a
          target="_blank"
          title="Twitter"
          className="text-gray-400 transition-colors duration-300 hover:text-white"
        >
          <FaTwitter size={32} />
        </a>
      </Link>

      <Link href="mailto:nagyzeteny6@gmail.com">
        <a
          target="_blank"
          title="E-mail"
          className="text-gray-400 transition-colors duration-300 hover:text-white"
        >
          <FaEnvelope size={32} />
        </a>
      </Link>

      <Link href="https://www.youtube.com/channel/UCEGp1S_QTS3goAVX1cVw-tQ">
        <a
          target="_blank"
          title="YouTube"
          className="text-gray-400 transition-colors duration-300 hover:text-white"
        >
          <FaYoutube size={32} />
        </a>
      </Link>
    </div>
    <Button href="#about">More About Me</Button>
  </section>
);

export default Title;
