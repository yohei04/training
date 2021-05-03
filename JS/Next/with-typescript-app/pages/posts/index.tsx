import { InferGetStaticPropsType } from 'next';
import React from 'react';

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Post = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: IPost[] = await res.json();
  return {
    props: {
      posts,
    },
  };
};

export default Post;
