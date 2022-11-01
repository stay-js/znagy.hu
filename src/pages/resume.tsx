import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@layouts/Layout';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="relative text-xl font-semibold uppercase tracking-widest text-neutral-900 after:block after:h-[2px] after:w-full after:bg-neutral-400 dark:text-neutral-100">
    {children}
  </h2>
);

const Resume: NextPage = () => (
  <Layout
    path="/resume"
    title="Resume - Zétény Nagy"
    desc=" I consider myself as a Web Developer, but I am interested in several areas of IT, eg. Web Development, Data modeling / structuring, DevOps, Cloud and Networking."
  >
    <main className="content flex flex-col gap-10 pt-8 text-neutral-600 dark:text-neutral-300">
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold text-black dark:text-white">Zétény Nagy</h1>
          <Link
            className="link block w-fit text-2xl font-medium"
            href="https://github.com/stay-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/stay-js
          </Link>
        </div>

        <p className="max-w-[60ch] text-xl">
          I consider myself as a Web Developer, but I am interested in several areas of IT, eg. Web
          Development, Data modeling / structuring, DevOps, Cloud and Networking.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle>Skills</SectionTitle>

        <div className="grid gap-4 md:grid-cols-3 md:gap-0">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-neutral-900 dark:text-neutral-100">
              Languages & Libraries
            </p>
            <ul>
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

          <div className="flex flex-col gap-1">
            <p className="font-bold text-neutral-900 dark:text-neutral-100">Technologies</p>
            <ul>
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

          <div className="flex flex-col gap-1">
            <p className="font-bold text-neutral-900 dark:text-neutral-100">Platforms</p>
            <ul>
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
        <SectionTitle> Education</SectionTitle>

        <div className="grid grid-cols-[1fr_2fr] gap-8">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Elementary School
          </h3>

          <div className="flex flex-col gap-2">
            <div>
              <h4 className="font-bold text-black dark:text-white">Újlaki Általános Iskola</h4>
              <p>01/09/2013 - 15/06/2021</p>
            </div>

            <div>
              <p>
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
          </div>

          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            High school
          </h3>

          <div className="flex flex-col gap-2">
            <div>
              <h4 className="font-bold text-black dark:text-white">
                BMSzC Neumann János Informatikai Technikum
              </h4>
              <p>01/09/2021 - Current</p>
            </div>

            <div>
              <p>
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
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle>Hobbies</SectionTitle>

        <div>
          <p>My hobbies are sports, video games, and of course IT, especially Web Dev.</p>
          <p>
            I do Kyokushin Karate (2.kyu - brown belt) since 2013, and I started doing Thai-Boxing
            (Muay Thai) in 2021.
          </p>
        </div>
      </section>
    </main>
  </Layout>
);

export default Resume;
