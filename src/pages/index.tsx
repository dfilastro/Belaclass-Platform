import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bela Class | By Gabriela Negro</title>
      </Head>

      <main className={styles.contentContainer}>Hello World</main>
    </>
  );
};

export default Home;
