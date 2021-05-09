import React from 'react'
import { PostProps } from '../../../pages/posts';

const PostList = ({ posts }: PostProps) => {
  return (
    <>
      {posts.map((post) => (
        <div className="post">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default PostList
