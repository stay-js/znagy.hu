import type { NextPage } from 'next';
import { Anchor } from '~/components/anchor';
import { createMetadata } from '~/utils/create-metadata';

export const metadata = createMetadata({
  path: '/resume',
  title: 'Resume',
  description:
    'I consider myself a Full-stack Web Developer, but I am interested in several areas of IT, eg. Front-end Development, Back-end Development, DevOps, Cloud, and Networking.',
});

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="relative text-xl font-semibold uppercase tracking-widest text-neutral-900 after:block after:h-0.5 after:w-full after:bg-neutral-400 dark:text-neutral-100">
    {children}
  </h2>
);

const Page: NextPage = () => (
  <main className="content flex flex-col gap-10 pt-8 text-neutral-600 dark:text-neutral-300">
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-black dark:text-white">Zétény Nagy</h1>
        <Anchor
          className="w-fit text-2xl font-medium"
          href="https://github.com/stay-js"
          target="_blank"
        >
          github.com/stay-js
        </Anchor>
      </div>

      <p className="max-w-prose text-xl">
        I consider myself a Full-stack web developer with a keen interest spanning various IT
        domains, including Front-end development, Back-end development, DevOps, Cloud computing, and
        Networking.
      </p>
    </section>

    <section className="flex flex-col gap-4">
      <SectionTitle>Work Experience</SectionTitle>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="font-bold text-black dark:text-white">
              Full-stack Web Developer at REGALE Energy Zrt.
            </h4>
            <p>
              <b>Address:</b> Krisztina krt. 99, 1016, Budapest, Hungary
            </p>
            <p>
              <b>Web:</b>{' '}
              <Anchor className="text-green-500" href="https://www.regale.hu" target="_blank">
                regale.hu
              </Anchor>
            </p>
          </div>

          <div>
            <ul className="text-neutral-900 dark:text-neutral-100 [&_li]:before:content-['-_']">
              <li>
                Creation and maintenance of{' '}
                <Anchor className="text-green-500" href="https://www.regale.hu" target="_blank">
                  regale.hu
                </Anchor>{' '}
                website
              </li>
              <li>
                Creation and maintenance of{' '}
                <Anchor className="text-green-500" href="https://admin.regale.hu" target="_blank">
                  admin.regale.hu
                </Anchor>{' '}
                web application
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h4 className="font-bold text-black dark:text-white">
              Catering staff / Runner / Set up at Nebuló Meló (Rampart Public Catering, SPORTFIVE
              MPA, Stadion Event)
            </h4>
            <p>
              <b>Web:</b>{' '}
              <Anchor className="text-green-500" href="https://nebulomelo.hu" target="_blank">
                nebulomelo.hu
              </Anchor>
            </p>
          </div>

          <div>
            <p>
              At Puskás Aréna, MVM Dome, Groupama Aréna, Bozsik Aréna, National Athletics Center:
            </p>
            <ul className="text-neutral-900 dark:text-neutral-100 [&_li]:before:content-['-_']">
              <li>Counter service (cashiering, back-end tasks)</li>
              <li>
                Performing runner / set up tasks (filling concession stants before/during events,
                moving goods, dismantling)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <SectionTitle>Skills</SectionTitle>

      <div className="grid gap-4 md:grid-cols-3 md:gap-0">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">Languages & Libraries</p>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Rust</li>
            <li>C#</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Auth.js (NextAuth.js)</li>
            <li>React Query</li>
            <li>Astro</li>
            <li>Vite</li>
            <li>tRPC</li>
            <li>Prisma</li>
            <li>Express.js</li>
            <li>Tailwind CSS</li>
            <li>Headless UI</li>
            <li>Radix UI</li>
            <li>shadcn/ui</li>
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
            <li>NPM</li>
            <li>PNPM</li>
            <li>Yarn</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitHub CI/CD</li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">Platforms</p>
          <ul>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>PlanetScale</li>
            <li>Upstash</li>
            <li>Aiven</li>
            <li>Railway</li>
            <li>DigitalOcean</li>
            <li>Linode</li>
            <li>Heroku</li>
            <li>Render</li>
            <li>Cloudflare</li>
            <li>AWS Services (Lambda, EC2, S3, SES, etc.)</li>
            <li>Serverless Framework</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <SectionTitle> Education</SectionTitle>

      <div className="grid grid-cols-[1fr_2fr] gap-8">
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
            <Anchor className="text-green-500" href="http://www.njszki.hu/" target="_blank">
              njszki.hu
            </Anchor>
          </div>
        </div>

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
            <Anchor className="text-green-500" href="https://www.ujlakischool.org/" target="_blank">
              ujlakischool.org
            </Anchor>
          </div>
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <SectionTitle>Hobbies</SectionTitle>

      <div>
        <p>
          In my free time I enjoy engaging is sports, also I&lsquo;m deeply passionate about IT,
          with a particular focus on Web Development.
        </p>
        <p>
          I&lsquo;ve been practicing Kyokushin Karate since 2013, where I hold a brown belt (2nd
          kyu), and more recently, I&lsquo;ve been training in Muay Thai since 2021.
        </p>
      </div>
    </section>

    <Anchor
      href="https://uploads.znagy.hu/oneletrajz-europass.pdf"
      target="_blank"
      className="w-fit font-bold text-black dark:text-white"
    >
      Magyar nyelvű Europass önéletrajz
    </Anchor>
  </main>
);

export default Page;
