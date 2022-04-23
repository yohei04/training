import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, Suspense } from 'react';
import { useQuery } from 'react-query';

const PAGE_SIZE = 1000;

type Photo = {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

const PhotoListPagination: FC = () => {
  const router = useRouter();
  const pageNum = router.query.page ? Number(router.query.page) : 1;

  const { data, isLoading } = useQuery(['photo', pageNum], () => getPhotos(pageNum), {
    suspense: true,
  });

  console.log({ data, pageNum });

  return (
    <div>
      <Link href={'/'}>
        <a>ホーム</a>
      </Link>
      <ul style={{ display: 'flex', gap: '1rem' }}>
        <li>
          <Link href={`/photos?page=1`}>
            <a style={{ color: pageNum === 1 ? 'red' : 'black' }}>1</a>
          </Link>
        </li>
        <li>
          <Link href={`/photos?page=2`}>
            <a style={{ color: pageNum === 2 ? 'red' : 'black' }}>2</a>
          </Link>
        </li>
      </ul>
      <ul>
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

export default PhotoListPagination;

const getPhotos = async (page: number) => {
  const offset = (page - 1) * PAGE_SIZE;

  const data = await axios.get<Photo[]>(
    `https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=${PAGE_SIZE}`
    // http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5
  );
  return data.data;
};
