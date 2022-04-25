import axios from 'axios';
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
        <li key={u.id}>
          <p
            style={{ borderBottom: u.id === selectedUserId ? '2px solid lightblue' : '2px solid transparent' }}
            onClick={() => handleSelectedUserId(u.id)}
          >
            <Link href={`/user/${u.id}`}>
              <a>
                {u.id}. {u.name}
              </a>
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
};

const getUsers = async () => {
  const data = await axios.get<User[]>('http://localhost:4000/users');
  return data.data;
};
