import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { Comment } from '../../types/comment';

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
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
};

const getComments = async (postId: number) => {
  const data = await axios.get<Comment[]>(`http://localhost:4000/posts/${postId}/comments`);
  return data.data;
};
