import Link from 'next/link';
import React from 'react';
import { PostProps } from '../../../pages/posts';

const PostList = ({ posts }: PostProps) => {
  return (
    <>
      {posts.map((post) => (
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <a>
            <div className="post">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default PostList;
