import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <Menu />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
