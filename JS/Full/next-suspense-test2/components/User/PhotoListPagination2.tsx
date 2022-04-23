import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState, useTransition } from 'react';
import { useQuery } from 'react-query';

const PAGE_SIZE = 100;

type Photo = {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

export const PhotoListPagination2: FC = () => {
  const [pageNum, setPageNum] = useState(1);

  const { data, isLoading, isFetching } = useQuery(['photo', pageNum], () => getPhotos(pageNum), {
    suspense: true,
  });

  console.log({ isLoading, isFetching });

  const [isPending, startTransition] = useTransition();

  const handlePagination = (pageNum: number) => {
    startTransition(() => {
      setPageNum(pageNum);
    });
  };

  return (
    <div>
      <Link href={'/'}>
        <a>ホーム</a>
      </Link>
      <ul style={{ display: 'flex', gap: '1rem' }}>
        <li>
          <button style={{ background: pageNum === 1 ? 'yellow' : 'white' }} onClick={() => handlePagination(1)}>
            1
          </button>
        </li>
        <li>
          <button style={{ background: pageNum === 2 ? 'yellow' : 'white' }} onClick={() => handlePagination(2)}>
            2
          </button>
        </li>
      </ul>
      <ul style={{ opacity: isPending && isFetching ? 0.8 : 1 }}>
        {data?.map((d) => (
          <li key={d.id}>
            <p>
              {d.id} {d.title}
            </p>
            <Image src={d.url} alt={d.title} width="100px" height="100px" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const getPhotos = async (page: number) => {
  const offset = (page - 1) * PAGE_SIZE;

  const data = await axios.get<Photo[]>(
    `https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=${PAGE_SIZE}`
    // http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5
  );
  return data.data;
};
