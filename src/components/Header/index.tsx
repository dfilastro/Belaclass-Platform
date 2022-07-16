import { useUser } from '@auth0/nextjs-auth0';
import { Button } from '../Button';
import styles from './styles.module.scss';

export function Header() {
  const { user, error, isLoading } = useUser();

  if (user) {
    return (
      <header className={styles.container}>
        <p className={styles.logoContainer}>
          Bela
          <span>class</span>
        </p>
        <nav className={styles.nav}>
          <Button description='Logout' route='/api/auth/logout' withBorderNotFilled={true} />
          <img className={styles.userImage} src={`${user.picture}`} alt='' />
        </nav>
      </header>
    );
  }

  return (
    <header className={styles.container}>
      <p className={styles.logoContainer}>
        Bela
        <span>class</span>
      </p>
      <nav className={styles.nav}>
        <Button description='Acessar' route='/api/auth/login' withBorderNotFilled={true} />
      </nav>
    </header>
  );
}
