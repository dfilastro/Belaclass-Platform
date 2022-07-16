import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';

import styles from './home.module.scss';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (user) {
    return (
      <>
        <Head>
          <title>Bela Class | By Gabriela Negro</title>
        </Head>

        <div>
          Welcome {user.name}! <a href='/api/auth/logout'>Logout</a>
        </div>

        {/* <main className={styles.contentContainer}>Hello World</main> */}
      </>
    );
  }
}
