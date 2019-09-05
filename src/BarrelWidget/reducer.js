import {
  GET_BARREL_DATA,
  GET_BARREL_DATA_SUCCESS,
  GET_BARREL_DATA_FAIL,
} from './actionTypes';

const defaultState = {
  errorMessage: null,
  fetching: false,
  weather: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_BARREL_DATA:
      return {
        ...state,
        fetching: true,
      };
    case GET_BARREL_DATA_SUCCESS:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_BARREL_DATA_FAIL:
      return {
        ...state,
        weather: payload,
        fetching: false,
      };
    default:
      return state;
  }
};
