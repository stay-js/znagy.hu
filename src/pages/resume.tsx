import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Resume: NextPage = () => (
  <>
    <Head>
      <title>Resume - Zétény Nagy</title>
      <meta property="og:title" content="Resume - Zétény Nagy" key="title" />
      <meta name="twitter:title" content="Resume - Zétény Nagy" />

      <meta
        name="description"
        content="I consider myself as a Web Developer, but I am interested in
          several areas of IT, eg. Web Development, Data modeling /
          structuring, DevOps, Cloud and Networking."
      />
      <meta
        property="og:description"
        content="I consider myself as a Web Developer, but I am interested in
          several areas of IT, eg. Web Development, Data modeling /
          structuring, DevOps, Cloud and Networking."
      />
      <meta
        name="twitter:description"
        content="I consider myself as a Web Developer, but I am interested in
          several areas of IT, eg. Web Development, Data modeling /
          structuring, DevOps, Cloud and Networking."
      />
    </Head>

    <main>
      <div className="content">
        <section>
          <h1 className="my-3 text-5xl font-bold">Zétény Nagy</h1>
          <Link href="https://github.com/stay-js">
            <a
              className="link mb-12 block w-fit text-2xl font-medium text-gray-600 dark:text-neutral-200"
              target="_blank"
            >
              github.com/stay-js
            </a>
          </Link>
          <p className="max-w-[60ch] text-xl text-neutral-800">
            I consider myself as a Web Developer, but I am interested in several areas of IT, eg.
            Web Development, Data modeling / structuring, DevOps, Cloud and Networking.
          </p>
        </section>

        <section>
          <h1 className="relative mt-10 mb-4 text-xl font-semibold uppercase tracking-widest after:block after:h-[2px] after:w-full after:bg-gray-600">
            Skills
          </h1>
          <div className="grid gap-4 md:grid-cols-3 md:gap-0">
            <div>
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
            <div>
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

            <div>
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

        <section>
          <h1 className="relative mt-10 mb-4 text-xl font-semibold uppercase tracking-widest after:block after:h-[2px] after:w-full after:bg-gray-600">
            Education
          </h1>
          <div className="grid gap-8" style={{ gridTemplateColumns: '1fr 2fr' }}>
            <h3 className="text-lg font-semibold">Elementary School</h3>
            <div>
              <h4 className="font-semibold">Újlaki Általános Iskola</h4>
              <p className="mb-2 text-neutral-400">01/09/2013 - 15/06/2021</p>
              <p className="m-0 text-neutral-600">
                <b>Address:</b> Ürömi utca 64, 1023, Budapest, Hungary
              </p>
              <Link href="http://ujlaki.ultranet.hu/">
                <a className="link text-green-500" target="_blank">
                  ujlaki.ultranet.hu
                </a>
              </Link>
            </div>

            <h3 className="text-lg font-semibold">High school</h3>
            <div>
              <h4 className="font-semibold">BMSzC Neumann János Informatikai Technikum</h4>
              <p className="mb-2 text-neutral-400"> 01/09/2021 - Current</p>
              <p className="m-0 text-neutral-600">
                <b>Address:</b> Kerepesi út 124, 1144, Budapest, Hungary
              </p>
              <Link href="http://www.njszki.hu/">
                <a className="link text-green-500" target="_blank">
                  www.njszki.hu
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h1 className="relative mt-10 mb-4 text-xl font-semibold uppercase tracking-widest after:block after:h-[2px] after:w-full after:bg-gray-600">
            Hobbies
          </h1>

          <p className="m-0 text-neutral-600">
            My hobbies are sports, video games, and of course IT, especially Web Dev.
          </p>
          <p className="m-0 text-neutral-600">
            I do Kyokushin Karate (2.kyu - brown belt) since 2013, and I started doing Thai-Boxing
            (Muay Thai) in 2021.
          </p>
        </section>
      </div>
    </main>
  </>
);

export default Resume;
