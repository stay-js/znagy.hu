import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { withTRPC } from '@trpc/next';
import superjson from 'superjson';
import { MantineProvider } from '@mantine/core';
import type { AppRouter } from '../server/router';
import Nav from '../components/Nav';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="author" content="stay" />
      <meta
        name="keywords"
        content="stay, Zétény, Nagy, Zétény Nagy, Full stack dev, Full stack developer, IT, IT Student, Kyokushin, Kyokushin Karate, Muay Thai, Thai Box, Thai-Boxing, Hungary, JavaScript, TypeScript, Node.js, Express, React, Next.js, Sass, SCSS, Tailwind CSS, TailwindCSS, tailwind, Mantine, tRPC, MySQL, Postgres, PostgreSQL,
          PlanetScale, Railway, Bootstrap, t3-stack, MongoDB, HTML, HTML5, CSS, CSS3, Nodemailer, Vercel, Netlify, Heroku, Linode, DigitalOcean, Vercel, Discord.js, REGALE Energy Zrt., Anything, Resume, Education, Skills, Hobbies, IT, Web Development, Web Developer, Data modeling, Data structuring, DevOps, Cloud, Networking,
          Languages & Libraries, Technologies, Platforms, School, Újlaki Általános Iskola, BMSzC Neumann János Informatikai Technikum"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" key="og_type" />
      <meta property="og:site_name" content="Zétény Nagy" key="site_name" />
      <meta property="og:image" content="https://znagy.hu/images/me.png" key="image" />
      <meta name="theme-color" content="#0f172a" />

      <meta name="url" content={`https://znagy.hu${useRouter().pathname}`} />
      <meta property="og:url" content={`https://znagy.hu${useRouter().pathname}`} />
      <meta property="twitter:url" content={`https://znagy.hu${useRouter().pathname}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="znagy.hu" />
      <meta name="twitter:image" content="https://znagy.hu/images/me.png" />

      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="rating" content="general" />
    </Head>

    <MantineProvider theme={{ primaryColor: 'green' }}>
      <Nav />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default withTRPC<AppRouter>({
  config() {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      transformer: superjson,
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  ssr: false,
})(App);
