import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { sleep } from '../../function/sleep';
import { Weather as WeatherType } from '../../types/weather';

export const Weather: FC = () => {
  const { data: weather } = useQuery(['weather'], getWeather, {
    suspense: true,
  });

  const lastUpdatedDay = new Date((weather?.ts ?? 0) * 1000);
  const lastUpdatedDayStr = lastUpdatedDay.toLocaleString().slice(0, -3);

  return (
    <section className="bg-blue-200 p-3">
      <h3 className="font-bold mb-1">今日の天気</h3>
      <p>天気：{weather?.weather.description}</p>
      <p>気温：{weather?.temp}℃</p>
      <p>都市：{weather?.city_name}</p>
      <p>{lastUpdatedDayStr}現在</p>
    </section>
  );
};

const getWeather = async () => {
  const data = await axios.get<{ data: WeatherType[] }>(
    `https://api.weatherbit.io/v2.0/current?lang=ja&city=Tokyo&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  await sleep(1000);
  return data.data.data[0];
};
