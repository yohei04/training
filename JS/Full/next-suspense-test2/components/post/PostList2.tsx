import axios from 'axios';
import React, { FC, Suspense } from 'react';
import { useQuery } from 'react-query';

import { Post } from '../../types/post';
import { CommentList } from '../comment/CommentList';

type Props = {
  userId: number;
};

export const PostList2: FC<Props> = ({ userId }) => {
  const { data: posts } = useQuery(['userPosts', userId], () => getUserPosts(userId), {
    suspense: true,
    enabled: !!userId,
  });

  return (
    <div>
      <ul>
        <li>
          {posts?.map((p) => (
            <div key={p.id} style={{ background: 'lightyellow', padding: '1rem', marginBottom: '1rem' }}>
              <p>タイトル：{p.title}</p>
              <p>本文：</p>
              <p>{p.body}</p>
              <Suspense fallback={<h1>コメントをローディング中です........</h1>}>
                <CommentList postId={p.id} />
              </Suspense>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

const getUserPosts = async (userId: number | undefined) => {
  const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  return data.data;
};
