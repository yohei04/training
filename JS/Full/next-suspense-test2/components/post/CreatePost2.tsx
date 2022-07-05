import axios from 'axios';
import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { CreatePostDto, PostEntity } from '../../__generated__';
import { Spinner } from '../spinner';
import { usePost } from './';

type Props = {
  userId: number;
};

export const CreatePost2: FC<Props> = ({ userId }) => {
  const queryClient = useQueryClient();
  const { state, handleText, resetText } = usePost();

  const { mutate: updateFromResponse, isLoading } = useMutation(createPost, {
    onSuccess: (data) => {
      console.log({ data });
      // queryClient.invalidateQueries(['userPosts', userId]);
      queryClient.setQueryData<PostEntity[]>(['userPosts', userId], (old) =>
        old ? [data.data, ...old] : []
      );
    },
    onError: (err) => {
      console.error('エラーが起きました', err);
    },
  });

  const { mutate: optimisticUpdates } = useMutation(createPost, {
    // When mutate is called:
    onMutate: async (newPost: CreatePostDto) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(['userPosts', userId]);

      // Snapshot the previous value
      const previousPosts = queryClient.getQueryData(['userPosts', userId]);

      // Optimistically update to the new value
      queryClient.setQueryData<PostEntity[]>(['userPosts', userId], (old) =>
        old
          ? [
              {
                id: old.length + 1,
                createdAt: new Date() as unknown as string,
                updatedAt: new Date() as unknown as string,
                ...newPost,
              },
              ...old,
            ]
          : []
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
    if (!userId || !state.title || !state.body) return;
    if ((e.nativeEvent as any).submitter.name === 'post') {
      console.log('post');
      updateFromResponse({ userId, title: state.title, body: state.body });
    } else {
      console.log('optimistic');
      optimisticUpdates({ userId, title: state.title, body: state.body });
    }
    resetText();
  };

  return (
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
            value={state.title}
            onChange={handleText}
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
            value={state.body}
            onChange={handleText}
          />
        </div>
      </div>
      <div className="text-right space-x-2">
        <button
          className="bg-lime-300 px-4 py-1 disabled:opacity-50"
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
  );
};

const createPost = (newPost: CreatePostDto) => {
  return axios.post<PostEntity>('http://localhost:4000/posts', newPost);
};
