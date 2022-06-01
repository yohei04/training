import axios, { AxiosError } from 'axios';
import Error from 'next/error';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { CommentEntity, CreateCommentDto } from '../../__generated__';
import style from './CreateComment.module.css';

type Props = {
  postId: number;
};

export const CreateComment: FC<Props> = ({ postId }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, setError, formState } = useForm<CreateCommentDto>();
  const { errors, isSubmitting } = formState;
  const validationKeys = Object.keys(errors?.content?.types || []);

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
            {...register('content', {
              required: true,
              maxLength: 15,
            })}
          />
          <span className="text-red-600">
            {errors.content?.type === 'required' && 'コメントを入力してください'}
          </span>
          <span className={style.error} role="alert">
            {/* <span className="text-red-600"> */}
            {errors.content?.type === 'maxLength' && 'コメントは15文字以内で入力してください'}
          </span>
          {validationKeys.map((key) => (
            <span key={key} className="text-red-600">
              {key === 'isUnique' && '重複しています'}
              {key === 'maxLength' && 'コメントは10文字以内で入力してください'}
            </span>
          ))}
          <span className="text-red-600">{errors.content?.message}</span>
        </fieldset>
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

// https://stackoverflow.com/questions/60270468/throw-same-error-format-as-class-validator-in-nestjs
