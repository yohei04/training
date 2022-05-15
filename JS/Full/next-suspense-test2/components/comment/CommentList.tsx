import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { CommentEntity } from '../../__generated__';
import { sleep } from '../../function/sleep';

type Props = {
  postId: number;
};

export const CommentList: FC<Props> = ({ postId }) => {
  const { data: comments } = useQuery(['userComments', postId], () => getComments(postId), {
    suspense: true,
    enabled: !!postId,
  });

  return (
    <ul>
      {comments?.map((c) => (
        <li key={c.id}>
          <p>{c.content}</p>
        </li>
      ))}
    </ul>
  );
};

const getComments = async (postId: number) => {
  const data = await axios.get<CommentEntity[]>(`http://localhost:4000/comments/posts/${postId}`);
  // const data = await axios.get<Comment[]>(`http://localhost:4000/posts/${postId}/comments`);
  await sleep(1000);
  return data.data;
};
