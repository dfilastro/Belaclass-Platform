import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { ButtonSubscription } from '../../components/ButtonSubscription';

export default function AccessPage() {
  // const { user, error, isLoading } = useUser();

  // if (!user) {
  //   return (
  //     <>
  //       <div>Conteúdo do curso exclusivo para assinantes</div>
  //       <ButtonSubscription />
  //     </>
  //   );
  // }

  return (
    <>
      <div>Complete seu pagamento para acessar</div>;
    </>
  );
}

//         const { sessionId } = response.data;

//         const stripe = await getStripeJs();

//         stripe?.redirectToCheckout({ sessionId });
//       } catch (err) {
//         alert(err);
//       }
//     }

//     return (
//       <button onClick={handleSubscription} className={`${styles.descContainer}`}>
//         Assinar
//       </button>
//     );
//   }

// getServerSideProps{
// const router = useRouter();

//     if(!session.activeSubscription){
//         return {
//             redirect:{
//                 destination: '/',
//                 permanent: false,
//             }
//         }
//     }

// if(session.activeSubscription){
//     router.push('/posts')
//     return
// }

// }
