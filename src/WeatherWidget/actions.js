import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS,
} from './actionTypes';

function getWeather(params) {
  return {
    type: GET_WEATHER,
    payload: params,
  };
}

function getWeatherFail(errorMessage) {
  return {
    type: GET_WEATHER_FAIL,
    payload: errorMessage,
  };
}

function getWeatherSuccess(weather) {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: weather,
  };
}

export {
  getWeather,
  getWeatherFail,
  getWeatherSuccess,
};
