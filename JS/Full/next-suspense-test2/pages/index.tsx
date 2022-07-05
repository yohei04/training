import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/test'}>
            <a>テスト一覧</a>
          </Link>
        </li>
        <li>
          <Link href={'/photo'}>
            <a>写真一覧</a>
          </Link>
        </li>
        <li>
          <Link href={'/post'}>
            <a>投稿一覧（データネスト）</a>
          </Link>
        </li>
        <li>
          <Link href={'/user/1'}>
            <a>投稿一覧（ネストなし）</a>
          </Link>
        </li>
        <li>
          <Link href={'/tour'}>
            <a>ツアー一覧</a>
          </Link>
        </li>
        <li>
          <Link href={'/tour/add'}>
            <a>ツアー作成</a>
          </Link>
        </li>
        <li>
          <Link href={'/todo'}>
            <a>TODO一覧</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
