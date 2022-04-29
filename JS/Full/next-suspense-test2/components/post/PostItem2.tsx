import axios from 'axios';
import { FC, ReactNode } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { Like } from '../../types/like';
import { Post } from '../../types/post';

type Props = {
  post: Post;
  children: ReactNode;
};

export const PostItem2: FC<Props> = ({ post, children }) => {
  const queryClient = useQueryClient();
  // const { data: likes } = useQuery(['likes', post.id], () => getLikes(post.id), {
  //   suspense: true,
  //   enabled: !!post.id,
  // });

  const { mutate: deletePostMutation } = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.setQueriesData<Post[]>(['userPosts', post.userId], (old) =>
        old ? old.filter((p) => p.id !== post.id) : []
      );
    },
  });

  return (
    <div className="bg-yellow-100 p-4 relative">
      <div className="absolute right-0 top-0 bg-red-600 text-white">
        <button className="px-2" onClick={() => deletePostMutation({ postId: post.id })}>
          x
        </button>
      </div>
      <p>タイトル：{post.title}</p>
      <p>本文：</p>
      <p>{post.body}</p>
      {/* <p>{likes?.length}</p> */}
      {children}
    </div>
  );
};

// const getLikes = async (postId: number) => {
//   const data = await axios.get<Like[]>(`http://localhost:4000/posts/${postId}/likes`);
//   return data.data;
// };

const deletePost = ({ postId }: { postId: number }) => {
  return axios.delete<Post>(`http://localhost:4000/posts/${postId}`);
};
