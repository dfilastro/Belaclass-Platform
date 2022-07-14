import Link from 'next/link';
import styles from './styles.module.scss';

interface DescriptioProps {
  description: string;
  route: string;
  withBorderNotFilled: boolean;
}

export function Button({ description, route, withBorderNotFilled }: DescriptioProps) {
  return (
    <Link href={route}>
      <a className={`${styles.descContainer} ${withBorderNotFilled && styles.withBorderNotFilled}`}>
        {description}
      </a>
    </Link>
  );
}
