import axios from 'axios';
import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { CommentEntity } from '../../__generated__';

type Props = {
  comment: CommentEntity;
};

export const CommentItem: FC<Props> = ({ comment }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.setQueriesData<CommentEntity[]>(['userComments', comment.postId], (old) =>
        old ? old.filter((c) => c.id !== comment.id) : []
      );
    },
  });

  return (
    <li className="flex">
      <p>{comment.content}</p>
      <div className="bg-red-600 text-white ml-auto">
        <button className="px-2" onClick={() => mutate({ commentId: comment.id })}>
          x
        </button>
      </div>
    </li>
  );
};

const deleteComment = ({ commentId }: { commentId: number }) => {
  return axios.delete<CommentEntity>(`http://localhost:4000/comments/${commentId}`);
};
