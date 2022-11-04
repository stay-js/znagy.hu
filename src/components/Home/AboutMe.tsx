import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

const Anchor: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
  <Link className="link text-green-500" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

const AboutMe: React.FC = () => (
  <section className="content relative flex flex-col gap-4" id="about">
    <SectionTitle title="About Me" number={1} />

    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="self-center lg:order-2">
        <Image
          className="relative h-64 w-64 border-t-8 border-l-8 border-green-500 transition-all duration-300 hover:-rotate-6 focus:-rotate-6"
          src="/images/me.jpg"
          alt="me"
          width={720}
          height={720}
        />
      </div>

      <div className="flex w-full flex-col gap-4 lg:w-3/5">
        <p>Glad you are here! </p>
        <p>
          My name is Zétény Nagy AKA stay, I&rsquo;m from Budapest, Hungary. Currently studying in{' '}
          <Anchor href="http://njszg.hu/">BMSzC Neumann János Informatikai Technikum</Anchor>.
        </p>
        <p>
          My intrest in web development started long ago, back in my early elementary school days.
          My favourite subject is maths since first grade. Also I love doing Kyokushin Karate and
          Thai-Boxing (Muay Thai). I will improve my coding and fighting skills especially because I
          want to be a Full Stack web developer...
        </p>
        <p>
          If you are interested check out my <Anchor href="/setup">setup</Anchor>.
        </p>
        <p>Favourite technologies/things I use:</p>
        <div className="ml-8 flex gap-20">
          <ul className="list-disc text-green-500">
            <li>
              <Anchor href="https://www.typescriptlang.org/">TypeScript</Anchor>
            </li>
            <li>
              <Anchor href="https://nextjs.org/">Next.js</Anchor>
            </li>
            <li>
              <Anchor href="https://trpc.io/">tRPC</Anchor>
            </li>
          </ul>
          <ul className="list-disc text-green-500">
            <li>
              <Anchor href="https://www.prisma.io/">Prisma</Anchor>
            </li>
            <li>
              <Anchor href="https://tailwindcss.com/">Tailwind CSS</Anchor>
            </li>
            <li>
              <Anchor href="https://vercel.com/">Vercel</Anchor>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
