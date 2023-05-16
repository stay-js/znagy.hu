import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { Anchor } from '@components/Anchor';
import { Button } from '@components/Button';
import { Chips } from '@components/Chips';
import { HeroButton } from '@components/HeroButton';
import { projects } from '@constants/projects';
import { createMetadata } from '@utils/createMetadata';

export const metadata = createMetadata({
  path: '',
  title: 'Home',
  description: 'Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.',
});

const SectionTitle: React.FC<{ title: string; number: number }> = ({ title, number }) => (
  <h2 className="relative flex w-fit gap-3 text-2xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-green-500">
    <span className="text-green-500">{number}.</span>
    {title}
  </h2>
);

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

const Page: NextPage = () => (
  <main className="content flex flex-col gap-20">
    <section
      className="flex flex-col justify-center gap-6"
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

      <HeroButton />
    </section>

    <section className="flex flex-col gap-4" id="about">
      <SectionTitle title="About Me" number={1} />

      <div className="flex flex-col gap-12 lg:flex-row">
        <Image
          className="h-64 w-64 self-center border-l-8 border-t-8 border-green-500 transition duration-300 hover:-rotate-6 focus:-rotate-6 lg:order-2"
          src="/images/me.jpg"
          alt="me"
          width={720}
          height={720}
        />

        <div className="flex w-full flex-col gap-4 lg:w-3/5">
          <p>Glad you are here! </p>
          <p>
            My name is Zétény Nagy AKA stay, I&rsquo;m from Budapest, Hungary. Currently studying in{' '}
            <Anchor className="text-green-500" href="http://njszg.hu" target="_blank">
              BMSzC Neumann János Informatikai Technikum
            </Anchor>
            .
          </p>
          <p>
            My interest in web development started long ago, back in my early elementary school
            days. My favourite subject is maths since first grade. Also, I love doing Kyokushin
            Karate and Thai-Boxing (Muay Thai). I will improve my coding and fighting skills
            especially because I want to be a Full Stack web developer...
          </p>
          <p>
            If you are interested check out my{' '}
            <Anchor className="text-green-500" href="/setup">
              setup
            </Anchor>
            .
          </p>
          <p>Favorite technologies/things I use:</p>
          <div className="ml-8 flex gap-20 text-green-500">
            <ul className="list-disc">
              <li>
                <Anchor href="https://www.typescriptlang.org" target="_blank">
                  TypeScript
                </Anchor>
              </li>
              <li>
                <Anchor href="https://nextjs.org" target="_blank">
                  Next.js
                </Anchor>
              </li>
              <li>
                <Anchor href="https://trpc.io" target="_blank">
                  tRPC
                </Anchor>
              </li>
            </ul>
            <ul className="list-disc">
              <li>
                <Anchor href="https://www.prisma.io" target="_blank">
                  Prisma
                </Anchor>
              </li>
              <li>
                <Anchor href="https://tailwindcss.com" target="_blank">
                  Tailwind CSS
                </Anchor>
              </li>
              <li>
                <Anchor href="https://vercel.com" target="_blank">
                  Vercel
                </Anchor>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-4" id="projects">
      <SectionTitle title="Projects" number={2} />

      <div className="flex flex-col gap-16">
        {projects.map(({ title, url, github, desc, tags }) => (
          <article key={title} className="flex max-w-[60ch] flex-col gap-4">
            <div className="flex gap-3">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                {title}
              </h2>

              {github && (
                <Link
                  className="flex items-center transition-colors hover:text-green-500"
                  title={`${title} on GitHub`}
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </Link>
              )}

              {url && (
                <Link
                  className="flex items-center transition-colors hover:text-green-500"
                  title={`${title} on the web`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </Link>
              )}
            </div>

            <div className="rounded bg-slate-700 p-4 font-medium">{desc}</div>

            <ul className="flex flex-wrap gap-x-3 gap-y-2">
              {tags.map((tag) => (
                <li key={tag}>
                  <Chips key={tag} variant={tag} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <SectionTitle title="Get In Touch" number={3} />

      <div className="flex flex-col gap-6">
        <p className="max-w-[60ch]">
          Got something you would like to say? Or have a question? Feel free to send me a message
          using the form down below. I&rsquo;m just a few clicks away...
        </p>

        <Button href="/contact">Contact</Button>
      </div>
    </section>
  </main>
);

export default Page;
