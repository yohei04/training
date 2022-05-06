import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { PostContainer } from '../../components/post';

const UserDerailPage: NextPage = () => {
  const { query } = useRouter();
  if (!query.id) return <h1>queryが取得できてない</h1>;

  return <PostContainer queryId={query.id as string} />;
};

export default UserDerailPage;
