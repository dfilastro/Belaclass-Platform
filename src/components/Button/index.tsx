import Link from 'next/link';
import styles from './styles.module.scss';

interface ButtonProps {
  description: string;
  route: string;
  withBorderNotFilled: boolean;
}

export function Button({ description, route, withBorderNotFilled }: ButtonProps) {
  return (
    <Link href={route}>
      <a className={`${styles.descContainer} ${withBorderNotFilled && styles.withBorderNotFilled}`}>
        {description}
      </a>
    </Link>
  );
}
