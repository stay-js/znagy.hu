import Link from 'next/link';
import Button from '../Button';

const Title: React.FC = () => (
  <section className="flex flex-col justify-center min-h-screen gap-0 mt-[-4rem] content">
    <p className="mb-0 font-serif text-green-500">Hi, my name is</p>
    <h1 className="text-4xl sm:text-5xl md:text-[5rem] mb-2 font-bold">Zétény Nagy.</h1>
    <p className="md:text-xl">Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.</p>

    <div className="flex gap-4">
      <Link href="https://github.com/stay-js">
        <a target="_blank" title="GitHub">
          <i className="text-3xl text-gray-400 transition-colors duration-300 hover:text-white fab fa-github" />
        </a>
      </Link>

      <Link href="https://www.facebook.com/nagy.zeteny.06/">
        <a target="_blank" title="Facebook">
          <i className="text-3xl text-gray-400 transition-colors duration-300 hover:text-white fab fa-facebook" />
        </a>
      </Link>

      <Link href="mailto:nagyzeteny6@gmail.com">
        <a target="_blank" title="E-mail">
          <i className="text-3xl text-gray-400 transition-colors duration-300 hover:text-white fas fa-envelope" />
        </a>
      </Link>

      <Link href="https://www.youtube.com/channel/UCEGp1S_QTS3goAVX1cVw-tQ">
        <a target="_blank" title="YouTube">
          <i className="text-3xl text-gray-400 transition-colors duration-300 hover:text-white fab fa-youtube" />
        </a>
      </Link>
    </div>
    <Button href="#about">More About Me</Button>
  </section>
);

export default Title;
