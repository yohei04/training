import axios from 'axios';
import clsx from 'clsx';
import React, {
  ChangeEvent,
  FC,
  Suspense,
  useCallback,
  useDeferredValue,
  useMemo,
  useState,
  useTransition,
} from 'react';
import { useQuery } from 'react-query';

import { Post } from '../../types/post';
import { CommentList, CommentSection } from '../comment';
import { PostItem2 } from './PostItem2';

let addedPosts: Post[] = [];
for (let i = 0; i < 1000; i++) {
  addedPosts.push({
    id: i,
    userId: 1,
    title: `title${i}`,
    body: `body${i}`,
  });
}

type Props = {
  userId: number;
};

export const PostList2: FC<Props> = ({ userId }) => {
  // const { data: posts } = useQuery(['userPosts', userId], () => getUserPosts(userId), {
  //   suspense: true,
  //   enabled: !!userId,
  // });

  const [searchWord, setSearchWord] = useState('');
  const deferredValue = useDeferredValue(searchWord);

  const [isPending, startTransition] = useTransition();

  const filteredPosts = useMemo(() => {
    return addedPosts?.filter((post) => post.title.includes(deferredValue));
  }, [deferredValue]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // startTransition(() => {
    setSearchWord(e.currentTarget.value);
    // });
  }, []);

  console.log('PostList2 render', userId);

  return (
    <section>
      {isPending && <div>ペンディング中</div>}
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
  // const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return data.data.reverse();
};
