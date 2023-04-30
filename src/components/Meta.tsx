import Head from 'next/head';
import { keywords } from '@constants/keywords';

export const Meta: React.FC<{
  path: string;
  title: string;
  desc: string;
}> = ({ path, title, desc }) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <link rel="icon" href="/favicon.ico" />

    <meta name="author" content="Zétény Nagy" />

    <meta name="keywords" content={keywords.join(', ')} />

    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Zétény Nagy" />

    <meta name="twitter:card" content="summary" />
    <meta property="twitter:domain" content="znagy.hu" />

    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <meta name="rating" content="general" />

    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />

    <meta name="description" content={desc} />
    <meta property="og:description" content={desc} />
    <meta name="twitter:description" content={desc} />

    <meta name="url" content={`https://znagy.hu${path}`} />
    <meta property="og:url" content={`https://znagy.hu${path}`} />
    <meta property="twitter:url" content={`https://znagy.hu${path}`} />
  </Head>
);
