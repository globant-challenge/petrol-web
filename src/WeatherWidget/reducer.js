import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS,
} from './actionTypes';

const defaultState = {
  errorMessage: null,
  fetching: false,
  weather: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        fetching: true,
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: payload,
        fetching: false,
      };
    default:
      return state;
  }
};
