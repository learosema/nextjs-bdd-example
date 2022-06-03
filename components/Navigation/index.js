
import styles from './navigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation = () => {
  const { pathname } = useRouter();
  return (
    <nav class={styles.navigation} aria-label="Top navigation" data-test-id="navigation">
      <ul role="list">
        <li>
          <Link href="/">
            <a aria-current={pathname == '/' ? 'page' : null}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" >
            <a aria-current={pathname == '/about' ? 'page' : null}>About Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
