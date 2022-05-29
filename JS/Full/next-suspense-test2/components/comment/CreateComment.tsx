import axios from 'axios';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { CommentEntity, CreateCommentDto } from '../../__generated__';

type Props = {
  postId: number;
};

export const CreateComment: FC<Props> = ({ postId }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, setError, formState } = useForm<CreateCommentDto>();
  const { errors, isSubmitting } = formState;

  // const onSubmit: SubmitHandler<CreateCommentDto> = (data) => {
  //   console.log({ data });
  //   return createComment({ userId: 1, postId, content: data.content }).catch((error) => {
  //     console.log(error.response.data.message[0]);
  //     // if (data.title > data.body) {
  //     //   setError('title', { message: 'タイトルはボディよりも短くなければなりません。' });
  //     // }
  //     // setError('title', { message: error.response.data.message[0] });
  //   });
  // };

  const { mutate, isLoading } = useMutation(
    (newComment: CreateCommentDto) =>
      createComment({ userId: 1, postId, content: newComment.content }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData<CommentEntity[]>(['userComments', postId], (old) =>
          old ? [...old, data.data] : []
        );
      },
      onError: (err) => {
        console.error('エラーが起きました', err);
      },
    }
  );

  return (
    <form onSubmit={handleSubmit(mutate)}>
      <div>
        <div>
          <label className="block" htmlFor="content">
            コメント:
          </label>
          <input
            className="w-full border-2"
            {...register('content', { required: true, maxLength: 15 })}
          />
          <span className="text-red-600">
            {errors.content?.type === 'required' && 'コメントを入力してください'}
          </span>
          <span className="text-red-600">
            {errors.content?.type === 'maxLength' && 'コメントは10文字以内で入力してください'}
          </span>
        </div>
      </div>
      <div className="text-right space-x-2">
        <button
          className="bg-lime-300 px-4 py-1 disabled:opacity-50"
          type="submit"
          name="post"
          disabled={isLoading}
        >
          投稿
        </button>
      </div>
    </form>
  );
};

const createComment = (newComment: CreateCommentDto) => {
  return axios.post<CommentEntity>('http://localhost:4000/comments', newComment);
};
