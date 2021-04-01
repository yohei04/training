import { title } from 'node:process';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface PostsProps {}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC<PostsProps> = () => {
  const newPostDefaultValues = { title: '', body: '' };
  const [posts, setPosts] = useState<IPost[]>([]);
  const [newPost, setNewPost] = useState(newPostDefaultValues);
  const [postFormIsVisible, setPostFormIsVisible] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPostFormIsVisible(false);
        setNewPost(newPostDefaultValues);
        setPosts([...posts, data]);
      });
  };

  const handleCancel = () => {
    setPostFormIsVisible(false);
    setNewPost(newPostDefaultValues);
  };

  return (
    <>
      {!postFormIsVisible && (
        <button onClick={() => setPostFormIsVisible(true)}>Add New Post</button>
      )}

      {postFormIsVisible && (
        <form onSubmit={(e) => hadleSubmit(e)}>
          <h3>New Post</h3>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <br />
          <textarea
            placeholder="Body"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          ></textarea>
          <br />

          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
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
