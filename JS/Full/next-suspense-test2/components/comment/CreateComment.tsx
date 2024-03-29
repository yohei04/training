import axios, { AxiosError } from 'axios';
import Error from 'next/error';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { CommentEntity, CreateCommentDto } from '../../__generated__';
import style from './CreateComment.module.css';

type Props = {
  postId: number;
};

const schema = z.object({
  content: z
    .string()
    .min(1, { message: '入力してください' })
    // .min(5, { message: '5文字以上で入力してください' }),
    .max(10, { message: '10文字以下で入力してください' }),
  // .email({ message: 'emailを入力してください' }),
});

export const CreateComment: FC<Props> = ({ postId }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, setError, formState } = useForm<CreateCommentDto>({
    resolver: zodResolver(schema),
    criteriaMode: 'all',
  });
  const { errors, isSubmitting } = formState;
  const contentErrors = errors.content?.types && Object.entries(errors.content?.types);

  const { mutate, isLoading } = useMutation(
    (newComment: CreateCommentDto) =>
      createComment({ userId: 1, postId, content: newComment.content }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData<CommentEntity[]>(['userComments', postId], (old) =>
          old ? [...old, data.data] : []
        );
      },
      onError: (err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          const errors = err?.response?.data.errors;
          errors.forEach((error: any) => {
            setError(error.property, {
              type: 'apiError',
              types: error.constraints,
            });
          });
        } else {
          console.error(err);
        }
      },
    }
  );

  const onSubmit = (newComment: CreateCommentDto) => {
    mutate(newComment);
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <fieldset>
          <label className="block" htmlFor="content">
            コメント:
          </label>
          <input
            // className="w-full border-2"
            className={style.root}
            aria-invalid={errors.content ? true : false}
            {...register('content')}
          />
          {errors.content?.type !== 'apiError' &&
            contentErrors?.map(([type, message]) => (
              <p className="text-red-600" key={type} role="alert">
                {message}
              </p>
            ))}
          {errors.content?.type === 'apiError' &&
            contentErrors?.map(([type, message]) => (
              <p className="text-red-600" key={type} role="alert">
                {type === 'maxLength' && 'from api コメントは10文字以内で入力してください'}
                {type === 'minLength' && 'from api コメントは15文字以上で入力してください'}
                {type === 'isUnique' && 'from api コメントはすでに存在しています'}
              </p>
            ))}
        </fieldset>
      </div>
      <div className="text-right space-x-2">
        <button
          className="bg-lime-300 px-4 py-1 disabled:opacity-50"
          type="submit"
          name="post"
          disabled={isLoading || !!contentErrors}
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

// https://stackoverflow.com/questions/60270468/throw-same-error-format-as-class-validator-in-nestjs
// https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
