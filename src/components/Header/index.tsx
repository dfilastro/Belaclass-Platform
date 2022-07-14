import { Button } from '../Button';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <p className={styles.logoContainer}>
        Bela
        <span>class</span>
      </p>
      <nav className={styles.nav}>
        <Button description='Comprar' route='payment' withBorderNotFilled={false} />
        <Button description='Acessar' route='login' withBorderNotFilled={true} />
      </nav>
    </header>
  );
}
