import { get } from 'lodash';

export const getMain = ({ weatherWidget }) => get(weatherWidget, 'weather.main');
export const getName = ({ weatherWidget }) => get(weatherWidget, 'weather.name');
export const getWeather = ({ weatherWidget }) => get(weatherWidget, 'weather.weather');
