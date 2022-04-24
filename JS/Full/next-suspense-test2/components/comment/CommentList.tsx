import axios from 'axios';
import { FC, useCallback, useState, useTransition } from 'react';
import { useQuery } from 'react-query';

import { Comment } from '../../types/comment';

type Props = {
  postId: number;
};

export const CommentList: FC<Props> = ({ postId }) => {
  const [isShowComment, setIsShowComment] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleShowComment = useCallback(() => {
    startTransition(() => {
      setIsShowComment((prev) => !prev);
    });
  }, []);

  const { data: comments } = useQuery(['userComments', postId], () => getComments(postId), {
    suspense: true,
    enabled: !!postId && isShowComment,
  });

  return (
    <div>
      <p style={{ cursor: 'pointer', opacity: isPending ? 0.5 : 1 }} onClick={handleShowComment}>
        コメント表示
      </p>
      {isShowComment && (
        <ul>
          {comments?.map((c) => (
            <li key={c.id}>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const getComments = async (postId: number) => {
  const data = await axios.get<Comment[]>(`http://localhost:4000/posts/${postId}/comments`);
  return data.data;
};
