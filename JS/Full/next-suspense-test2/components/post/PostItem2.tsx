import axios from 'axios';
import { FC, ReactNode } from 'react';
import { useQuery } from 'react-query';

import { Like } from '../../types/like';
import { Post } from '../../types/post';

type Props = {
  post: Post;
  children: ReactNode;
};

export const PostItem2: FC<Props> = ({ post, children }) => {
  // const { data: likes } = useQuery(['likes', post.id], () => getLikes(post.id), {
  //   suspense: true,
  //   enabled: !!post.id,
  // });

  return (
    <div style={{ background: 'lightyellow', padding: '1rem', marginBottom: '1rem' }}>
      <p>タイトル：{post.title}</p>
      <p>本文：</p>
      <p>{post.body}</p>
      {/* <p>{likes?.length}</p> */}
      {children}
    </div>
  );
};

// const getLikes = async (postId: number) => {
//   const data = await axios.get<Like[]>(`http://localhost:4000/posts/${postId}/likes`);
//   return data.data;
// };
