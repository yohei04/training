import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

type Photo = {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

const PhotoList: FC = () => {
  const { data, isLoading } = useQuery(['photo'], getPhotos, {
    suspense: true,
  });

  console.log({ data });

  return (
    <ul>
      {data?.map((d) => (
        <li key={d.id}>
          <p>{d.title}</p>
          <img src={d.url} alt={d.title} width="100px" height="100px" />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;

const getPhotos = async () => {
  const data = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  return data.data.slice(0, 5);
};
