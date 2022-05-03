import axios from 'axios';
import React, { FC, useMemo } from 'react';
import { useQuery } from 'react-query';

import { sleep } from '../../function/sleep';
import { Post } from '../../types/post';
import { CommentList, CommentSection } from '../comment';
import { PostItem2 } from './PostItem2';

type Props = {
  userId: number;
  deferredSearchWord: string;
};

export const PostList2: FC<Props> = ({ userId, deferredSearchWord }) => {
  const { data: posts } = useQuery(['userPosts', userId], () => getUserPosts(userId), {
    suspense: true,
    enabled: !!userId,
  });

  const filteredPosts = useMemo(() => {
    return posts?.filter((post) => post.title.includes(deferredSearchWord));
  }, [posts, deferredSearchWord]);

  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {filteredPosts?.map((post) => (
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
  );
};

const getUserPosts = async (userId: number | undefined) => {
  const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  // const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  await sleep(2000);
  return data.data.reverse();
};
