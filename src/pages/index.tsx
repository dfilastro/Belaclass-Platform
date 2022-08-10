import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';

import styles from './home.module.scss';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  // const { user, error, isLoading } = useUser();

  // if (user) {
  //   return (
  //     <>
  //       <Head>
  //         <title>Bela Class | By Gabriela Negro</title>
  //       </Head>

  //       <div>
  //         Welcome {user.name}! <a href='/api/auth/logout'>Logout</a>
  //       </div>

  //       {/* <main className={styles.contentContainer}>Hello World</main> */}
  //     </>
  //   );
  // }

  return <div>Um curso completo de automaquiagem por apenas {product.amount}</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LLalDIvgFOa4HOgivjw3pwk', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount! / 100),
  };

  return {
    props: { product },
  };
};
