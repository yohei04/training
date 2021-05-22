import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import PostList from '../../components/organisms/Post/PostList';

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

const Post = ({ posts }: PostProps) => {
  return (
    <Layout title="Posts List | Next.js + TypeScript Example">
      <h1>Post page</h1>
      <PostList posts={posts} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
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
