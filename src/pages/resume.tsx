import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@layouts/Layout';

const Resume: NextPage = () => (
  <Layout
    path="/resume"
    title="Resume - Zétény Nagy"
    desc=" I consider myself as a Web Developer, but I am interested in several areas of IT, eg. Web Development, Data modeling / structuring, DevOps, Cloud and Networking."
  >
    <main className="content flex flex-col gap-10">
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Zétény Nagy</h1>
          <Link
            className="link block w-fit text-2xl font-medium text-gray-600 dark:text-neutral-200"
            href="https://github.com/stay-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/stay-js
          </Link>
        </div>

        <p className="max-w-[60ch] text-xl text-neutral-800">
          I consider myself as a Web Developer, but I am interested in several areas of IT, eg. Web
          Development, Data modeling / structuring, DevOps, Cloud and Networking.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="relative text-xl font-semibold uppercase tracking-widest after:block after:h-[2px] after:w-full after:bg-gray-600">
          Skills
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-0">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-neutral-900">Languages & Libraries</p>
            <ul className="text-neutral-600 dark:text-neutral-300">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>React</li>
              <li>Astro</li>
              <li>Vite</li>
              <li>tRPC</li>
              <li>Prisma</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
              <li>Headless UI</li>
              <li>Mantine</li>
              <li>Bootstrap</li>
              <li>Sass/SCSS</li>
              <li>CSS3</li>
              <li>HTML5</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-neutral-900">Technologies</p>
            <ul className="text-neutral-600 dark:text-neutral-300">
              <li>Node.js</li>
              <li>Yarn</li>
              <li>NPM</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-neutral-900">Platforms</p>
            <ul className="text-neutral-600 dark:text-neutral-300">
              <li>DigitalOcean</li>
              <li>Linode</li>
              <li>Vercel</li>
              <li>Netlify</li>
              <li>Railway</li>
              <li>PlanetScale</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="relative text-xl font-semibold uppercase tracking-widest after:block after:h-[2px] after:w-full after:bg-gray-600">
          Education
        </h2>
        <div className="grid grid-cols-[1fr_2fr] gap-8">
          <h3 className="text-lg font-semibold">Elementary School</h3>
          <div>
            <h4 className="font-semibold">Újlaki Általános Iskola</h4>
            <p className="mb-2 text-neutral-400">01/09/2013 - 15/06/2021</p>
            <p className="text-neutral-600">
              <b>Address:</b> Ürömi utca 64, 1023, Budapest, Hungary
            </p>
            <Link
              className="link text-green-500"
              href="http://ujlaki.ultranet.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ujlaki.ultranet.hu
            </Link>
          </div>

          <h3 className="text-lg font-semibold">High school</h3>
          <div>
            <h4 className="font-semibold">BMSzC Neumann János Informatikai Technikum</h4>
            <p className="mb-2 text-neutral-400"> 01/09/2021 - Current</p>
            <p className="text-neutral-600">
              <b>Address:</b> Kerepesi út 124, 1144, Budapest, Hungary
            </p>
            <Link
              className="link text-green-500"
              href="http://www.njszki.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.njszki.hu
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="relative text-xl font-semibold uppercase tracking-widest after:block after:h-[2px] after:w-full after:bg-gray-600">
          Hobbies
        </h2>

        <p className="text-neutral-600">
          My hobbies are sports, video games, and of course IT, especially Web Dev.
        </p>
        <p className="text-neutral-600">
          I do Kyokushin Karate (2.kyu - brown belt) since 2013, and I started doing Thai-Boxing
          (Muay Thai) in 2021.
        </p>
      </section>
    </main>
  </Layout>
);

export default Resume;
