import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { PostEntity } from '../../__generated__';
import { sleep } from '../../function/sleep';
import { CommentList, CommentSection } from '../comment';
import { PostItem2 } from './PostItem2';

type Props = {
  userId: number;
  deferredSearchWord: string;
};

export const PostList2: FC<Props> = ({ userId, deferredSearchWord }) => {
  const { data: posts } = useQuery(
    ['userPosts', userId, deferredSearchWord],
    () => getUserPosts(userId, deferredSearchWord),
    {
      suspense: true,
      enabled: !!userId,
    }
  );

  // const filteredPosts = useMemo(() => {
  //   return posts?.filter((post) => post.title.includes(deferredSearchWord));
  // }, [posts, deferredSearchWord]);

  return (
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
  );
};

const getUserPosts = async (userId: number, searchString: string) => {
  if (searchString === 'aa') throw new Error('「aa」で検索するとエラーになります。');
  const data = await axios.get<PostEntity[]>(
    `http://localhost:4000/posts/filtered-posts/${userId}?searchString=${searchString}`
  );
  // const data = await axios.get<PostEntity[]>(`http://localhost:4000/posts/users/${userId}`);
  // const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  // const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  await sleep(500);
  return data.data.reverse();
};
