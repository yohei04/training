import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href={'/users'}>
            <a>ユーザー一覧</a>
          </Link>
        </li>
        <li>
          <Link href={'/photos'}>
            <a>写真一覧</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
