import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS,
} from './actionTypes';

function getWeather(payload) {
  return {
    type: GET_WEATHER,
    payload,
  };
}

function getWeatherFail(payload) {
  return {
    type: GET_WEATHER_FAIL,
    payload,
  };
}

function getWeatherSuccess(payload) {
  return {
    type: GET_WEATHER_SUCCESS,
    payload,
  };
}

export {
  getWeather,
  getWeatherFail,
  getWeatherSuccess,
};
