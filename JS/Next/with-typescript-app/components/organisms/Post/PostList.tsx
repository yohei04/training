import Link from 'next/link';
import React from 'react';
import { PostProps } from '../../../pages/posts';

import styles from './Post.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import clsx from 'clsx';

const PostList = ({ posts }: PostProps) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <a>
            <div className={clsx(styles.item, utilStyles.m_10)}>
              <h4>タイトル：{post.title}</h4>
              <p>本文：{post.body}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default PostList;
