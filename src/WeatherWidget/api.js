import { openWeatherInstance } from '../utils/requestHelper';
import errorHandler from '../utils/errorHandler';

export function getWeather(lat, lon) {
  return openWeatherInstance({
    url: `weather`,
    method: 'get',
    params: {
      lat: lat,
      lon: lon,
      APPID: "c38c2d4c4e57e80397b66318042b7333",
    }
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
