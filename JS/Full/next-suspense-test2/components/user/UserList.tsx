import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

type User = {
  id: number;
  name: string;
};

export const UserList: FC = () => {
  const { data, isLoading, isFetching } = useQuery(['user'], getUsers, {
    suspense: true,
  });

  return (
    <ul>
      {data?.map((d) => (
        <li key={d.id}>
          <p>{d.name}</p>
        </li>
      ))}
    </ul>
  );
};

const getUsers = async () => {
  const data = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return data.data;
  // return data.data.slice(0, 1000);
};
