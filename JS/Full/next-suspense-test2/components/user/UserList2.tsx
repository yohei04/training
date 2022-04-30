import axios from 'axios';
import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { User } from '../../types/user';

type Props = {
  selectedUserId: number;
  handleSelectedUserId: (id: number) => void;
};

export const UserList2: FC<Props> = ({ selectedUserId, handleSelectedUserId }) => {
  const { data: users } = useQuery(['users'], getUsers, {
    suspense: true,
  });

  return (
    <ul>
      {users?.map((u) => (
        <li className='mb-2' key={u.id}>
          <Link href={`/user/${u.id}`}>
            <a
              className={clsx('border-b-2', {
                'border-yellow-300': u.id === selectedUserId,
                'border-transparent': u.id !== selectedUserId,
              })}
              onClick={() => handleSelectedUserId(u.id)}
            >
              {u.id}. {u.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const getUsers = async () => {
  const data = await axios.get<User[]>('http://localhost:4000/users');
  // const data = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return data.data;
};
