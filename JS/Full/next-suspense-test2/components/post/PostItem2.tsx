import { FC, ReactNode } from 'react';

import { Post } from '../../types/post';

type Props = {
  post: Post;
  children: ReactNode;
};

export const PostItem2: FC<Props> = ({ post, children }) => {
  return (
    <div style={{ background: 'lightyellow', padding: '1rem', marginBottom: '1rem' }}>
      <p>タイトル：{post.title}</p>
      <p>本文：</p>
      <p>{post.body}</p>
      {children}
    </div>
  );
};
