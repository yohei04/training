import axios from 'axios';
import React, { FC, Suspense } from 'react';
import { useQuery } from 'react-query';

import { Comment } from '../../types/comment';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { CommentList } from '../comment/CommentList';

type Props = {
  userId: number;
};

export const PostList2: FC<Props> = ({ userId }) => {
  // const { data: posts } = useQuery(['posts'], getPosts, {
  //   suspense: true,
  // });

  const { data: posts } = useQuery(['userPosts', userId], () => getUserPosts(userId), {
    suspense: true,
    enabled: !!userId,
  });

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Suspense fallback={<h1>投稿をローディング中です........</h1>}>
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
        </Suspense>
      </div>
    </div>
  );
};

// const getPosts = async () => {
//   const data = await axios.get<Post[]>('http://localhost:4000/posts');
//   return data.data;
// };

const getUserPosts = async (userId: number | undefined) => {
  const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  return data.data;
};
