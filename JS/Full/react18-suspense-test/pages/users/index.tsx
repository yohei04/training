import axios from 'axios';
import { NextPage } from 'next';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useSWR from 'swr';

import UserList from '../../components/User/UserList';

// const UserList = lazy(() => import('../../components/User/UserList'));

const UserPage: NextPage = () => {
  const { data, error } = useSWR(['users'], getUser, { suspense: true });
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getUser().then((res) => {
  //     setData(res);
  //   });
  // }, []);

  // console.log({ data, error });

  // if (!data && !error) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Suspense fallback={<Fb />}>
      <UserList data={data} />
    </Suspense>
  );
};

export default UserPage;

const getUser = async () => {
  const data = await axios.get(
    'https://jsonplaceholder.typicode.com/users/1/photos'
    // 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
  );
  return data.data.slice(0, 1000);
};

function Fb() {
  console.log('ログログログ');
  return <h1>ローディング中です</h1>;
}
