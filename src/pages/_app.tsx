import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { AuthProvider } from '../contexts/AuthContext';
// import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Menu />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
