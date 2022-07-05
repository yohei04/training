import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <ul>
        <li className="text-green-500 text-5xl mb-8">
          <Link href="/user">
            <a>ユーザー一覧</a>
          </Link>
        </li>
        <li className="text-green-500 text-5xl mb-8">
          <Link href="/blog">
            <a>ブログ一覧</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
