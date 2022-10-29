import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

const AboutMe: React.FC = () => (
  <section className="content relative flex flex-col gap-4" id="about">
    <SectionTitle title="About Me" number={1} />

    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="self-center lg:order-2">
        <Image
          className="relative h-64 w-64 border-t-[10px] border-l-[10px] border-green-500 transition-all duration-300 hover:-rotate-6 focus:-rotate-6"
          src="/images/me.jpg"
          alt="me"
          width={720}
          height={720}
        />
      </div>

      <div className="flex w-full flex-col gap-4 lg:w-[60%]">
        <p>Glad you are here! </p>
        <p>
          My name is Zétény Nagy AKA stay, I&rsquo;m from Budapest, Hungary. Currently studying in{' '}
          <Link
            className="link text-green-500"
            href="http://njszg.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BMSzC Neumann János Informatikai Technikum
          </Link>
          .
        </p>
        <p>
          My intrest in web development started long ago, back in my early elementary school days.
          My favourite subject is maths since first grade. Also I love doing Kyokushin Karate and
          Thai-Boxing (Muay Thai). I will improve my coding and fighting skills especially because I
          want to be a Full Stack web developer...
        </p>
        <p>
          If you are interested check out my{' '}
          <Link
            className="link text-green-500"
            href="/setup"
            target="_blank"
            rel="noopener noreferrer"
          >
            setup
          </Link>
          .
        </p>
        <p>Favourite technologies/things I use:</p>
        <div className="ml-8 flex gap-20">
          <ul className="list-disc text-green-500">
            <li>
              <Link
                className="link text-green-500"
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </Link>
            </li>
            <li>
              <Link
                className="link text-green-500"
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </Link>
            </li>
            <li>
              <Link
                className="link text-green-500"
                href="https://trpc.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tRPC
              </Link>
            </li>
          </ul>
          <ul className="list-disc text-green-500">
            <li>
              <Link
                className="link text-green-500"
                href="https://www.prisma.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prisma
              </Link>
            </li>
            <li>
              <Link
                className="link text-green-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                className="link text-green-500"
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
