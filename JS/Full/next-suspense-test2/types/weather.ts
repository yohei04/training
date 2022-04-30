export type Weather = {
  city_name: string;
  country_code: string;
  ob_time: string;
  rh: number;
  temp: number;
  ts: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
};
