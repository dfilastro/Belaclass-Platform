import { ButtonSubmit } from '../../components/ButtonSubmit';
import styles from './styles.module.scss';
import Image from 'next/image';
import bannerImg from '../../../public/pngwing.com.png';
import bannerImg2 from '../../../public/image2.png';

export default function Login() {
  return (
    <div className={styles.container}>
      <section className={styles.loginContainer}>
        <p>Welcome</p>
        <div>
          <input type='email' placeholder='Usuário' />
        </div>
        <div>
          <input type='password' placeholder='Senha' />
        </div>
        <a>Esqueceu a senha?</a>

        <ButtonSubmit />
      </section>
      <div className={styles.bannerContainer}>
        <Image src={bannerImg2} className={styles.imageContainer} height='650rem' width='350rem' />
      </div>
    </div>
  );
}
