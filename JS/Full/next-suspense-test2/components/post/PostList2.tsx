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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const queryClient = useQueryClient();
  const { mutate: updateFromResponse, isLoading } = useMutation(createPost, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries(['userPosts', userId]);
      queryClient.setQueryData<Post[]>(['userPosts', userId], (old) =>
        old ? [data.data, ...old] : []
      );
    },
    onError: (err) => {
      console.error('エラーが起きました', err);
    },
  });

  const { mutate: optimisticUpdates } = useMutation(createPost, {
    // When mutate is called:
    onMutate: async (newPost: CreatePostDTO) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(['userPosts', userId]);

      // Snapshot the previous value
      const previousPosts = queryClient.getQueryData(['userPosts', userId]);

      // Optimistically update to the new value
      queryClient.setQueryData<Post[]>(['userPosts', userId], (old) =>
        old ? [{ id: old.length + 1, ...newPost }, ...old] : []
      );
      // Return a context object with the snapshotted value
      return { previousPosts };
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newPost, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(['userPosts', userId], context?.previousPosts);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(['userPosts', userId]);
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId || !title || !body) return;
    if ((e.nativeEvent as any).submitter.name === 'post') {
      console.log('post');
      updateFromResponse({ userId, title, body });
    } else {
      console.log('optimistic');
      optimisticUpdates({ userId, title, body });
    }
    setTitle('');
    setBody('');
  };

  console.log('PostList2 render', userId);

  return (
    <section className={clsx('w-[30rem]', { 'opacity-50': isLoading })}>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label className="block" htmlFor="title">
              タイトル:
            </label>
            <input
              className="w-full border-2"
              id="title"
              name="title"
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
              name="body"
              value={body}
              onChange={(e) => setBody(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="text-right space-x-2">
          <button
            className={'bg-lime-300 px-4 py-1 disabled:opacity-50'}
            type="submit"
            name="post"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : '投稿'}
          </button>
          <button className="bg-green-200 px-4 py-1" type="submit" name="optimistic-updates-post">
            投稿(Optimistic Updates)
          </button>
        </div>
      </form>
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

type CreatePostDTO = {
  userId: number;
  title: string;
  body: string;
};

const createPost = (newPost: CreatePostDTO) => {
  return axios.post<Post>('http://localhost:4000/posts', newPost);
};
