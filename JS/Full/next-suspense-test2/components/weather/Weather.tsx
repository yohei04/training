import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { Weather as WeatherType } from '../../types/weather';

export const Weather: FC = () => {
  const { data: weather } = useQuery(['weather'], getWeather, {
    suspense: true,
  });

  return (
    <section>
      <div style={{ background: 'lightskyblue', padding: '0.01rem 1rem' }}>
        <p>天気：{weather?.weather.description}</p>
        <p>気温：{weather?.temp}°</p>
        <p>都市：{weather?.city_name}</p>
      </div>
    </section>
  );
};

const getWeather = async () => {
  const data = await axios.get<{ data: WeatherType[] }>(
    `https://api.weatherbit.io/v2.0/current?lang=ja&city=Tokyo&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  return data.data.data[0];
};
