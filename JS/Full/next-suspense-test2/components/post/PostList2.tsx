import axios from 'axios';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { Post } from '../../types/post';
import { CommentList } from '../comment';
import { CommentSection } from '../comment/CommentSection';
import { Spinner } from '../spinner';
import { PostItem2 } from './PostItem2';

type Props = {
  userId: number;
};

export const PostList2: FC<Props> = ({ userId }) => {
  const { data: posts } = useQuery(['userPosts', userId], () => getUserPosts(userId), {
    suspense: true,
    enabled: !!userId,
  });

  console.log({ posts });

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation(() => createPost(userId, title, body), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['userPosts', userId]);
      // queryClient.setQueryData(['userPosts', userId], data);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId || !title || !body) return;
    await mutation.mutate();
    setTitle('');
    setBody('');
  };

  // if (mutation.isLoading) return <div>作成中....</div>;

  console.log('PostList2 render', userId);

  return (
    <section className={clsx('w-[30rem]', { 'opacity-50': mutation.isLoading })}>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label className="block" htmlFor="title">
              タイトル:
            </label>
            <input
              className="w-full border-2"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div>
            <label className="block" htmlFor="body">
              本文:
            </label>
            <textarea
              className="w-full border-2"
              id="body"
              value={body}
              onChange={(e) => setBody(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="text-right">
          <button className="bg-lime-300 px-4 py-1" type="submit">
            {mutation.isLoading ? <Spinner /> : '投稿'}
          </button>
        </div>
      </form>
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
  const data = await axios.get<Post[]>(`http://localhost:4000/users/${userId}/posts`);
  // const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return data.data.reverse();
};

const createPost = async (userId: number, title: string, body: string) => {
  const data = await axios.post<Post>('http://localhost:4000/posts', { userId, title, body });
  return data.data;
};
