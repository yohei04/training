import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { Post } from '../../types/post';
import { CommentList } from '../comment';
import { CommentSection } from '../comment/CommentSection';
import { PostItem2 } from './PostItem2';

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
    <section>
      <ul>
        <li>
          {posts?.map((post) => (
            <PostItem2 key={post.id} post={post}>
              <CommentSection>
                <CommentList postId={post.id} />
              </CommentSection>
            </PostItem2>
          ))}
        </li>
      </ul>
    </section>
  );
};

const getUserPosts = async (userId: number | undefined) => {
  // const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return data.data;
};
