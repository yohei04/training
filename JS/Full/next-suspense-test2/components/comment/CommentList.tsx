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

  console.log({ comments });

  return (
    <div>
      <p>コメント</p>
      <ul>
        {comments?.map((c) => (
          <li key={c.id}>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getComments = async (postId: number) => {
  const data = await axios.get<Comment[]>(`http://localhost:4000/posts/${postId}/comments`);
  return data.data;
};
