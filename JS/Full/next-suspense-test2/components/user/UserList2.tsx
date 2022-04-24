import React, { FC } from 'react';

import { User } from '../../types/user';

type Props = {
  data: User[];
};

export const UserList2: FC<Props> = ({ data }) => {
  return (
    <ul>
      {data?.map((d) => (
        <li key={d.id}>
          <p>
            {d.id}. {d.name}
          </p>
        </li>
      ))}
    </ul>
  );
};
