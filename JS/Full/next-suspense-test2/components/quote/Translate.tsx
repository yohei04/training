import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { sleep } from '../../function/sleep';

type Props = {
  text: string;
};

export const Translate: FC<Props> = ({ text }) => {
  const { data: translatedText, isError } = useQuery(
    ['translate', text],
    () => getTranslate(`${text}`),
    {
      suspense: true,
      enabled: !!text,
    }
  );

  return (
    <>
      <p>翻訳：</p>
      <p>{translatedText?.text}</p>
    </>
  );
};

const getTranslate = async (
  text: string
): Promise<{
  text: string;
}> => {
  const data = await axios.get(
    `https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec?text=${text}&source=en&target=ja`
  );
  // await sleep(1000);
  return data.data;
};
