import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { Comment } from '../../types/comment';
import { Post } from '../../types/post';
import { User } from '../../types/user';

export const PostList: FC = () => {
  const { data } = useQuery(['data'], getData, {
    suspense: true,
  });

  return (
    <ul>
      {data?.map((d) => (
        <li key={d.id}>
          {d.posts.map((p) => (
            <div key={p.id} style={{ background: 'lightyellow', padding: '1rem', marginBottom: '1rem' }}>
              <p>
                {p.id}タイトル： {p.title}
              </p>
              <p>本文：</p>
              <p>{p.body}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>作者：{d.name}</span>
                <span>ライク：{p.likes}</span>
              </div>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

type PostRes = [
  User & {
    posts: [
      Post & {
        comments: Comment[];
        likes: number;
      }
    ];
  }
];

const getData = async () => {
  const data = await axios.get<PostRes>('http://localhost:4000/data');
  return data.data;
};
