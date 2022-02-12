import '../assets/styles/style.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/layouts/NavBar';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
