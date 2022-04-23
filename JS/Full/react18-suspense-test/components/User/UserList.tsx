import Image from 'next/image';
import React, { FC } from 'react';

type User = {
  id: number;
  // name: string;
  title: string;
  thumbnailUrl: string;
  url: string;
};

type Props = {
  data: User[];
};

const UserList: FC<Props> = ({ data }) => {
  return (
    <ul>
      {data?.map((d) => (
        <li key={d.id}>
          <p>{d.title}</p>
          <Image src={d.url} alt={d.title} width="100px" height="100px" />
        </li>
        // <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
