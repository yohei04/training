import React, { useEffect, useState } from 'react';

interface PostsProps {}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC<PostsProps> = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
