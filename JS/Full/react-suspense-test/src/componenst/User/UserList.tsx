import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

type User = {
  id: number;
  name: string;
};

const UserList: FC = () => {
  const { data, isLoading, isFetching } = useQuery(['user'], getUsers, {
    suspense: true,
  });

  console.log({ users: data, isLoadingUsers: isLoading, isFetchingUsers: isFetching });

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

export default UserList;

const getUsers = async () => {
  const data = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return data.data;
  // return data.data.slice(0, 5);
};
