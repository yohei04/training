import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { User } from '../../types/user';

type Props = {
  users: User[];
};

export const UserList2: FC<Props> = ({ users }) => {
  const { query } = useRouter();
  const userId: number = query.id ? Number(query.id) : 1;

  return (
    <ul>
      {users?.map((u) => (
        <li key={u.id}>
          <p style={{ borderBottom: u.id === userId ? '2px solid lightblue' : '2px solid transparent' }}>
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
