import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { Post } from '../../types/post';
import { CommentList } from '../comment';
import { CommentSection } from '../comment/CommentSection';

type Props = {
  userId: number;
};

export const PostList2: FC<Props> = ({ userId }) => {
  const { data: posts } = useQuery(['userPosts', userId], () => getUserPosts(userId), {
    suspense: true,
    enabled: !!userId,
  });

  console.log('PostList2 render', userId);

  return (
    <div>
      <ul>
        <li>
          {posts?.map((p) => (
            <div key={p.id} style={{ background: 'lightyellow', padding: '1rem', marginBottom: '1rem' }}>
              <p>タイトル：{p.title}</p>
              <p>本文：</p>
              <p>{p.body}</p>
              <CommentSection>
                <CommentList postId={p.id} />
              </CommentSection>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

const getUserPosts = async (userId: number | undefined) => {
  // const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return data.data;
};
