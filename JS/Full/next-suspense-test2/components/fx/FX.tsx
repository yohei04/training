import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';

export const FX: FC = () => {
  const { data: fxData } = useQuery(['fx'], getFx, {
    suspense: true,
  });

  const lastUpdatedDay = new Date(fxData.time_last_update_utc);
  const lastUpdatedDayStr = lastUpdatedDay.toLocaleString('ja-JP').slice(0, -3);

  return (
    <section className="bg-blue-200 p-3">
      <h3 className="font-bold mb-1">今日の為替</h3>
      <p>米 ドル： {(1 / fxData?.rates.USD).toFixed(2)}</p>
      <p>カナダ ドル：{(1 / fxData?.rates.CAD).toFixed(2)}</p>
      <p>中国 元：{(1 / fxData?.rates.CNY).toFixed(2)}</p>
      <p>台湾 ドル：{(1 / fxData?.rates.TWD).toFixed(2)}</p>
      <p>{lastUpdatedDayStr} 最終更新</p>
    </section>
  );
};

const getFx = async () => {
  const data = await axios.get(`https://open.er-api.com/v6/latest/JPY`);
  return data.data;
};
