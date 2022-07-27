import type { NextPage } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import { BsGlobe } from 'react-icons/bs';
import { FaGithub, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { SiRailway } from 'react-icons/si';
import { TbClipboardList } from 'react-icons/tb';

const Item: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a
        target="_blank"
        className="flex items-center justify-center gap-2 py-3 text-xl font-semibold text-center text-black transition-colors bg-white border rounded hover:bg-transparent hover:text-white"
      >
        {children}
      </a>
    </Link>
  </li>
);

const Links: NextPage = () => (
  <>
    <Head>
      <title>Links - Zétény Nagy</title>
      <meta property="og:title" content="Links- Zétény Nagy" key="title" />
      <meta name="twitter:title" content="Links - Zétény Nagy" />

      <meta name="description" content="Links - Zétény Nagy" />
      <meta property="og:description" content="Links - Zétény Nagy" />
      <meta name="twitter:description" content="Links - Zétény Nagy" />
    </Head>

    <style>
      {`
				nav {
					display: none !important;
				}
      `}
    </style>

    <main className="flex flex-col items-center gap-4 mt-8 w-[90%]">
      <Image
        src="/images/me.png"
        alt="me"
        width={256}
        height={256}
        className="w-40 rounded-full md:w-64"
      />

      <div className="text-center">
        <h1 className="mb-2 text-4xl font-semibold">Zétény Nagy</h1>
        <h2 className="text-lg font-medium text-neutral-300">
          Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.
        </h2>
      </div>

      <div className="w-full max-w-xl">
        <h3 className="mb-2 text-lg font-bold text-center">Main stuff:</h3>
        <ul className="flex flex-col w-full gap-4">
          <Item href="/">
            <BsGlobe size={18} />
            Website
          </Item>
          <Item href="/resume">
            <TbClipboardList size={18} />
            Resume
          </Item>
          <Item href="https://github.com/stay-js">
            <FaGithub size={18} />
            GitHub
          </Item>
          <Item href="https://twitter.com/stay0y0">
            <FaTwitter size={18} />
            Twitter
          </Item>
          <Item href="mailto:nagyzeteny6@gmail.com">
            <FaEnvelope size={18} />
            E-mail
          </Item>
          <Item href="https://www.youtube.com/channel/UCEGp1S_QTS3goAVX1cVw-tQ">
            <FaYoutube size={18} />
            YouTube
          </Item>
          <Item href="https://www.myprotein.hu/referrals.list?applyCode=NAGY-R1WO">
            MYPROTEIN Code: NAGY-R1WO
          </Item>
          <Item href="https://railway.app?referralCode=stay">
            <SiRailway size={18} />
            Railway.app Code: stay
          </Item>
        </ul>
      </div>

      <div className="w-full max-w-xl">
        <h3 className="mb-2 text-lg font-bold text-center">Projects:</h3>
        <ul className="flex flex-col w-full gap-4">
          <Item href="https://random.znagy.hu/">
            Stay Random (CUID, GUID, UUID, Number, Color, etc)
          </Item>
          <Item href="https://todo.znagy.hu/">Todo App</Item>
          <Item href="https://anything.znagy.hu/">Anything (Discord BOT)</Item>
          <Item href="https://flappy.znagy.hu/">Flappy Matykusz</Item>
          <Item href="https://github.com/stay-js/wake-up-dyno">Wake Up Dyno</Item>
        </ul>
      </div>
    </main>
  </>
);

export default Links;
