import axios from 'axios';
import { FC, Suspense } from 'react';
import { useQuery } from 'react-query';

import { sleep } from '../../function/sleep';
import { Spinner } from '../spinner';
import { Translate } from './Translate';

export const Quote: FC = () => {
  const { data: quote } = useQuery(['quote'], getQuote, {
    suspense: true,
  });

  return (
    <>
      <section className="bg-blue-200 p-3">
        <h3 className="font-bold mb-1">今日の格言</h3>
        <p>
          <q cite="https://zenquotes.io/">{quote?.q}</q>
        </p>
        <p className="text-right">- {quote?.a} -</p>
        <Suspense fallback={<Spinner />}>
          <Translate text={quote?.q} />
        </Suspense>
      </section>
    </>
  );
};

const getQuote = async () => {
  const data = await axios.get(
    `https://corsanywhere.herokuapp.com/https://zenquotes.io/api/random`
  );
  await sleep(4000);
  return data.data[0];
};
