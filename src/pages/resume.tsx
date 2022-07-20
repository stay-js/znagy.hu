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

    <style>
      {`
        body {
          background: white;
        }
      `}
    </style>

    <main className="text-neutral-800">
      <div className="content">
        <section>
          <h1 className="my-3 text-5xl font-bold">Zétény Nagy</h1>
          <Link href="https://github.com/stay-js">
            <a
              className="block mb-12 text-2xl font-medium text-gray-600 w-fit link"
              target="_blank"
            >
              github.com/stay-js
            </a>
          </Link>
          <p className="text-xl text-neutral-800 max-w-[60ch]">
            I consider myself as a Web Developer, but I am interested in several areas of IT, eg.
            Web Development, Data modeling / structuring, DevOps, Cloud and Networking.
          </p>
        </section>

        <section>
          <h1 className="relative mt-10 mb-4 text-xl font-semibold tracking-widest uppercase after:bg-gray-600 after:w-full after:h-[2px] after:block">
            Skills
          </h1>
          <div className="grid gap-4 md:grid-cols-3 md:gap-0">
            <div>
              <p className="font-bold text-neutral-900">Languages & Libraries</p>
              <ul className="text-neutral-600">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React</li>
                <li>tRPC</li>
                <li>Prisma</li>
                <li>Express.js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Sass</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-neutral-900">Technologies</p>
              <ul className="text-neutral-600">
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
              <ul className="text-neutral-600">
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
          <h1 className="relative mt-10 mb-4 text-xl font-semibold tracking-widest uppercase after:bg-gray-600 after:w-full after:h-[2px] after:block">
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
                <a className="text-green-500 link" target="_blank">
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
                <a className="text-green-500 link" target="_blank">
                  www.njszki.hu
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h1 className="relative mt-10 mb-4 text-xl font-semibold tracking-widest uppercase after:bg-gray-600 after:w-full after:h-[2px] after:block">
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
