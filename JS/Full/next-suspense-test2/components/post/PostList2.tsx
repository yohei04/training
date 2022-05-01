import axios from 'axios';
import React, {
  ChangeEvent,
  FC,
  Suspense,
  useCallback,
  useDeferredValue,
  useMemo,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import { sleep } from '../../function/sleep';
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

  const [searchWord, setSearchWord] = useState('');
  const deferredValue = useDeferredValue(searchWord);

  const filteredPosts = useMemo(() => {
    return posts?.filter((post) => post.title.includes(deferredValue));
  }, [posts, deferredValue]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  }, []);

  console.log('PostList2 render', userId);

  return (
    <section>
      <div>
        <input
          className="w-full border-2"
          id="searchWord"
          name="searchWord"
          placeholder="検索ワード"
          type="text"
          value={searchWord}
          onChange={handleSearch}
        />
      </div>
      <div className="mt-4">
        {/* <Suspense fallback={<h1>投稿をローディング中です........</h1>}> */}
        <Suspense fallback={<div className="h-32 bg-yellow-100 "></div>}>
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
        </Suspense>
      </div>
    </section>
  );
};

const getUserPosts = async (userId: number | undefined) => {
  const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  // const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  await sleep(2000);
  return data.data.reverse();
};
