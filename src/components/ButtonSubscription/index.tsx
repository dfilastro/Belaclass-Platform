import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';

export function ButtonSubscription() {
  async function handleSubscription() {
    try {
      const response = await api.post('/stripe-subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <button onClick={handleSubscription} className={`${styles.descContainer}`}>
      Assinar
    </button>
  );
}
