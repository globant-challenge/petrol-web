import {
  GET_ACTIONS,
  GET_ACTIONS_SUCCESS,
  GET_ACTIONS_FAIL,
} from './actionTypes';

const defaultState = {
  errorMessage: null,
  fetching: false,
  price: undefined,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ACTIONS:
      return {
        ...state,
        fetching: true,
      };
    case GET_ACTIONS_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_ACTIONS_SUCCESS:
      return {
        ...state,
        price: payload.price,
        fetching: false,
      };
    default:
      return state;
  }
};
