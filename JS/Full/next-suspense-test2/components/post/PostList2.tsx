import axios from 'axios';
import clsx from 'clsx';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { Post } from '../../types/post';
import { CommentList, CommentSection } from '../comment';
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
    <section className={clsx('w-[30rem]')}>
      <div className="mt-4">
        <ul className="space-y-4">
          {posts?.map((post) => (
            <li key={post.id}>
              <PostItem2 post={post}>
                <CommentSection>
                  <CommentList postId={post.id} />
                </CommentSection>
              </PostItem2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const getUserPosts = async (userId: number | undefined) => {
  const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  // const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return data.data.reverse();
};
