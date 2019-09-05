import axios from 'axios';

const OPEN_WEATHER = {
  url: 'https://api.openweathermap.org/data/2.5',
};

const openWeather = () => {
  const instance = axios.create({
    baseURL: OPEN_WEATHER.url,
  });
  return instance;
};

const openWeatherInstance = openWeather();

export {
  openWeatherInstance,
};
